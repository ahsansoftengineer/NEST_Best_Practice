import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { CreateDto } from 'core/base';
import { STATUS_APPOINT } from 'core/enums';

export class CreateAppoinmentDto extends CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'email for the Token is required in Email formit',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(7, 50)
  email: string;

  // Status and Role Must be comment out in Production
  @ApiProperty({
    enum: STATUS_APPOINT,
    isArray: false,
    example: STATUS_APPOINT.PENDING,
    default: STATUS_APPOINT.PENDING,
  })
  @IsOptional()
  @IsEnum(STATUS_APPOINT, {
    message: 'Status must be (Pending, Direct, Queue, Canacl)',
  })
  status: STATUS_APPOINT;

  // role: ROLE; //  ROLE.CLIENT_APPONITMENT

  @IsNotEmpty()
  @Length(11, 17)
  @ApiProperty()
  mobile: string;

  @ApiProperty()
  @IsNotEmpty()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  time: string;

  @IsNotEmpty()
  @IsNumberString()
  lawyerId: number;

  // gender: GENDER;
  // cityId: number;
  // address: string;
  // image: string;
}

export class UpdateAppoinmentDto extends PartialType(CreateAppoinmentDto) {}
