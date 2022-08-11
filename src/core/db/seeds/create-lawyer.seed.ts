import { argon } from "core/constant";
import { Court, Lawyer, Specialization, User } from "core/entities";
import { GENDER, ROLE, STATUS } from "core/enums";
import { Connection} from "typeorm";
import { Factory, Seeder } from "typeorm-seeding"; 

export default class CreateLawyerSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const insert = connection.createQueryBuilder().insert();
    await insert.into(Specialization).values({ 
      title: 'Specialization Titles',
      desc: 'Specialization Descs', 
    }).execute()

    await insert.into(Court).values({ 
      title: 'Court Title',
      desc: 'Court Desc ', 
    }).execute()

    await insert.into(Court).values({ 
      title: 'Court Title 2',
      desc: 'Court Desc 2', 
    }).execute()

    await insert.into(User).values({ 
      name: 'Lawyer', 
      mobile: '03212825500',
      email: 'ssyedahmed31@gmail.com',  
      password: await argon.hash('Password@123'),
      gender: GENDER.MALE,
      role: ROLE.LAWYER,
      status: STATUS.PENDING,
      desc: 'Lawyer Desc', 
      address:'Lawyer Address', 
    }).execute()

    await insert.into(Lawyer).values({
      specializationId: 1,
      id: 2,
    }).execute()

    await connection.createQueryRunner()
      .query('INSERT INTO court_lawyer (lawyerId, courtId) VALUES (2, 1);');
  }
}