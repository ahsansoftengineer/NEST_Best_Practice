import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOkResponse({type: User, isArray: true})
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @ApiOkResponse({type: User})
  @ApiNotFoundResponse() // It Docuements that it can throw exception
  @Get(':id')
  findOne(@Param('id') id: string) {
    if(false) throw new NotFoundException() 
    return this.userService.findOne(+id);
  }
  @ApiCreatedResponse({type: User})
  @ApiNotFoundResponse()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Patch(':id')
  @ApiNotFoundResponse()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  @Delete(':id')
  @ApiNotFoundResponse()
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
