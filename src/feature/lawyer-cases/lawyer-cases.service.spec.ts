import { Test, TestingModule } from '@nestjs/testing';
import { LawyerCasesService } from './lawyer-cases.service';

describe('LawyerCasesService', () => {
  let service: LawyerCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LawyerCasesService],
    }).compile();

    service = module.get<LawyerCasesService>(LawyerCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
