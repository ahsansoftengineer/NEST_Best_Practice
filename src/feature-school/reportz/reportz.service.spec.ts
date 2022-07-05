import { Test, TestingModule } from '@nestjs/testing';
import { ReportzService } from './reportz.service';

describe('ReportzService', () => {
  let service: ReportzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportzService],
    }).compile();

    service = module.get<ReportzService>(ReportzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
