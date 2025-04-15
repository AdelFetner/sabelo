import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsEmail } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  password?: string;
}
