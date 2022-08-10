import { Injectable } from '@nestjs/common';
import { Task } from 'core/entities/task.entity';
import { BaseService } from 'core/service';
import { CreateLawyerTaskDto, CreateTeamTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService extends BaseService {
  async createTeamTask(data: CreateTeamTaskDto, lawyerId: number) {
    const task: Task = {
      ...data,
      lawyerId, //
    };
    console.log({ task });
    const create = this.repos.task.create({ ...task });
    const save = await this.repos.task.save(create);
    return save;
  }

  async createLawyerTask(data: CreateLawyerTaskDto, lawyerId: number) {
    const task: Task = {
      ...data,
      lawyerId, //
    };
    console.log({ task });
    const create = this.repos.task.create({ ...task });
    const save = await this.repos.task.save(create);
    return save;
  }

  async statusLawyerTask({ id, status,feedback,pdf }, lawyerId: number) {
    return this.repos.task.update({ id, lawyerId }, { status, feedback, pdf });
  }

  async statusTeamTask({ id, status,feedback,pdf }, lawyerTeamId: number) {
    return this.repos.task.update({ id, lawyerTeamId }, { status, feedback, pdf});
  }

  // async update(lawyerId: number, id, data: UpdateTaskDto,) {
  //   const task = {
  //     ...data,
  //     lawyerId
  //   };
  //   console.log({ task });
  //   return this.repos.task.update({id}, task);
  // }
  get(lawyerId, id) {
    return this.repos.task.findOneBy({ lawyerId, id });
  }
  delete(lawyerId, id) {
    return this.repos.lawyerClient.delete({ lawyerId, id });
  }
}
