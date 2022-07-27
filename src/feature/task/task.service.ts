import { Injectable } from '@nestjs/common';
import { BaseService } from 'core/base';
import { Task } from 'core/entities/task.entity';
import { CreateLawyerTaskDto, CreateTeamTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService extends BaseService {
  async createTeamTask(data: CreateTeamTaskDto, lawyerId: number) {
    const task: Task = {
      ...data,
      lawyerId //
    };
    console.log({ task });
    const create = this.repos.task.create({ ...task });
    const save = await this.repos.task.save(create)
    return save;
  }

  async createLawyerTask(data: CreateLawyerTaskDto, lawyerId: number) {
    const task: Task = {
      ...data,
      lawyerId //
    };
    console.log({ task });
    const create = this.repos.task.create({ ...task });
    const save = await this.repos.task.save(create)
    return save;
  }

  async statusLawyerTask({id, status}, lawyerId: number) {
    return  this.repos.task.update({id, lawyerId}, {status});
  }

  async statusTeamTask({id, status}, lawyerTeamId: number) {
    return  this.repos.task.update({id, lawyerTeamId}, {status});
  }

  // async update(lawyerId: number, id, data: UpdateTaskDto,) {
  //   const task = {
  //     ...data,
  //     lawyerId
  //   };
  //   console.log({ task });
  //   return this.repos.task.update({id}, task);
  // }

  gets(lawyerId){
    return 
  }
  get(lawyerId, id){
    return this.repos.task.findOneBy({lawyerId, id})
  }
  delete(lawyerId, id){
    return this.repos.lawyerClient.delete({lawyerId, id})
  }
}
