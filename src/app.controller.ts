import {  Controller, Get } from '@nestjs/common';
import { all_advance_entities } from 'entity-advance/all-advance.entity';
import { Category } from 'entity-advance/category';
import {  createConnection, getManager } from 'typeorm';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: all_advance_entities,
  synchronize: true,
  dropSchema: true,
  logging: true
})
@Controller()
export class AppController {
  @Get('/')
  async getHello() {
    const repo = getManager()
    const bg = new Category()
    bg.title = 'BG'
    bg.text = 'bg'
    await repo.getRepository(Category).save(bg)

    const le = new Category()
    le.title = 'LE'
    le.text = 'le'
    le.parentCategory =  bg
    await repo.getRepository(Category).save(le)

    const ou = new Category()
    ou.title = 'OU'
    ou.text = 'ou'
    await repo.getRepository(Category).save(ou)

    const su = new Category()
    su.title = 'SU'
    su.text = 'su'
    su.parentCategory = ou
    await repo.getRepository(Category).save(su)


    bg.childCategories = [ou]
    await repo.getRepository(Category).save(bg)


    return repo.getRepository(Category).find({relations: ['childCategories', 'parentCategory']})
  }
}
