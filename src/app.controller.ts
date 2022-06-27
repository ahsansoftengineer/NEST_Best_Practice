import {  Controller, Get } from '@nestjs/common';
import { all_entities } from 'entity/all.entity';
import { Photo } from 'entity/photo.entity';
import { Post } from 'entity/post.entity';
import { PrimeEntity } from 'entity/prime.entity';
import { Question } from 'entity/question.entity';
import {  createConnection, getManager } from 'typeorm';

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
    const entityManager = getManager()
    
    // INSERT
    // const data  = await entityManager.insert(Question, {
    //   name: 'Ahsan',
    //   des: "No Description is Provided",
    //   question: 'Why learning This'
    // })

    // INSERT SAME TABLE WITH DIFFERENT TYPE
    // const data  = await entityManager.insert(Post, {
    //   name: 'Ahsan',
    //   des: "No Description is Provided",
    //   post: "My New Post Created yet"
    // })

    // const data  = await entityManager.insert(Photo, {
    //   name: 'Ahsan',
    //   des: "No Description is Provided",
    //   size: 35
    // })
    
    // SAVE
    // const question  = new Question()
    // question.name = "Ahsan"
    // question.des = 'Yet Des'
    // question.question = 'No Question'
    // const data  = await entityManager.save(question)

    // UPDATE
    // const data = await entityManager.update(Question, 1, { question: 'New Updated Question'})

    // DELETE
    // const data = await entityManager.delete(Question, 2)

    // FIND ALL
    // const data = await entityManager.find(Question)

    // FIND  PRIME ENTITY
    // const data = await entityManager.find(PrimeEntity)

    // FIND one by id return Object
    // const data = await entityManager.findOneById(PrimeEntity,  3)

    // FIND BY returns Array
    // const data = await entityManager.findBy(PrimeEntity,  {id: 3})

    const data = await entityManager.findOne(PrimeEntity,  {where: {id: 3}})
    return data
  }
}
