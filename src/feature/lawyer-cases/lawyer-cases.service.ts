import { ForbiddenException, HttpException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { throwForbiddenException } from 'core/constant';
import { LawyerCase } from 'core/entities/lawyer-case.entity';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { NOTFOUND } from 'dns';
import { In } from 'typeorm';
import { CreateLawyerCaseDto, UpdateLawyerCaseDto } from './dto/create-lawyer-case.dto';

@Injectable()
export class LawyerCasesService extends BaseService {

  constructor(public repos: RepoService)
  {
    super();
    super.repo = this.repos.lawyerCase;
  }

  async create(data: CreateLawyerCaseDto) {
    // const existCase = await this.repos.lawyerCase.findOneBy({ title: data.title });
    // throwForbiddenException(existCase);
    
    // const courts = await this.repos.court.findBy({id: In(data.courtId)}) 


    const caseresult: LawyerCase = {
      courtId: data.courtId,
      cityId: data.cityId,
      suit:data.suit,
      title:data.title,
      desc:data.desc,
      lasthearing:data.lasthearing,
      nexthearing:data.nexthearing

      // courts: courts, // when reteriving data before
      // courtIds: data.courtIds // This doesn't work in any way
    };

    const lawyercase = this.repos.lawyerCase.create({ ...caseresult });
    await this.repos.lawyerCase.save(lawyercase).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });

    return lawyercase;
  }

  // update(id: number, updateLawyerCaseDto: UpdateLawyerCaseDto) {
  //   return `This action updates a #${id} lawyerCase`;
  // }
  
    
  causelist(courtId: number,cityId: number,nexthearing:string) {
        return this.repos.lawyerCase.findBy({courtId, cityId, nexthearing }) || { message: ` does not exsist` };
        
  
    
      // return data || { message: `court ${courtId} does not exsist`} || { message: `cityId ${cityId} does not exsist` } || { message: `Date ${nexthearing} does not exsist` }
      // return data || {message:'Not Found'};
    
  }

}
