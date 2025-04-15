import { IsOptional, IsEmail, IsStrongPassword } from 'class-validator';

export class UpdateUserValidation {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
  })
  password?: string;
}
