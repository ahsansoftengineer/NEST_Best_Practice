import { Test, TestingModule } from '@nestjs/testing';
import { StudentClassController } from './student-class.controller';
import { StudentClassService } from './student-class.service';

describe('StudentClassController', () => {
  let controller: StudentClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentClassController],
      providers: [StudentClassService],
    }).compile();

    controller = module.get<StudentClassController>(StudentClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
