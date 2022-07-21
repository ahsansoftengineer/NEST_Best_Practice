import { Test, TestingModule } from '@nestjs/testing';
import { AppoinmentService } from './appoinment.service';

describe('AppoinmentService', () => {
  let service: AppoinmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppoinmentService],
    }).compile();

    service = module.get<AppoinmentService>(AppoinmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
