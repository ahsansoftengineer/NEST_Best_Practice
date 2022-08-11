import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserReqFieldDto } from 'auth/dto/user-req-field.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateLawyerTeamDto {
  @ApiProperty({
    description: 'email for the Token is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(7, 50)
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  responsibility: string;

  @IsNotEmpty()
  timing: string;

  @IsNotEmpty()
  @IsNumberString()
  amount: string;

  @IsNotEmpty()
  @Length(11, 17)
  @ApiProperty()
  mobile: string;

  @IsOptional()
  lawyerId: number;
}

export class UpdateLawyerTeamDto{

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Length(11, 17) 
  @ApiProperty()
  mobile: string;

  @ApiProperty({
    description:
      'password must has special character, alpha numeric and capital / small letters',
  })
  @IsNotEmpty()
  @Length(7, 20)
  password: string;

}
