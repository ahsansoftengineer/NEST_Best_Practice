import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty,IsNumberString } from 'class-validator';
import { SignUpDto } from './sign-up.dto';

export class SignUpLawyerDto extends SignUpDto {
  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  specializationId: number;

  @ApiProperty({
    isArray: true,
    // type: Number,
    example: [1, 2, 3, 4],
  })
  @IsNotEmpty()
  courtIds: number[];
}
