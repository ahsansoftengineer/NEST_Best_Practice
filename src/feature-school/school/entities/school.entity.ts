import { Principal } from "feature-school/principal/entities/principal.entity";
import { BaseModel } from "shared/BaseModel";

export class School extends BaseModel {
  principal: Principal
}
