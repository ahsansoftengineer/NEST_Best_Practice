import { Test, TestingModule } from '@nestjs/testing';
import { DifferentDbController } from './different-db.controller';
import { DifferentDbService } from './different-db.service';

describe('DifferentDbController', () => {
  let controller: DifferentDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DifferentDbController],
      providers: [DifferentDbService],
    }).compile();

    controller = module.get<DifferentDbController>(DifferentDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
