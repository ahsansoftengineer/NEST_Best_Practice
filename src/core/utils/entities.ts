import { User } from "auth/entities/user.entity";
import { BaseModel } from "core/base";
import { Book } from "feature/book/entities/book.entity";
import { Casez } from "feature/casez/entities/casez.entity";
import { City } from "feature/city/entities/city.entity";
import { Court } from "feature/court/entities/court.entity";
import { News } from "feature/news/entities/news.entity";
import { Specialization } from "feature/specialization/entities/specialization.entity";

export const entities = [
  BaseModel,
  Book, 
  User,
  News,
  Casez,
  Court,
  Specialization,
  City
]