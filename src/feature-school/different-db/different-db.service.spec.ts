import { Test, TestingModule } from '@nestjs/testing';
import { DifferentDbService } from './different-db.service';

describe('DifferentDbService', () => {
  let service: DifferentDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DifferentDbService],
    }).compile();

    service = module.get<DifferentDbService>(DifferentDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
