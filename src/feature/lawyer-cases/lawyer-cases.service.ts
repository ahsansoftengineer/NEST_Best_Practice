<<<<<<< HEAD
import { ForbiddenException, HttpException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { throwForbiddenException } from 'core/constant';
import { LawyerCase } from 'core/entities/lawyer-case.entity';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { NOTFOUND } from 'dns';
import { In } from 'typeorm';
import { CreateLawyerCaseDto, UpdateLawyerCaseDto } from './dto/create-lawyer-case.dto';
=======
import { ForbiddenException, Injectable } from '@nestjs/common';
import { deSearalizeUsers } from 'core/constant';
import { LawyerCase } from 'core/entities/lawyer-case.entity';
import { BaseService } from 'core/service';
import { RepoService } from 'core/shared/service/repo.service';
import { CreateLawyerCaseDto } from './dto/create-lawyer-case.dto';
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1

@Injectable()
export class LawyerCasesService extends BaseService {

  constructor(public repos: RepoService)
  {
    super();
    super.repo = this.repos.lawyerCase;
  }

  async create(data: CreateLawyerCaseDto) {
<<<<<<< HEAD
    // const existCase = await this.repos.lawyerCase.findOneBy({ title: data.title });
    // throwForbiddenException(existCase);
    
    // const courts = await this.repos.court.findBy({id: In(data.courtId)}) 


    const caseresult: LawyerCase = {
=======

    const caseresult: LawyerCase = {
      lawyerId:data.lawyerId,
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
      courtId: data.courtId,
      cityId: data.cityId,
      suit:data.suit,
      title:data.title,
      desc:data.desc,
      lasthearing:data.lasthearing,
      nexthearing:data.nexthearing
<<<<<<< HEAD

      // courts: courts, // when reteriving data before
      // courtIds: data.courtIds // This doesn't work in any way
=======
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
    };

    const lawyercase = this.repos.lawyerCase.create({ ...caseresult });
    await this.repos.lawyerCase.save(lawyercase).catch((error) => {
      console.log({ db_error: error });
      throw new ForbiddenException('Credentials incorrect');
    });

    return lawyercase;
  }
<<<<<<< HEAD

  // update(id: number, updateLawyerCaseDto: UpdateLawyerCaseDto) {
  //   return `This action updates a #${id} lawyerCase`;
  // }
  
    
  causelist(courtId: number,cityId: number,nexthearing:string) {
        return this.repos.lawyerCase.findBy({courtId, cityId, nexthearing }) || { message: ` does not exsist` };
        
  
    
      // return data || { message: `court ${courtId} does not exsist`} || { message: `cityId ${cityId} does not exsist` } || { message: `Date ${nexthearing} does not exsist` }
      // return data || {message:'Not Found'};
    
=======
    
  async causelist(courtId: number,cityId: number,nexthearing:string) {
    const result = await this.repos.lawyerCase.findBy({courtId, cityId, nexthearing })
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
>>>>>>> 9e9e597202698047f1ce48be842cec0714093ee1
  }

}
