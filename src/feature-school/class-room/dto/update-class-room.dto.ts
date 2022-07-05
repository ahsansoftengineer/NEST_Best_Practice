import { PartialType } from '@nestjs/swagger';
import { CreateClassRoomDto } from './create-class-room.dto';

export class UpdateClassRoomDto extends PartialType(CreateClassRoomDto) {
  
}
