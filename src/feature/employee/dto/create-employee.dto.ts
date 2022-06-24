import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
