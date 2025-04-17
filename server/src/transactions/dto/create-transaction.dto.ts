import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsUUID, IsDate } from 'class-validator';
import { TransactionType } from '../models/transaction.model';

@InputType()
export class CreateTransactionDto {
  @Field(() => String)
  amount: string;

  @Field(() => TransactionType)
  type: TransactionType;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  category?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  date: Date;

  @Field()
  @IsUUID()
  userId: string;

  @Field({ nullable: true })
  @IsUUID()
  @IsOptional()
  accountId?: string;
}
