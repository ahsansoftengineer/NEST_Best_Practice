import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Length, MaxLength } from 'class-validator';

export class CreateDto {
  @ApiProperty({
    example: 'Most Specific Detail for This Table',
    description: 'This Title Property Means the Major Property of the Table',
  })
  @IsNotEmpty()
  @Length(3, 40, {
    message: 'Title must be > 3 and < 40 character',
    context: {
      errorCode: 'myError Code',
      developerNote: 'This is Developer Note',
    },
  })
  title: string;

  @ApiProperty({
    example: 'Additional Info for this this row',
    description: 'Other usefull information',
    default: '',
  })
  @MaxLength(100, {
    message: 'Your useful information cannot be greater than 100 charater',
    context: {
      errorCode: 1003,
      developerNote: 'This is Developer Note',
    },
  })
  @IsOptional()
  desc: string;

  // const model = new MyClass();
  // validate(model).then(errors => {
  //   errors[0].contexts['minLength'].errorCode === 1003
  // });
}
