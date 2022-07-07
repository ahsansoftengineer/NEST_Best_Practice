import { Module } from '@nestjs/common';
import { PrincipalService } from './principal.service';
import { PrincipalController } from './principal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from 'feature-school/person/person.module';
import { Principal } from './entities/principal.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  
  imports:[
    TypeOrmModule.forFeature([Principal]),
    PersonModule
  ],
  controllers: [PrincipalController],
  providers: [PrincipalService]
})
export class PrincipalModule {}
