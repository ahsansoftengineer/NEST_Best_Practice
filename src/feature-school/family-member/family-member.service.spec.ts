import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMemberService } from './family-member.service';

describe('FamilyMemberService', () => {
  let service: FamilyMemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMemberService],
    }).compile();

    service = module.get<FamilyMemberService>(FamilyMemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
