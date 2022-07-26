import { Test, TestingModule } from '@nestjs/testing';
import { LawyerClientService } from './lawyer-client.service';

describe('LawyerClientService', () => {
  let service: LawyerClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LawyerClientService],
    }).compile();

    service = module.get<LawyerClientService>(LawyerClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
