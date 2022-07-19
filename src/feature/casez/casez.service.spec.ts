import { Test, TestingModule } from '@nestjs/testing';
import { CasezService } from './casez.service';

describe('CasezService', () => {
  let service: CasezService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasezService],
    }).compile();

    service = module.get<CasezService>(CasezService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
