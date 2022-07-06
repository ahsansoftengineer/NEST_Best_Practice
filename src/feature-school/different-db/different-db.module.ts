import { Module } from '@nestjs/common';
import { DifferentDbService } from './different-db.service';
import { DifferentDbController } from './different-db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DifferentDb } from './entities/different-db.entity';
import { BaseModel } from 'core/BaseModel';
import { DifferentDataSource } from './index';

@Module({
  imports:[
    // TypeOrmModule.forFeature([DifferentDb, BaseModel], {
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'anotherdb',
    //   // This how you Registered your Model Classes
    //   entities: [DifferentDb],
    //   logging: true,
    //   // Other Settings
    //   // synchronize: true,
    //   // dropSchema: true,
    // }),
  ],
  controllers: [DifferentDbController],
  providers: [DifferentDbService]
})
export class DifferentDbModule {
  constructor(){
    DifferentDataSource.initialize()
    .then(() => {
      console.log('another db initialized');
      
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
  }
}
