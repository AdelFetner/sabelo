import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Transaction } from 'src/transactions/models/transaction.model';

@ObjectType()
export class TransactionPagination {
  @Field(() => [Transaction])
  items: Transaction[];

  @Field(() => Int)
  total: number;

  @Field()
  hasNextPage: boolean;

  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  totalPages: number;
}
