import { User } from "core/entities/user.entity";
import { BaseModel } from "core/base";
import { Book, Casez, News } from "core/entities";

export const entities = [
  BaseModel,
  Book, 
  User,
  News,
  Casez
]