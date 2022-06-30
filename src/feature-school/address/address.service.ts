import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private repo: Repository<Address>,
  ) {}
  // getPerson(){
  //   // getting data from token and show the record of the 
  //   return 1
  // }
  // findAll() {
  //   return this.repo.find() || { message: `record does not exsist` };
  // }
  private findOne(id: number) {
    return this.repo.findOneBy({ id }).then((data) => {
      return data || { message: `id ${id} does not exsist` };
    });
  }
  create(data: CreateAddressDto) {
    const result = this.repo.create(data);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateAddressDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
  remove(id: number) {
    // return this.repo.delete(id);
    return this.repo.delete({ id });
  }
}
