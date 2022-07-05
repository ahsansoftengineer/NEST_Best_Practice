import { Test, TestingModule } from '@nestjs/testing';
import { HomeWorkService } from './home-work.service';

describe('HomeWorkService', () => {
  let service: HomeWorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeWorkService],
    }).compile();

    service = module.get<HomeWorkService>(HomeWorkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
