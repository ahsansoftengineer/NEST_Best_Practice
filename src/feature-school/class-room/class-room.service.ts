import { Injectable, NotFoundException } from '@nestjs/common';
import { getEntityManagerToken, InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/BaseService';
import { Subject } from 'feature-school/subject/entities/subject.entity';
import { Teacher } from 'feature-school/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';
import { CreateClassRoomDto } from './dto/create-class-room.dto';
import { UpdateClassRoomDto } from './dto/update-class-room.dto';
import { ClassRoom } from './entities/class-room.entity';

@Injectable()
export class ClassRoomService extends BaseService {
  constructor(
    @InjectRepository(ClassRoom) public repo: Repository<ClassRoom>,
    @InjectRepository(Teacher) public  repoTecher: Repository<Teacher>,
    // @InjectRepository(Subject) public  repoSubject: Repository<Subject>,
  ) {super()}
  create(data: CreateClassRoomDto) {
    const teacher =  this.repoTecher.findOneBy({id: data.teacherId})
    console.log(teacher)
    // const subj =  this.repoSubject.findOneBy({id: data.subjectId})
    // getEntityManagerToken(Teacher)

    // if(!teacher) throw new NotFoundException({}, "Teacher Record Doesn\'t exsit")
    // if(!subj) throw new NotFoundException({}, "Subject Record Doesn\'t exsit")
    const res1 = {...data, teacher: {id: data.teacherId}, subject:{id:  data.subjectId}}
    console.log(res1);
    delete res1.teacherId
    delete res1.subjectId
    console.log(res1);
    const result = this.repo.create(res1);
    return this.repo.save(result);
  }
  async update(id: number, data: UpdateClassRoomDto) {
    let result: any = await this.findOne(id);
    if(result) result = await this.repo.update(id, data);
    return result || { message: `id ${id} does not exsist` };
  }
}
