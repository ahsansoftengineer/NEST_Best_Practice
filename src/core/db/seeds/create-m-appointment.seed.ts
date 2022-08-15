import { Appoinment, User } from "core/entities";
import { GENDER, ROLE, STATUS_APPOINT } from "core/enums";
import { Connection} from "typeorm";
import { Factory, Seeder } from "typeorm-seeding"; 

export default class CreateMAppointmentSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const insert = connection.createQueryBuilder().insert();
    const appointment = await insert.into(User).values({ 
      name: 'Appointment', 
      mobile: '03212825500',
      email: 'appointment@gmail.com',  
      password: '',
      gender: GENDER.MALE,
      role: ROLE.CLIENT_APPONITMENT,
      address:'Appointment Address', 
      image: 'appointment-image.jpg'
    }).execute()
    console.log({appointment});

    await insert.into(Appoinment).values({
      id: 8,
      title: 'Appointment',
      desc: 'Appointment desc',
      date: '20-06-2023',
      time: '03:00pm',
      status:STATUS_APPOINT.PENDING,
      feedback: '',
      lawyerId: 2
    }).execute()
  }
}