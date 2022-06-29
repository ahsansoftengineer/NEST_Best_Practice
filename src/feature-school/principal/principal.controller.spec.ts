import { Test, TestingModule } from '@nestjs/testing';
import { PrincipalController } from './principal.controller';
import { PrincipalService } from './principal.service';

describe('PrincipalController', () => {
  let controller: PrincipalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrincipalController],
      providers: [PrincipalService],
    }).compile();

    controller = module.get<PrincipalController>(PrincipalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
