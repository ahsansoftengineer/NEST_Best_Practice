import {  Controller, Get } from '@nestjs/common';
import { all_entities } from 'entity/all.entity';
import { Question } from 'entity/question.entity';
import {  createConnection, getRepository, LessThanOrEqual } from 'typeorm';

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
    // PROJECTION AND SELECT
    // const data = await em.find(
    //   {
    //     select: ['name', 'question']
    //   }
    // )

    // FILTER WHERE
    // const data = await em.find(
    //   {
    //     where: {
    //       name:'Ahsan',
    //       des: 'Yet Des' 
    //     }
    //   }
    // )
    
    // FILTER WHERE / OR
    // const data = await em.find(
    //   {
    //     where: [
    //       {
    //         name:'Ahsan',
    //         des: 'Yet Des' 
    //       },
    //       {
    //         name: 'Furqan'
    //       }
    //     ]
    //   }
    // )

    // FILTER ORDER BY / ASENDING DESC
    // const data = await em.find(
    //   {
    //     order: {
    //         id: "DESC"
    //     },
    //     where: [
    //       {
    //         name:'Ahsan',
    //         des: 'Yet Des' 
    //       },
    //       {
    //         name: 'Furqan'
    //       }
    //     ],
    //   }
    // ) 
    // ORDER BY SKIP TAKE
    const data = await em.find(
      {
        order: {
            id: "DESC"
        },
        // skip: 1,
        take: 5
      }
    ) 
    // LESSTHAN NOT
    // const data = await em.find({
    //     id: LessThanOrEqual(5),
    //     order: {
    //         id: "DESC"
    //     },
    //     skip: 1,
    //     take: 5
    //   }
    // ) 
    return data
  }
}
