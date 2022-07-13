import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { Parent } from './entities/parent.entity';

@Injectable()
export class ParentService extends BaseService {
  constructor(@InjectRepository(Parent) public repo: Repository<Parent>) {
    super();
  }
}
