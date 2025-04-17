import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsDecimal, IsOptional, IsString, IsISO8601 } from 'class-validator';
import { CreateBudgetDto } from './create-budget.dto';

@InputType()
export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {
  @Field()
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsDecimal({ decimal_digits: '2' })
  @IsOptional()
  limit?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  category?: string;

  @Field({ nullable: true })
  @IsISO8601()
  @IsOptional()
  startDate?: Date;

  @Field({ nullable: true })
  @IsISO8601()
  @IsOptional()
  endDate?: Date;
}
