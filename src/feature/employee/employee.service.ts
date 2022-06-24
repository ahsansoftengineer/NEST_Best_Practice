import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) 
    private  repo: Repository<Employee>
   ){
  }
  create(data: CreateEmployeeDto) {
    const result = this.repo.create(data) 
    return this.repo.save(result)
  }
  findAll() {
    return this.repo.find() || { message: `record does not exsist` }
  }
  findOne(id: number) {
    return this.repo.findOneBy({id})
    .then(data => {
      return data || { message: `id ${data.id} does not exsist` }
    })
  }
  async update(data: UpdateEmployeeDto) {
     await this.repo.update(+data.id, data);
     const result = await this.findOne(+data.id);
     return result || { message: `id ${data.id} does not exsist` }
  }
  remove(id: number) {
    // return this.repo.delete(id);
    return this.repo.delete({id});
  }
}
