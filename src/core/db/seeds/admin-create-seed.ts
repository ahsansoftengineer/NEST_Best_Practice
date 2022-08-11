import { argon } from "core/constant";
import { User } from "core/entities";
import { GENDER, ROLE, STATUS } from "core/enums";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateAdmin implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ 
          name: 'Admin', 
          mobile: '03212827700',
          email: 'ahsansoftengineer@gmail.com',  
          password: await argon.hash('Admin@123'),
          gender: GENDER.MALE,
          role: ROLE.ADMIN,
          status: STATUS.ACTIVE,
          desc: 'Admin Desc', 
          address:'Admin Address', 
        })
      .execute()
      console.log('seeding called');
      
  }
}