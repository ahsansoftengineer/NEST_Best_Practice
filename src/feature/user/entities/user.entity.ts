import { ApiProperty } from "@nestjs/swagger"
import { BaseModelClass } from "shared/BaseClass"
export class User extends BaseModelClass{
  @ApiProperty()
  age: number
  @ApiProperty()
  bread:string
}
