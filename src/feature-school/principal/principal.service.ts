import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'feature-school/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreatePrincipalDto } from './dto/create-principal.dto';
import { UpdatePrincipalDto } from './dto/update-principal.dto';
import { Principal } from './entities/principal.entity';

@Injectable()
export class PrincipalService {
  constructor(
    @InjectRepository(Principal)
    private repo: Repository<Principal>
  ) {}
  findAll() {
    // return this.addTeacherToPrincipal()
    return this.repo.find() ;
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id }).then((data) => {
      return data || { message: `id ${id} does not exsist` };
    });
  }
  create(data: CreatePrincipalDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdatePrincipalDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
  addTeacherToPrincipal(){
    return this.repo.createQueryBuilder('person')
    .andWhere('person.type = "Principal"')
    .innerJoinAndSelect('person.teachers', 'teacher')
    // .leftJoinAndSelect('person.person', 'Teacher')
    .getMany();
  }
  remove(id: number) {
    // return this.repo.delete(id);
    return this.repo.delete({ id });
  }
}
