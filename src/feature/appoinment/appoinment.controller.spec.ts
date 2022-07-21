import { Test, TestingModule } from '@nestjs/testing';
import { AppoinmentController } from './appoinment.controller';
import { AppoinmentService } from './appoinment.service';

describe('AppoinmentController', () => {
  let controller: AppoinmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppoinmentController],
      providers: [AppoinmentService],
    }).compile();

    controller = module.get<AppoinmentController>(AppoinmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
