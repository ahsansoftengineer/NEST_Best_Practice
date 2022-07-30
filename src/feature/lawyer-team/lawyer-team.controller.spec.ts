import { Test, TestingModule } from '@nestjs/testing';
import { LawyerTeamController } from './lawyer-team.controller';
import { LawyerTeamService } from './lawyer-team.service';

describe('LawyerTeamController', () => {
  let controller: LawyerTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LawyerTeamController],
      providers: [LawyerTeamService],
    }).compile();
  
    controller = module.get<LawyerTeamController>(LawyerTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
