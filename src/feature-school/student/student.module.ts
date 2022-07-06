import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PersonModule } from 'feature-school/person/person.module';
import { PersonService } from 'feature-school/person/person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { LoggerMiddleware } from 'middleware/LoggerMiddleware';

@Module({
  imports:[
    TypeOrmModule.forFeature([Student]),
    PersonModule
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes({path: 'student', method: RequestMethod.GET} )
      .exclude(
        {path: 'student', method: RequestMethod.GET}, 
        {path: 'student', method: RequestMethod.POST}
      )
      .forRoutes(StudentController)
  }

}
