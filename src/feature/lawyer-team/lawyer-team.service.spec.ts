import { Test, TestingModule } from '@nestjs/testing';
import { LawyerTeamService } from './lawyer-team.service';

describe('LawyerTeamService', () => {
  let service: LawyerTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LawyerTeamService],
    }).compile();

    service = module.get<LawyerTeamService>(LawyerTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
