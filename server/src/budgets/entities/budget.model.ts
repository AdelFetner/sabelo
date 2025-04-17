import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';
import { BaseModel } from 'src/utils/basemodel.model';

@ObjectType()
export class Budget extends BaseModel {
  @Field()
  name: string;

  @Field(() => String)
  limit: string;

  @Field({ nullable: true })
  category?: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => User)
  User: User;
}
