import { User } from "auth/entities/user.entity";
import { BaseModel } from "core/base";
import { Book } from "feature/book/entities/book.entity";
import { News } from "feature/news/entities/news.entity";

export const entities = [
  BaseModel,
  Book, 
  User,
  News
]