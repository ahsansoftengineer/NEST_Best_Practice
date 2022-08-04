import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserReqFieldDto } from 'auth/dto/user-req-field.dto';
import { IsNotEmpty, IsNumberString, IsOptional, IsString } from 'class-validator';

export class CreateLawyerClientDto extends UserReqFieldDto {

  // @ApiProperty()
  // @IsNumberString()
  // @IsNotEmpty()
  // lawyerId: number;

  @ApiProperty()
  @IsString() 
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  suite: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty() 
  caseNo: string;

  @IsOptional()
  // @IsNumber()
  cityId: number;

  
}

export class UpdateLawyerClientDto extends PartialType(CreateLawyerClientDto) {}
