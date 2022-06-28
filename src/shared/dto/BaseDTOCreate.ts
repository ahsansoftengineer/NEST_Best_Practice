import { ApiProperty } from "@nestjs/swagger";

export class BaseDtoCreate {
  @ApiProperty()
  title: string;
}