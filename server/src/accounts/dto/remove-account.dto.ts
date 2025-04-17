import { InputType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class RemoveAccountDto {
  @Field()
  @IsUUID()
  id: string;
}
