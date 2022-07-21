import { PartialType } from '@nestjs/swagger';
import { SignUpDto } from '.';

export class UpdateUser extends PartialType(SignUpDto) {}
