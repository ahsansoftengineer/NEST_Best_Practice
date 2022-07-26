import { Test, TestingModule } from '@nestjs/testing';
import { LawyerClientController } from './lawyer-client.controller';
import { LawyerClientService } from './lawyer-client.service';

describe('LawyerClientController', () => {
  let controller: LawyerClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LawyerClientController],
      providers: [LawyerClientService],
    }).compile();

    controller = module.get<LawyerClientController>(LawyerClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
