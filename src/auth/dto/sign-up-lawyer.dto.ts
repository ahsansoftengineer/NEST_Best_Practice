import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty,IsNumberString, IsOptional } from 'class-validator';
import { SignUpDto } from './sign-up.dto';

export class SignUpLawyerDto extends SignUpDto {
  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  specializationId: number;

  @ApiProperty()
  @IsOptional()
  license: string;

  @ApiProperty({
    isArray: true,
    // type: Number,
    example: [1, 2, 3, 4],
  })
  @IsNotEmpty()
  courtIds: number[];
}
