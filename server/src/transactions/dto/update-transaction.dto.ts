import { InputType, Field } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { IsUUID } from 'class-validator';
import { CreateTransactionDto } from './create-transaction.dto';

@InputType()
export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
  @Field()
  @IsUUID()
  id: string;
}
