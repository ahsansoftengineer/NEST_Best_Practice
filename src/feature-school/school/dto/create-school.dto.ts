import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { Min, ValidateNested } from "class-validator";
import { CreateDto } from "core/CreateDto";
import { CreateAddressDto } from "feature-school/address/dto/create-address.dto";
import { Address } from "feature-school/address/entities/address.entity";
import { CreatePrincipalDto } from "feature-school/principal/dto/create-principal.dto";
import { Principal } from "feature-school/principal/entities/principal.entity";

export class CreateSchoolDto extends CreateDto {
  @ApiProperty()
  @Min(0)
  principalId: number

  @ApiProperty({
    enum: Address,
    example: [{title: 'My Address', desc: "Any Description u want"}],
    description:'Address[] Token is Optional'
  })
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: Address
}
