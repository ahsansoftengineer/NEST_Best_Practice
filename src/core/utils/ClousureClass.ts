
export function findAll() {
  return this.repo.find() || { message: `record does not exsist` };
}
export function findOne(id: number) {
  return this.repo.findOneBy({ id }).then((data) => {
    return data || { message: `id ${id} does not exsist` };
  });
}
// export class ClousureClass{
//   private repo: Repository<any>

//   // create(data: CreateTeacherDto) {
//   //   const result = this.repo.create(data);
//   //   return this.repo.save(result);
//   // }
//   // async update(id: number, data: UpdateTeacherDto) {
//   //   let result: any = await this.findOne(id);
//   //   if(result) result = await this.repo.update(id, data);
//   //   return result || { message: `id ${id} does not exsist` };
//   // }
//   remove(id: number) {
//     // return this.repo.delete(id);
//     return this.repo.delete({ id });
//   }
// }