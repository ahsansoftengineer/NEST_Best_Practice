import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Repository } from 'typeorm';
import { CreateStudentClassDto } from './dto/create-student-class.dto';
import { UpdateStudentClassDto } from './dto/update-student-class.dto';
import { StudentClass } from './entities/student-class.entity';

@Injectable()
export class StudentClassService {
  constructor(@InjectRepository(StudentClass) public repo: Repository<StudentClass>) {
  }
  create(data: CreateStudentClassDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(dateFrom: Date, data: UpdateStudentClassDto) {
    let result: any = await this.repo.findOneBy({dateFrom});
    if(result) result = await this.repo.update(dateFrom, data);
    return result || { message: `id ${dateFrom} does not exsist` };
  }
}
