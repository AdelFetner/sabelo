import { InputType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class RemoveUserDto {
  @Field()
  @IsUUID()
  id: string;
}
