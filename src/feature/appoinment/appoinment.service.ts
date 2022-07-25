import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Appoinment } from 'core/entities/appoinment.entity';
import { RepoService } from 'core/shared/service/repo.service';
import { Repository } from 'typeorm';
import { CreateAppoinmentDto } from './dto/create-appoinment.dto';
import { UpdateAppoinmentDto } from './dto/update-appoinment.dto';

@Injectable()
export class AppoinmentService extends BaseService{
  constructor(public repos: RepoService){
    super()
    super.repo = this.repos.appointment
    
  }
}
