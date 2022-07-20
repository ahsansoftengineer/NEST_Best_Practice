import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { SignUpDto } from './sign-up.dto';

export class SignUpLawyerDto extends SignUpDto {
  
  @IsNotEmpty()
  city: string;
  // @ApiProperty({
  //   enum: Address,
  //   example: [{ title: 'My Address', desc: 'Any Description u want' }],
  //   description: 'Address[] Token is Optional',
  // })
  // @ValidateNested()
  // @Type(() => CreateAddressDto)
  // address?: Address[];

  @ApiProperty({
    isArray: true,
    example: [1,2,3,4],
  })
  @IsNotEmpty()
  specializations: number[];

  @ApiProperty({
    isArray: true,
    example: [1,2,3,4],
  })
  @IsNotEmpty()
  courts: number[];

  // @IsNotEmpty()
  // @Length(11, 17)
  @IsOptional()
  address: string;

  @IsOptional()
  image: string;
}