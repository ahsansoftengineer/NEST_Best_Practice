import { PartialType } from "@nestjs/swagger";

export class CreateLawyerTeamDto {}

export class UpdateLawyerTeamDto extends PartialType(CreateLawyerTeamDto) {}

