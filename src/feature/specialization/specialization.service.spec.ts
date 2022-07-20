import { Test, TestingModule } from '@nestjs/testing';
import { SpecializationService } from './specialization.service';

describe('SpecializationService', () => {
  let service: SpecializationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecializationService],
    }).compile();

    service = module.get<SpecializationService>(SpecializationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
