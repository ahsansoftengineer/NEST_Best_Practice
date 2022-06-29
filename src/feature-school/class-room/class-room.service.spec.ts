import { Test, TestingModule } from '@nestjs/testing';
import { ClassRoomService } from './class-room.service';

describe('ClassRoomService', () => {
  let service: ClassRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassRoomService],
    }).compile();

    service = module.get<ClassRoomService>(ClassRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
