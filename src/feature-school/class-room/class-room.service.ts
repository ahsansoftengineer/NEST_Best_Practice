import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassRoomDto } from './dto/create-class-room.dto';
import { UpdateClassRoomDto } from './dto/update-class-room.dto';
import { ClassRoom } from './entities/class-room.entity';

@Injectable()
export class ClassRoomService {
  constructor(
    @InjectRepository(ClassRoom)
    private repo: Repository<ClassRoom>,
  ) {}
  findAll() {
    return this.repo.find() || { message: `record does not exsist` };
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id }).then((data) => {
      return data || { message: `id ${id} does not exsist` };
    });
  }
  create(data: CreateClassRoomDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateClassRoomDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
  remove(id: number) {
    // return this.repo.delete(id);
    return this.repo.delete({ id });
  }
}
