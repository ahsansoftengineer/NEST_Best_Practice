import { Test, TestingModule } from '@nestjs/testing';
import { CasezController } from './casez.controller';
import { CasezService } from './casez.service';

describe('CasezController', () => {
  let controller: CasezController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CasezController],
      providers: [CasezService],
    }).compile();

    controller = module.get<CasezController>(CasezController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
