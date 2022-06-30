import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from 'feature-school/person/person.module';
import { Parent } from './entities/parent.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Parent]),
    PersonModule
  ],
  controllers: [ParentController],
  providers: [ParentService]
})
export class ParentModule {}
