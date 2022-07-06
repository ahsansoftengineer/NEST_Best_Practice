import { PartialType } from "@nestjs/swagger";
import { CreateParentDto } from "./create-parent.dto";

export class UpdateParentDto extends PartialType(CreateParentDto) {
    // @IsNotEmpty()
  // @IsNumber()
  // id: number
}
