import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { CreateClassRoomDto } from './dto/create-class-room.dto';
import { UpdateClassRoomDto } from './dto/update-class-room.dto';

@Controller('class-room')
export class ClassRoomController {
  constructor(private readonly classRoomService: ClassRoomService) {}

  @Post()
  create(@Body() createClassRoomDto: CreateClassRoomDto) {
    return this.classRoomService.create(createClassRoomDto);
  }

  @Get()
  findAll() {
    return this.classRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classRoomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassRoomDto: UpdateClassRoomDto) {
    return this.classRoomService.update(+id, updateClassRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classRoomService.remove(+id);
  }
}
