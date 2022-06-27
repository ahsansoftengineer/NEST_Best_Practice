import {  Controller, Get } from '@nestjs/common';
import { all_entities_rel } from 'entity-rel/all-entity-rel';
import { Category } from 'entity-rel/Category';
import { CompositUser } from 'entity-rel/CompositUser';
import { Photo } from 'entity-rel/Photo';
import { Profile } from 'entity-rel/Profile';
import { Question } from 'entity-rel/Question';
import { User } from 'entity-rel/User';
import {  createConnection, getManager, getRepository, LessThanOrEqual, Repository } from 'typeorm';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: all_entities_rel,
  synchronize: true,
  dropSchema: true,
  logging: true
})
@Controller()
export class AppController {
  @Get('/')
  async getHello() {
    const repo = getManager()
    // * COMPOSIT KEY
    // const cu = new CompositUser();
    // cu.firstName = "Muhammad"
    // cu.lastName = "Ahsan"
    // await em.save(cu)

    // const cu1 = new CompositUser();
    // cu1.firstName = "Muhammad"
    // cu1.lastName = "Ahmed"
    // await em.save(cu1)

    // * ONE TO ONE
    const p =  new Profile()
    p.gender = 'male'
    p.photo = './config/configuration.jpeg'
    await repo.save(Profile, p)
    
    // * MANY TO ONE
    const ph = new Photo();
    ph.url = 'someurl'
    // ph.user = u
    await repo.save(Photo, ph)

    const pho = new Photo();
    pho.url = 'someurl/new/path'
    // pho.user = u
    await repo.save(Photo, pho)

    // alternatively solution is also posibile
    // * ONE TO ONE | ONE TO MANY
    const u = new User()
    u.name = "Ahsan"
    u.profile = p
    u.photos = [ph, pho]
    await repo.save(User, u)

    // * FINDING DATA ONE TO MANY | MANY TO MAY | EAGER LOADING

    // After Setting Eager Loading
    // const data = await repo.find(User)
    
    // Setting Eager Load here
    // const data = await repo.find(Photo, {
    //   relations: {
    //       user: true,
    //   },
    // })

    // * Eager Loading by Query Builder
    // const data = await repo
    //   .getRepository(User)
    //   .createQueryBuilder("user")
    //   .leftJoinAndSelect("user.photos", "photo")
    //   .getMany()
    // ** or from inverse side
    // const data = await repo
    //   .getRepository(Photo)
    //   .createQueryBuilder("photo")
    //   .leftJoinAndSelect("photo.user", "user")
    //   .getMany()

    // * MANY TO MANY
    const category1 = new Category()
    category1.name = "animals"
    await repo.save(category1)

    const category2 = new Category()
    category2.name = "zoo"
    await repo.save(category2)

    const question = new Question()
    question.title = "dogs"
    question.text = "who let the dogs out?"
    question.categories = [category1, category2]
    const data = await repo.save(question)

    return data
  }
}
