import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ROLE } from 'core/enums';
import { RepoService } from 'core/shared/service/repo.service';
import { ChangeStatusDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(public repos: RepoService) {}
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
    return this.repos.user.update(id, { status });
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
}
