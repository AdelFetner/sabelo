import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  passwordHash: string;

  @Field(() => [Account])
  accounts: Account[];

  @Field()
  createdAt: Date;
}
