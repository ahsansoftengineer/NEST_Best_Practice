import { Controller, Post, Body } from '@nestjs/common';
import { SignUpLawyerDto } from 'auth/dto/sign-up-lawyer.dto';
import { Public } from 'core/decorators';
import { PlayService } from './play.service';

@Controller('play')
export class PlayController {
  constructor(private readonly _ss: PlayService) {}

  @Post()
  @Public()
  create(@Body() dto: SignUpLawyerDto) {
    console.log(dto);

    // return this.playService.create(createPlayDto);
  }
}
