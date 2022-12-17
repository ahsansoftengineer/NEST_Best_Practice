// import { argon } from "core/constant";
// import { LawyerCase, LawyerClient, LawyerTeam, Task, User } from "core/entities";
// import { GENDER, ROLE, STATUS, STATUS_TASK } from "core/enums";
// import { Connection } from "typeorm";
// import { Factory, Seeder } from "typeorm-seeding";

// export default class CreateLawyerWorkRoleBasedSeed implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {
//     const insert = connection.createQueryBuilder().insert();
//     const lawyerTeam = await insert.into(User).values({
//       name: 'LawyerTeam',
//       mobile: '03212825500',
//       email: 'lawyerteam@gmail.com',
//       password: await argon.hash('Password@123'),
//       gender: GENDER.MALE,
//       role: ROLE.TEAM,
//       status: STATUS.ACTIVE,
//       image: 'lawyer-team-image.jpg',
//       address: 'karachi'
//     }).execute()
//     console.log({ lawyerTeam });

//     await insert.into(LawyerTeam).values({
//       id: 3,
//       amount: '24000',
//       responsibility: 'clerk',
//       timing: '02:00pm',
//       lawyerId: 2
//     }).execute()

//     const lawyerClient = await insert.into(User).values({
//       name: 'LawyerClient',
//       mobile: '03212825500',
//       email: 'lawyerClient@gmail.com',
//       password: await argon.hash('Password@123'),
//       gender: GENDER.MALE,
//       role: ROLE.CLIENT_LAWYER,
//       status: STATUS.NONE,
//       image: 'lawyer-client-image.jpg',
//       address: 'karachi',
//       cityId: 1
//     }).execute()
//     console.log({ lawyerClient });

//     await insert.into(LawyerClient).values({
//       id: 4,
//       type: 'property',
//       caseNo: '4233',
//       suite: 'suite',
//       lawyerId: 2
//     }).execute()

//     await insert.into(Task).values({
//       title: 'Task',
//       desc: 'Task desc',
//       pdf: 'task-image.pdf',
//       feedback: 'feedback',
//       status: STATUS_TASK.PENDING,
//       dueDate: '2022-09-03',
//       lawyerId: 2
//     }).execute()

//     await insert.into(Task).values({
//       title: 'Task team',
//       desc: 'Task team desc',
//       pdf: 'task-taem-image.pdf',
//       feedback: 'feedback',
//       dueDate: '2022-09-03',
//       status: STATUS_TASK.ASSIGN,
//       lawyerId: 2,
//       lawyerTeamId: 3
//     }).execute()

//     await insert.into(LawyerCase).values({
//       title: 'Lawyer Case',
//       desc: 'Lawyer Case desc',
//       suit: 'suite',
//       nexthearing: '2022-10-03',
//       lasthearing: '2022-08-03',
//       cityId: 1,
//       courtId: 1,
//       lawyerId: 2,
//     }).execute()
//   }
// }