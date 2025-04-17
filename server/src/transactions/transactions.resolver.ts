import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
import { TransactionsService } from './transactions.service';
import { Transaction } from './models/transaction.model';
import { TransactionPagination } from 'src/utils/pagination.model';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { User } from 'src/users/models/user.model';
import { Account } from 'src/accounts/models/account.model';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionFilterInput } from './dto/transaction-filter.dto';
import { BadRequestException } from '@nestjs/common';

@Resolver(() => Transaction)
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Mutation(() => Transaction)
  createTransaction(@Args('input') input: CreateTransactionDto) {
    return this.transactionsService.create(input);
  }

  @Mutation(() => Transaction)
  updateTransaction(@Args('input') input: UpdateTransactionDto) {
    return this.transactionsService.update(input);
  }

  @Mutation(() => Transaction)
  removeTransaction(@Args('id', { type: () => ID }) id: string) {
    return this.transactionsService.remove(id);
  }

  @Query(() => TransactionPagination, { name: 'transactions' })
  async findPaginated(
    @Args('userId', { type: () => ID }) userId: string,
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('pageSize', { type: () => Int, defaultValue: 50 }) pageSize: number,
    @Args('filters', { nullable: true, type: () => TransactionFilterInput })
    filters?: TransactionFilterInput,
  ) {
    if (page < 1) throw new BadRequestException('Page must be greater than 0');
    if (pageSize < 1 || pageSize > 100) {
      throw new BadRequestException('Page size must be between 1 and 100');
    }

    return this.transactionsService.findPaginated(
      userId,
      page,
      pageSize,
      filters,
    );
  }

  @Query(() => Transaction, { name: 'transaction' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.transactionsService.findOne(id);
  }

  @ResolveField(() => User, { name: 'user' })
  resolveUser(@Parent() transaction: Transaction) {
    return this.transactionsService.getTransactionUser(transaction.id);
  }

  @ResolveField(() => Account, { name: 'account', nullable: true })
  resolveAccount(@Parent() transaction: Transaction) {
    return transaction.accountId
      ? this.transactionsService.getTransactionAccount(transaction.id)
      : null;
  }

  @ResolveField(() => String)
  currency(@Parent() transaction: Transaction) {
    return transaction.accountId
      ? this.transactionsService.getTransactionCurrency(transaction.id)
      : 'ARS';
  }
}
