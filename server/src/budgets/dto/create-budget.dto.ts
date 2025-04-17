import { InputType, Field } from '@nestjs/graphql';
import { IsDecimal, IsNotEmpty, IsString, IsDate } from 'class-validator';

@InputType()
export class CreateBudgetDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsDecimal({ decimal_digits: '2' })
  limit: string;

  @Field({ nullable: true })
  @IsString()
  category?: string;

  @Field()
  @IsDate()
  startDate: Date;

  @Field()
  @IsDate()
  endDate: Date;

  @Field()
  @IsString()
  userId: string;
}
