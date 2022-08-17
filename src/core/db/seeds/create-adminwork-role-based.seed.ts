// import { Book, Casez, City, Court, News, Specialization, User } from "core/entities";
// import { Connection } from "typeorm";
// import { Factory, Seeder } from "typeorm-seeding";

// export default class CreateAdminWorkRoleBasedSeed implements Seeder {
//   public async run(factory: Factory, connection: Connection): Promise<any> {
//     const insert = connection.createQueryBuilder().insert();

//     await insert.into(Book).values({
//       title: 'Book Titles',
//       desc: 'Book Descs',
//       pdf: 'book.pdf',
//       image: 'image.jpg'
//     }).execute()

//     await insert.into(Court).values([
//       {
//         title: 'Court Title',
//         desc: 'Court Desc '
//       },
//       {
//         title: 'Court Title 2',
//         desc: 'Court Desc 2',
//       }
//     ]).execute()

//     await insert.into(City).values({
//       title: 'City Name',
//       desc: 'City Descs',
//     }).execute()

//     await insert.into(Casez).values({
//       title: 'Case Titles',
//       desc: 'Case Descs',
//       pdf: 'case.pdf'
//     }).execute()

//     await insert.into(News).values({
//       title: 'News Title',
//       desc: 'News Descs',
//     }).execute()

//     await insert.into(Specialization).values({
//       title: 'Specialization Titlesz',
//       desc: 'Specialization Descsz',
//     }).execute()
//   }
// }