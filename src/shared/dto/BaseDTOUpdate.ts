import { ApiProperty } from "@nestjs/swagger";
import { BaseDtoCreate } from "./BaseDTOCreate";

export class BaseDtoUpdate extends BaseDtoCreate {
  @ApiProperty()
  id: number;
}