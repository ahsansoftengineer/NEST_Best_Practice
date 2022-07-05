import { Test, TestingModule } from '@nestjs/testing';
import { ReportzController } from './reportz.controller';
import { ReportzService } from './reportz.service';

describe('ReportzController', () => {
  let controller: ReportzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportzController],
      providers: [ReportzService],
    }).compile();

    controller = module.get<ReportzController>(ReportzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
