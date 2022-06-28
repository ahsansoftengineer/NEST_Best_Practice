import { ApiProperty } from "@nestjs/swagger"

export class BaseModelClass{
  @ApiProperty()
  id: number
  @ApiProperty()
  title: string
}