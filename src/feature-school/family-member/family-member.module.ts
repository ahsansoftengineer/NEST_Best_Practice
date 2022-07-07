import { Module } from '@nestjs/common';
import { FamilyMemberService } from './family-member.service';
import { FamilyMemberController } from './family-member.controller';

@Module({
  controllers: [FamilyMemberController],
  providers: [FamilyMemberService]
})
export class FamilyMemberModule {}
