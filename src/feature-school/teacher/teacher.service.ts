import { Injectable } from '@nestjs/common';
import { Injector } from '@nestjs/core/injector/injector';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Student } from 'feature-school/student/entities/student.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService extends BaseService {
  constructor(@InjectRepository(Teacher) public repo: Repository<Teacher>) {
    super()
  }
  create(data: CreateTeacherDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateTeacherDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}
