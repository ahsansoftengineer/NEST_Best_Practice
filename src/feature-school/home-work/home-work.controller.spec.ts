import { Test, TestingModule } from '@nestjs/testing';
import { HomeWorkController } from './home-work.controller';
import { HomeWorkService } from './home-work.service';

describe('HomeWorkController', () => {
  let controller: HomeWorkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeWorkController],
      providers: [HomeWorkService],
    }).compile();

    controller = module.get<HomeWorkController>(HomeWorkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
