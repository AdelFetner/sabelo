import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateCbuUnique(cbu: string) {
    const exists = await this.prisma.account.findUnique({ where: { cbu } });
    if (exists) throw new ConflictException(`CBU ${cbu} exists`);
  }

  async create(dto: CreateAccountDto) {
    await this.validateCbuUnique(dto.cbu);

    return this.prisma.account.create({
      data: {
        bankName: dto.bankName,
        cbu: dto.cbu,
        currency: dto.currency,
        alias: dto.alias,
        balance: dto.balance,
        User: { connect: { id: dto.userId } },
      },
      include: { User: true, Transaction: true },
    });
  }

  async findAll(userId: string) {
    return this.prisma.account.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      include: {
        User: true,
      },
    });
  }

  async findOne(id: string) {
    const account = await this.prisma.account.findUnique({
      where: { id, deletedAt: null },
      include: { User: true, Transaction: true },
    });
    if (!account) throw new NotFoundException(`Account ${id} not found`);
    return account;
  }

  async update(id: string, dto: UpdateAccountDto) {
    if (dto.cbu) await this.validateCbuUnique(dto.cbu);

    return this.prisma.account.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.$transaction(async (tx) => {
      await tx.transaction.updateMany({
        where: { accountId: id },
        data: { accountId: null },
      });

      return tx.account.update({
        where: { id },
        data: {
          deletedAt: new Date(),
          alias: null,
        },
      });
    });
  }
}
