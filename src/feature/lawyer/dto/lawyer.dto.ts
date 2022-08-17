import { ApiProperty, PartialType } from '@nestjs/swagger';
import { SignUpDto } from 'auth/dto';
import { IsNotEmpty, IsNumber, IsNumberString, IsOptional } from 'class-validator';

export class CreateLawyerDto extends SignUpDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNumberString()
  @ApiProperty()
  specializationId: number;

  @ApiProperty()
  @IsNotEmpty()
  license: string;

  @IsNumber({}, { each: true })
  courtIds: number[];
}
export class UpdateLawyerDto extends PartialType(CreateLawyerDto) {}
