import { PartialType } from "@nestjs/swagger";

export class CreateLawyerClientDto {}


export class UpdateLawyerClientDto extends PartialType(CreateLawyerClientDto) {}
