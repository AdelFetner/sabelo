import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateEmailUnique(email: string): Promise<void> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) throw new ConflictException(`Email ${email} exists`);
  }

  async create(dto: CreateUserDto) {
    await this.validateEmailUnique(dto.email);
    const hashedPassword = await hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash: hashedPassword,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    if (dto.email) await this.validateEmailUnique(dto.email);

    const data: Prisma.UserUpdateInput = {};
    if (dto.email) data.email = dto.email;
    if (dto.password) {
      data.passwordHash = await hash(dto.password, 10);
    }

    if (Object.keys(data).length === 0) {
      throw new Error('No valid fields provided for update');
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    try {
      return await this.prisma.user.delete({
        where: { id },
        include: { Account: true },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`User ${id} not found`);
        }
      }
      throw error;
    }
  }
}
