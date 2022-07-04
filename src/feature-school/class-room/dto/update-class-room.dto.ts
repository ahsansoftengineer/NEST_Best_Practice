import { PartialType } from '@nestjs/mapped-types';
import { CreateClassRoomDto } from './create-class-room.dto';

export class UpdateClassRoomDto extends PartialType(CreateClassRoomDto) {
  
}
