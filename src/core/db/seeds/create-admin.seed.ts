import { argon } from "core/constant";
import { User } from "core/entities";
import { GENDER, ROLE, STATUS } from "core/enums";
import { Connection} from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateAdminSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const insert = connection.createQueryBuilder().insert();
    await insert.into(User).values({ 
      name: 'Admin', 
      mobile: '03212827700',
      email: 'ahsansoftengineer@gmail.com',  
      password: await argon.hash('Password@123'),
      gender: GENDER.MALE,
      role: ROLE.ADMIN,
      status: STATUS.ACTIVE,
      desc: 'Admin Desc', 
      address:'Admin Address', 
    }).execute()
  }
}