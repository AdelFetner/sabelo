import { ObjectType, Field } from '@nestjs/graphql';
import { Transaction } from 'src/transactions/models/transaction.model';

@ObjectType()
export class TransactionPagination {
  @Field(() => [Transaction])
  items: Transaction[];

  @Field()
  total: number;

  @Field()
  hasNextPage: boolean;

  @Field()
  currentPage: number;

  @Field()
  totalPages: number;
}
