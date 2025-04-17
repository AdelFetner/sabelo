import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class CreateAccountDto {
  @Field()
  @IsString()
  bankName: string;

  @Field()
  @IsString()
  @Length(22, 22)
  cbu: string;

  @Field({ defaultValue: 'ARS' })
  @IsString()
  @Length(3, 3)
  currency: string;

  @Field({ defaultValue: '0.00' })
  @IsString()
  @Length(1, 20)
  balance: string;

  @Field()
  @IsString()
  alias: string;

  @Field()
  @IsString()
  userId: string;
}
