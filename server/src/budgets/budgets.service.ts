import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { Prisma } from '@prisma/client';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBudgetDto) {
    await this.validateUniqueBudgetName(dto.userId, dto.name);

    return this.prisma.budget.create({
      data: {
        name: dto.name,
        limit: new Prisma.Decimal(dto.limit),
        category: dto.category,
        startDate: dto.startDate,
        endDate: dto.endDate,
        userId: dto.userId,
      },
      include: { User: true },
    });
  }

  async findAll(userId: string) {
    return this.prisma.budget.findMany({
      where: { userId },
      include: { User: true },
    });
  }

  async findOne(id: string) {
    const budget = await this.prisma.budget.findUnique({
      where: { id },
      include: { User: true },
    });

    if (!budget) throw new NotFoundException(`Budget ${id} not found`);
    return budget;
  }

  async update(id: string, dto: UpdateBudgetDto) {
    try {
      const data: Prisma.BudgetUpdateInput = {
        name: dto.name,
        limit: dto.limit ? new Prisma.Decimal(dto.limit) : undefined,
        category: dto.category,
        startDate: dto.startDate,
        endDate: dto.endDate,
      };

      Object.keys(data).forEach(
        (key) => data[key] === undefined && delete data[key],
      );

      if (Object.keys(data).length === 0) {
        throw new Error('No valid fields provided for update');
      }

      return this.prisma.budget.update({
        where: { id },
        data,
        include: { User: true },
      });
    } catch (error) {
      this.handlePrismaError(error, id);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.budget.delete({
        where: { id },
        include: { User: true },
      });
    } catch (error) {
      this.handlePrismaError(error, id);
    }
  }

  private async validateUniqueBudgetName(userId: string, name: string) {
    const existing = await this.prisma.budget.findFirst({
      where: { userId, name },
    });

    if (existing) {
      throw new ConflictException(
        `Budget name '${name}' already exists for this user`,
      );
    }
  }

  private handlePrismaError(error: any, id: string) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Budget ${id} not found`);
      }
    }
    throw error;
  }
}
