import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Account } from '@prisma/client';

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateCbuUnique(uncheckedCbu: string) {
    const existingAccount = await this.prisma.account.findUnique({
      where: { cbu: uncheckedCbu },
    });

    if (existingAccount) {
      throw new ConflictException(`CBU ${uncheckedCbu} already exists`);
    }
  }

  async create(
    userId: string,
    input: Omit<Prisma.AccountCreateInput, 'User'>,
  ): Promise<Account> {
    try {
      await this.validateCbuUnique(input.cbu);

      return await this.prisma.account.create({
        data: {
          ...input,
          balance: 0.0,
          User: { connect: { id: userId } },
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('CBU already exists');
        }
      }
      throw error;
    }
  }

  async findOne(id: string): Promise<Account> {
    const account = await this.prisma.account.findUnique({
      where: { id },
      include: {
        User: true,
        Transaction: true,
      },
    });

    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }

    return account;
  }

  async findAll(userId: string): Promise<Account[]> {
    return this.prisma.account.findMany({
      where: { userId },
      include: {
        User: true,
        Transaction: true,
      },
    });
  }

  async update(id: string, input: Prisma.AccountUpdateInput): Promise<Account> {
    try {
      const updateData: Prisma.AccountUpdateInput = {};

      if (input.cbu && typeof input.cbu === 'string') {
        await this.validateCbuUnique(input.cbu);
        updateData.cbu = input.cbu;
      }

      if (input.bankName) updateData.bankName = input.bankName;
      if (input.currency) updateData.currency = input.currency;
      if (input.alias) updateData.alias = input.alias;

      if (Object.keys(updateData).length === 0) {
        throw new Error('No valid fields provided for update');
      }

      return await this.prisma.account.update({
        where: { id },
        data: updateData,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Account not found');
        }
        if (error.code === 'P2002') {
          throw new ConflictException('CBU already exists');
        }
      }
      throw error;
    }
  }

  async remove(id: string): Promise<Account> {
    try {
      return await this.prisma.account.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Account not found');
        }
      }
      throw error;
    }
  }
}
