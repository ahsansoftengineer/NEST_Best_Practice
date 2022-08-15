import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { STATUS_APPOINT } from 'core/enums';

export class UpdateStatusLawyerAppoinmentDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'email for the Token is required in Email formit',
  })
  // @IsOptional()
  @IsEmail()
  @Length(7, 50)
  email: string;

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


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  feedback: string;
 
  @IsNumber()
  @IsNotEmpty()
  id:number;

}

