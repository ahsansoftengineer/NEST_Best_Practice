import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Appoinment } from 'core/entities/appoinment.entity';
import { Repository } from 'typeorm';
import { CreateAppoinmentDto } from './dto/create-appoinment.dto';
import { UpdateAppoinmentDto } from './dto/update-appoinment.dto';

@Injectable()
export class AppoinmentService extends BaseService{
  constructor(@InjectRepository(Appoinment) public repo: Repository<Appoinment>){
    super()
  }
}
