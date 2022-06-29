import { Test, TestingModule } from '@nestjs/testing';
import { PrincipalService } from './principal.service';

describe('PrincipalService', () => {
  let service: PrincipalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrincipalService],
    }).compile();

    service = module.get<PrincipalService>(PrincipalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
