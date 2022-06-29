import { Module } from '@nestjs/common';
import { PrincipalService } from './principal.service';
import { PrincipalController } from './principal.controller';

@Module({
  controllers: [PrincipalController],
  providers: [PrincipalService]
})
export class PrincipalModule {}
