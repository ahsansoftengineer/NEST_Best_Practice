import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LawyerGetOrInvite {
  @ApiProperty({
    description: 'email for the Token is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(7, 50)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

}
