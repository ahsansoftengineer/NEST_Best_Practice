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

    // * MANY TO MANY Cascade Disabled 
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
    const result = await repo.save(question)

    // * MANY TO MANY
    // * *  Cascade Enabled we can save it within one go
    const cate1 = new Category()
    cate1.name = "animals"

    const cate2 = new Category()
    cate2.name = "zoo"

    const question2 = new Question()
    question2.title = "dogs"
    question2.text = "who let the dogs out?"
    question2.categories = [cate1, cate2]
    const results = await repo.save(question2)
    // return {result, results} 

    // * MANY TO MANY
    // * * DELETING MANY TO MANY RECORDS
    const QuestionRepo = await repo.getRepository(Question).findOne({
      where: { id: 2},
      relations:[
        'categories'
      ]
    })
    // * * Eager Loading is not availaible in findOneBy
    // const QuestionRepo = await repo.getRepository(Question).findOneBy({id: 2})
    QuestionRepo.categories =  QuestionRepo.categories.filter((category) => {
      return category.id !== 3
    })
    // const data = await repo.save(QuestionRepo)
    // return {result, results, data} 

    // * MANY TO MANY SOFT DELETE (NOT WORKING PURPOSAL)
    // It will delete the record from JUNCTION TABLE
    // await repo.getRepository(Question).softRemove(data)

    // * JOINS
    // * * LEFT JOIN GET MANY
    // const questions = await ( repo
    //   .getRepository(Question)
    //   .createQueryBuilder("question")
    //   .leftJoinAndSelect("question.categories", "category")
    //   .getMany()
    // )
    // * * RIGHT JOIN GET ONE
    const questions = await ( repo
      .getRepository(Question)
      .createQueryBuilder("question")
      .leftJoinAndSelect("question.categories", "category")
      .getOne()
    )
    // * UNI DIRECTIONAL AND BI DIRECTIONAL
    // * * Relations can be uni-directional and bi-directional. Uni-directional relations are relations with a relation decorator only on one side. Bi-directional relations are relations with decorators on both sides of a relation.

    // * EAGER RELATIONS
    // * * Eager relations only work when you use find* methods. If you use QueryBuilder eager relations are disabled and have to use leftJoinAndSelect to load the relation. Eager relations can only be used on one side of the relationship, using eager: true on both sides of relationship is disallowed.

    // * Note: 
    // * * if you came from other languages (Java, PHP, etc.) and are used to use lazy relations everywhere - be careful. Those languages aren't asynchronous and lazy loading is achieved different way, that's why you don't work with promises there. In JavaScript and Node.JS you have to use promises if you want to have lazy-loaded relations. This is non-standard technique and considered experimental in TypeORM.



    const data = {questions}
    return data
  }
}
