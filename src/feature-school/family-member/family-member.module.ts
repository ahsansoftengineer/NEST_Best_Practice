import { Module } from '@nestjs/common';
import { FamilyMemberService } from './family-member.service';
import { FamilyMemberController } from './family-member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMember } from './entities/family-member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FamilyMember])
  ],
  controllers: [FamilyMemberController],
  providers: [FamilyMemberService]
})
export class FamilyMemberModule {}
