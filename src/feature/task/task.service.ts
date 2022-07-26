import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { BetaModel } from 'core/entities';
import { Task } from 'core/entities/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService extends BaseService {
  async create(data: CreateTaskDto, lawyerId: number) {
    const task: Task = {
      ...data,
      lawyerId //
    };
    console.log({ task });
    const create = this.repos.task.create({ ...task });
    const save = await this.repos.task.save(create)
    return save;
  }

  async update(lawyerId: number, id, data: UpdateTaskDto,) {
    const task = {
      ...data,
      lawyerId
    };
    console.log({ task });
    return this.repos.task.update({id}, task);
  }

  gets(lawyerId){
    return this.repos.task.findBy({lawyerId})
  }
  get(lawyerId, id){
    return this.repos.task.findOneBy({lawyerId, id})
  }
  delete(lawyerId, id){
    return this.repos.lawyerClient.delete({lawyerId, id})
  }
}
