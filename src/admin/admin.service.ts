import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ROLE } from 'core/enums';
import { CoreService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { ChangeStatusDto } from './dto/admin.dto';

@Injectable()
export class AdminService extends CoreService {
  private userSelectiveColumns = {
    name: true,
    email: true,
    gender: true,
    mobile: true,
    image: true,
    role: true,
    status: true,
    cityId: true,
  };
  async changeStatusUser({ id, status }: ChangeStatusDto) {
    const user = await this.repos.user.findOneBy({ id });
    if (!user)
      throw new HttpException('User does not Exsist', HttpStatus.NOT_FOUND);
      try{
        const result = this.repos.user.update(id, { status });
        this.mail.lawyerAccountActivation({name: user.name, to: user.email})
        return result
      }catch(e){

      }
  }

  async getLawyers() {
    return this.repos.user.find({
      where: { role: ROLE.LAWYER },
      select: this.userSelectiveColumns,
    });
  }

  async getLawyer(id: number) {
    return this.repos.user.findOne({
      where: { id, role: ROLE.LAWYER },
      select: this.userSelectiveColumns,
    });
  }

  async causeListAdmin({courtId,nexthearing,lawyerId}) {
    const result = await this.repos.lawyerCase.findBy({courtId,nexthearing, lawyerId })
    if(result?.length) return result
    else return {message: 'Data Not found'}
  }
  async sendEmail({to, subject, html}){
   await this.mail.adminEmail({to, subject, html})
  }
}
