import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { Prisma, User } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from '../../src/graphql.schema';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateEmailUnique(email: string): Promise<void> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException(`Email ${email} already exists`);
    }
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      await this.validateEmailUnique(createUserInput.email);

      const hashedPassword = await hash(createUserInput.password, 10);

      return this.prisma.user.create({
        data: {
          email: createUserInput.email,
          passwordHash: hashedPassword,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Email already exists');
        }
      }
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    try {
      const updateData: Prisma.UserUpdateInput = {};

      if (typeof updateUserInput.email === 'string') {
        await this.validateEmailUnique(updateUserInput.email);
        updateData.email = updateUserInput.email;
      }

      if (typeof updateUserInput.password === 'string') {
        updateData.passwordHash = await hash(updateUserInput.password, 10);
      }

      if (Object.keys(updateData).length === 0) {
        throw new Error('No valid fields provided for update');
      }

      return await this.prisma.user.update({
        where: { id },
        data: updateData,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('User not found');
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Email already exists');
        }
      }
      throw error;
    }
  }

  async remove(id: string): Promise<{ id: string }> {
    try {
      await this.prisma.user.delete({ where: { id } });
      return { id };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('User not found');
        }
      }
      throw error;
    }
  }
}
