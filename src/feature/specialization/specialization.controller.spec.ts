import { Test, TestingModule } from '@nestjs/testing';
import { SpecializationController } from './specialization.controller';
import { SpecializationService } from './specialization.service';

describe('SpecializationController', () => {
  let controller: SpecializationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecializationController],
      providers: [SpecializationService],
    }).compile();

    controller = module.get<SpecializationController>(SpecializationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
