import { ObjectType, Field } from '@nestjs/graphql';
import { Transaction } from 'src/transactions/models/transaction.model';
import { User } from 'src/users/models/user.model';
import { BaseModel } from 'src/utils/basemodel.model';

@ObjectType()
export class Account extends BaseModel {
  @Field()
  bankName: string;

  @Field()
  cbu: string;

  @Field(() => String, { defaultValue: '0.00' })
  balance: string;

  @Field()
  currency: string;

  @Field({ nullable: true })
  alias?: string;

  @Field(() => User)
  User: User;

  @Field(() => [Transaction], { nullable: true })
  Transaction?: Transaction[];

  @Field({ nullable: true })
  deletedAt?: Date;
}
