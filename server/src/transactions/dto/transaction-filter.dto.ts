import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsISO8601 } from 'class-validator';
import { TransactionType } from '../models/transaction.model';

@InputType()
export class TransactionFilterInput {
  @Field(() => TransactionType, { nullable: true })
  @IsOptional()
  type?: TransactionType;

  @Field({ nullable: true })
  @IsOptional()
  category?: string;

  // gte and lte refer to greater and less than, i.e: a date range
  @Field({ nullable: true })
  @IsISO8601()
  @IsOptional()
  date_gte?: Date;

  @Field({ nullable: true })
  @IsISO8601()
  @IsOptional()
  date_lte?: Date;

  @Field()
  userId?: string;
}
