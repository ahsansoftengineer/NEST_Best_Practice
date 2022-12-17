// import { argon } from "core/constant";
// import { Lawyer, User } from "core/entities";
// import { GENDER, ROLE, STATUS } from "core/enums";
// import { Connection } from "typeorm";
// import { Factory, Seeder } from "typeorm-seeding";

// export default class CreateLawyerSeed implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {
//     const insert = connection.createQueryBuilder().insert();
//     const lawyer = await insert.into(User).values({
//       name: 'Lawyer',
//       mobile: '03212825500',
//       email: 'ssyedahmed31@gmail.com',
//       password: await argon.hash('Password@123'),
//       gender: GENDER.MALE,
//       role: ROLE.LAWYER,
//       status: STATUS.ACTIVE,
//       desc: 'Lawyer Desc',
//       address: 'Lawyer Address',
//       image: 'lawyer-image.jpg',
//       cityId: 1,
//     }).execute()
//     console.log({ lawyer });

//     await insert.into(Lawyer).values({
//       specializationId: 1,
//       id: 2,
//     }).execute()

//     await connection.createQueryRunner()
//       .query('INSERT INTO court_lawyer (lawyerId, courtId) VALUES (2, 1);');
//   }
// }