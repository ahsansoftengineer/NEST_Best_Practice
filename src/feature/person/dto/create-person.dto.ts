import { IsEmail, IsInt, IsNotEmpty, IsPositive, Length, Max, MinLength } from "class-validator";

export class CreatePersonDto {
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @MinLength(7)
  @Length(4, 5)
  gender: string;
  
  @IsEmail()
  @Length(7, 20)
  email: string
  
  @IsInt()
  @IsPositive()
  @Max(150)
  age: number
}
