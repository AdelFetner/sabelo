import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseModel {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
