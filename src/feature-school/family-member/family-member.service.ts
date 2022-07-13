import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'core/base';
import { Repository } from 'typeorm';
import { CreateFamilyMemberDto } from './dto/create-family-member.dto';
import { UpdateFamilyMemberDto } from './dto/update-family-member.dto';
import { FamilyMember } from './entities/family-member.entity';

@Injectable()
export class FamilyMemberService extends BaseService {
  constructor(
    @InjectRepository(FamilyMember) public repo: Repository<FamilyMember>,
  ) {
    super();
  }
}
