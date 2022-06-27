import {  Controller, Get } from '@nestjs/common';
import { all_entities } from 'entity/all.entity';
import { Question } from 'entity/question.entity';
import {  createConnection, getRepository } from 'typeorm';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: all_entities,
  // synchronize: true,
  // dropSchema: true,
  logging: true
})
@Controller()
export class AppController {
  @Get('/')
  async getHello() {
    const em = getRepository(Question) // entityManager
    
    // INSERT
    // const data  = await em.insert({
    //   name: 'Ahsan',
    //   des: "No Description is Provided",
    //   question: 'Why learning This'
    // })
    // SAVE
    // const data  = await em.save({
    //   name: "Furqan",
    //   des: 'DESK',
    //   question: "Majid is who"
    // })

    // UPDATE
    // const data = await em.update(3, { question: 'New New Updated Question'})

    // DELETE
    // const data = await em.delete(6)

    // FIND ALL
    // const data = await em.find()

    // FIND one by id return Object
    // const data = await em.findOneById(3)

    // FIND BY returns Array
    // const data = await em.findBy({id: 3})

    const data = await em.findOne({where: {id: 1}})
    return data
  }
}
