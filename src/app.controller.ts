import {  Controller, Get } from '@nestjs/common';
import { AllEnitityRel } from 'entity-rel/all-entity-rel';
import { Branch } from 'entity-rel/Branch';
import { Order } from 'entity-rel/Order';
import { Product } from 'entity-rel/Product';
import { User } from 'entity-rel/User';
import {  createConnection, getManager } from 'typeorm';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: AllEnitityRel,
  synchronize: true,
  dropSchema: true,
  logging: true
})
@Controller()
export class AppController {
  @Get('/')
  async getHello() {
    // Creating Individually
    const em = getManager()
    const p = new Product()
    p.name = 'Pencil'
    p.price = 12000;
    p.quantityType = 'each'

    const p2 = new Product()
    p2.name = 'Sharpner'
    p2.price = 10;
    p2.quantityType = 'each'
    await em.save(p2)

    const p3 = new Product()
    p3.name = 'Tape'
    p3.price = 10;
    p3.quantityType = 'meter'
    await em.save(p3)

    const b  = new Branch()
    b.name = 'Fries'
    b.address = 'Korangi'
    await em.save(b)

    const b1  = new Branch()
    b1.name = 'Bar BQ'
    b1.address = 'Landhi'
    await em.save(b1)

    const u = new User();
    u.name = 'Furqan'
    u.branch = b
    u.products = [
      p
    ]
    await em.save(u)

    const u1 = new User();
    u1.name = 'Ahsan'
    u1.branch = b1
    u1.products = [
      p2, 
      p3
    ]
    await em.save(u1)

    const o = new Order()
    o.user = await em.findOneBy(User, {id: 1})
    o.product = await em.findOneBy(Product, {id: 1})
    o.quantity = 50
    await em.save(o)

    const o1 = new Order()
    o1.user = await em.findOneBy(User, {id: 2})
    o1.product = await em.findOneBy(Product, {id: 2})
    o1.quantity = 10
    await em.save(o1)

    const o2 = new Order()
    o2.user = await em.findOneBy(User, {id: 2})
    o2.product = await em.findOneBy(Product, {id: 1})
    o2.quantity = 5
    await em.save(o2)

    const result = await em.find(Order)
    return result
    }
}
