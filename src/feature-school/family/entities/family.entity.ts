import { Parent } from "feature-school/parent/entities/parent.entity";
import { BaseModel } from "core/BaseModel";

export class Family extends BaseModel{
  parent: Parent
}
