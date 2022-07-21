import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { SignUpDto } from './sign-up.dto';

export class SignUpLawyerDto extends SignUpDto {
  // @IsNumber()
  @IsNotEmpty()
  specializationId: number;

  @ApiProperty({
    isArray: true,
    example: [1, 2, 3, 4],
  })
  @IsNotEmpty()
  courtIds: number[];
}
