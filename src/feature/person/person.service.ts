import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private repo: Repository<Person>,
  ) {}
  create(data: CreatePersonDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  findAll() {
    return this.repo.find() || { message: `record does not exsist` };
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id }).then((data) => {
      return data || { message: `id ${data.id} does not exsist` };
    });
  }
  findOneByName(name: string) {
    return this.repo.findOneBy({ name }).then((data) => {
      return data || { message: `id ${data.id} does not exsist` };
    });
  }
  async update(data: UpdatePersonDto) {
    await this.repo.update(+data.id, data);
    const result = await this.findOne(+data.id);
    return result || { message: `id ${data.id} does not exsist` };
  }
  remove(id: number) {
    // return this.repo.delete(id);
    return this.repo.delete({ id });
  }
}
