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
  findAll() {
    console.log('Base Service findAllCalled');
    return this.repo.find() || { message: `record does not exsist` };
  }
  findOne(dateFrom: Date) {
    return this.repo.findOneBy({ dateFrom }).then((data) => {
      return data || { message: `dateFrom ${dateFrom} does not exsist` };
    });
  }
  remove(dateFrom: Date) {
    // return this.repo.delete(dateFrom);
    return this.repo.delete({ dateFrom });
  }
  create(data: CreateStudentClassDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(dateFrom: Date, data: UpdateStudentClassDto) {
    let result: any = await this.findOne(dateFrom);
    if(result) result = await this.repo.update(dateFrom, data);
    return result || { message: `dateFrom ${dateFrom} does not exsist` };
  }
}
