import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Account } from 'src/accounts/models/account.model';
import { User } from 'src/users/models/user.model';
import { BaseModel } from 'src/utils/basemodel.model';

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

registerEnumType(TransactionType, {
  name: 'TransactionType',
  description: 'Type of transaction (INCOME/EXPENSE)',
});

@ObjectType()
export class Transaction extends BaseModel {
  // Decimal as string
  @Field(() => String)
  amount: string;

  @Field(() => TransactionType)
  type: TransactionType;

  @Field({ nullable: true })
  category?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  date: Date;

  @Field(() => String)
  userId: string;

  @Field(() => User, { nullable: true })
  User?: User;

  @Field(() => String, { nullable: true })
  accountId?: string;

  @Field(() => Account, { nullable: true })
  Account?: Account | null;
}
