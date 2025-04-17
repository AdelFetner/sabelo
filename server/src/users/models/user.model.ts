import { ObjectType, Field } from '@nestjs/graphql';
import { Account } from 'src/accounts/models/account.model';
import { Budget } from 'src/budgets/entities/budget.model';
import { Transaction } from 'src/transactions/models/transaction.model';
import { BaseModel } from 'src/utils/basemodel.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;

  @Field()
  passwordHash: string;

  @Field(() => [Account], { nullable: true })
  accounts?: Account[];

  @Field(() => [Transaction])
  transactions: Transaction[];

  @Field(() => [Budget])
  budgets: Budget[];
}
