import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserReqFieldDto } from 'auth/dto/user-req-field.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, Length } from 'class-validator';

export class CreateLawyerTeamDto {
  @ApiProperty({
    description: 'email for the Token is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(7, 50)
  email: string;


  @IsNotEmpty()
  responsibility: string;

  @IsNotEmpty()
  timing: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @Length(11, 17)
  @ApiProperty()
  mobile: string;

  @IsOptional()
  lawyerId: number;
}

export class UpdateLawyerTeamDto extends PartialType(CreateLawyerTeamDto) {}
