import { Injectable } from '@nestjs/common';
import { BaseDTOService } from 'shared/service/BaseDTO.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends BaseDTOService<CreateUserDto, UpdateUserDto, User> {

}
