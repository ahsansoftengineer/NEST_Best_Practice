import { Category } from "./Category";
import { CompositUser } from "./CompositUser";
import { Photo } from "./Photo";
import { Profile } from "./Profile";
import { Question } from "./Question";
import { User } from "./User";

// Composit Key => CompositUser
// One To One => User -> Profile
// One To Many => User -> Photo
// Many To One => Photo -> User
// Many to Many => Category -> Question

export const all_entities_rel = [
  CompositUser,
  User,
  Profile,
  Photo,
  Question,
  Category

] 