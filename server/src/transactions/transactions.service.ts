import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionPagination } from 'src/utils/pagination.model';
import { Transaction } from './models/transaction.model';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionFilterInput } from './dto/transaction-filter.dto';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  private convertFiltersToWhere(
    filters?: TransactionFilterInput,
  ): Prisma.TransactionWhereInput {
    return {
      userId: filters?.userId,
      type: filters?.type,
      category: filters?.category,
      date: {
        gte: filters?.date_gte,
        lte: filters?.date_lte,
      },
    };
  }

  async findPaginated(
    userId: string,
    page: number,
    pageSize: number,
    filters?: TransactionFilterInput,
  ): Promise<TransactionPagination> {
    const skip = (page - 1) * pageSize;
    const where = this.convertFiltersToWhere({ ...filters, userId });

    const [transactions, total] = await Promise.all([
      this.prisma.transaction.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { date: 'desc' },
        select: {
          id: true,
          amount: true,
          type: true,
          category: true,
          description: true,
          date: true,
          createdAt: true,
          updatedAt: true,
          userId: true,
          accountId: true,
        },
      }),
      this.prisma.transaction.count({ where }),
    ]);

    const items = transactions.map((t) => ({
      ...t,
      amount: t.amount.toString(),
      User: undefined,
      Account: undefined,
    })) as Transaction[];

    return {
      items: items,
      total,
      hasNextPage: total > page * pageSize,
      currentPage: page,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  async findOne(id: string) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id },
      include: this.defaultInclude,
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction ${id} not found`);
    }

    return {
      ...transaction,
      amount: transaction.amount.toString(),
    };
  }

  async getTransactionUser(transactionId: string) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
      select: { User: true },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction ${transactionId} not found`);
    }

    return transaction.User;
  }

  async getTransactionAccount(transactionId: string) {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
      select: { Account: true },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction ${transactionId} not found`);
    }

    return transaction.Account;
  }

  async create(dto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: {
        amount: new Prisma.Decimal(dto.amount),
        type: dto.type,
        category: dto.category,
        description: dto.description,
        date: dto.date,
        userId: dto.userId,
        accountId: dto.accountId,
      },
      include: this.defaultInclude,
    });
  }

  private get defaultInclude() {
    return {
      User: { select: { id: true, email: true } },
      Account: { where: { deletedAt: null } },
    };
  }

  async update(dto: UpdateTransactionDto) {
    try {
      return await this.prisma.transaction.update({
        where: { id: dto.id },
        data: {
          ...dto,
          userId: undefined,
          accountId: undefined,
        },
        include: this.defaultInclude,
      });
    } catch (error: unknown) {
      this.handlePrismaError(error, dto.id);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.transaction.delete({
        where: { id },
        include: { User: true, Account: true },
      });
    } catch (error) {
      this.handlePrismaError(error, id);
    }
  }

  private handlePrismaError(error: any, id: string) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Transaction ${id} not found`);
      }
    }
    throw error;
  }

  // frontend functions
  async getTransactionCurrency(transactionId: string): Promise<string> {
    const transaction = await this.prisma.transaction.findUnique({
      where: { id: transactionId },
      select: { Account: { select: { currency: true } } },
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction ${transactionId} not found`);
    }

    return transaction.Account?.currency || 'ARS';
  }
}
