import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService extends BaseService {
  constructor(@InjectRepository(Student) public repo: Repository<Student>) {
    super()
  }
  create(data: CreateStudentDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateStudentDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}
