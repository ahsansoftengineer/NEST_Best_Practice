import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Person]),
  ],
})
export class PersonModule {}
