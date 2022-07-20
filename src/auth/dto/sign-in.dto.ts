import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description:
      'email for the Token is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // @BeforeInsert()
  // async hashPassword() {
  //    this.password = await hash(this.password, Number(process.env.HASH_SALT));
  // }
  @ApiProperty({
    description:
      'password must has special character, alpha numeric and capital / small letters',
  })
  @IsNotEmpty()
  @Length(7, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password must has special character, alpha numeric and capital / small letters',
  })
  password: string;
}