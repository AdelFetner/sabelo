import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field(() => ID)
  id: string;

  @Field()
  bankName: string;

  @Field()
  cbu: string;

  @Field()
  balance: number;

  @Field()
  currency: string;

  @Field({ nullable: true })
  alias?: string;

  @Field(() => User)
  user: User;

  @Field()
  createdAt: Date;
}
