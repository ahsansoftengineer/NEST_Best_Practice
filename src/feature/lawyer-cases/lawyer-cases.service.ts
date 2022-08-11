import { ForbiddenException, Injectable } from '@nestjs/common';
import { deSearalizeUsers, throwForbiddenException, throwForbiddenExceptiontitle } from 'core/constant';
import { LawyerCase } from 'core/entities/lawyer-case.entity';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { CreateLawyerCaseDto } from './dto/create-lawyer-case.dto';
@Injectable()
export class LawyerCasesService extends BaseService {
  constructor(public repos: RepoService)
  {
    super();
    super.repo = this.repos.lawyerCase;
  }
  async create(data: CreateLawyerCaseDto) {

    const existUser = await this.repos.lawyerCase.findOneBy({ title: data.title });
    throwForbiddenExceptiontitle(existUser);
    
    const caseresult: LawyerCase = {
      lawyerId:data.lawyerId,
      courtId: data.courtId,
      cityId: data.cityId,
      suit:data.suit,
      title:data.title,
      desc:data.desc,
      lasthearing:data.lasthearing,
      nexthearing:data.nexthearing
    };
    const lawyercase = this.repos.lawyerCase.create({ ...caseresult });
    await this.repos.lawyerCase.save(lawyercase).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });
    return lawyercase;
  }
  async causelist(courtId: number,cityId: number,nexthearing:string,lawyerId) {
    const result = await this.repos.lawyerCase.findBy({courtId, cityId, nexthearing ,lawyerId})
    if(result?.length) return result
    else return {message: 'Data Not found'}
  }
  getLawyerCase(id) {
    return this.repos.lawyerCase
      .findBy({ lawyerId: id})
      .then((x) => deSearalizeUsers(x));
  }
  deleteLawyerCase(lawyerId, id) { 
    return this.repos.lawyerCase
      .createQueryBuilder('l')
      .delete()
      .where('id = :id AND lawyerId = :lawyerId', { id, lawyerId }); 
  }
}
