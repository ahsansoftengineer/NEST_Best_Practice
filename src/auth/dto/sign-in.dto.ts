import { ApiProperty } from "@nestjs/swagger";
import { hash } from "bcrypt";
import { IsNotEmpty, Length, Matches } from "class-validator";
import { BeforeInsert } from "typeorm";

export class SignInDto {
  @ApiProperty({
    description: 'username for the Token is required Length must be 7 to 20 charcter'
  })
  @IsNotEmpty()
  @Length(7, 20, {message: 'username or password invalid'})
  username: string

  // @BeforeInsert()
  // async hashPassword() {
  //    this.password = await hash(this.password, Number(process.env.HASH_SALT));
  // }
  @ApiProperty({
    description: 'password must has special character, alpha numeric and capital / small letters'
  })
  @IsNotEmpty()
  @Length(7, 20, {message: 'username or password invalid'})
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'username or password invalid'})
  password: string
}
