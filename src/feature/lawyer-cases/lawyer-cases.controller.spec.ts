import { Test, TestingModule } from '@nestjs/testing';
import { LawyerCasesController } from './lawyer-cases.controller';
import { LawyerCasesService } from './lawyer-cases.service';

describe('LawyerCasesController', () => {
  let controller: LawyerCasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LawyerCasesController],
      providers: [LawyerCasesService],
    }).compile();

    controller = module.get<LawyerCasesController>(LawyerCasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
