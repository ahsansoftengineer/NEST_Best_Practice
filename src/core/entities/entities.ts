import { User } from "core/entities/user.entity";
import { 
  AlphaModel, BetaModel,
  Book, Casez, News, Court, Lawyer, LawyerTeam, Specialization, City } from "core/entities";
import { Task } from "./task.entity";
import { Appoinment } from "./appoinment.entity";

export const entities = [
  AlphaModel,
  BetaModel,
  Book,
  User,
  News,
  Casez,
  Court,
  City,
  Specialization,
  Lawyer,
  LawyerTeam,
  Task,
  Appoinment
  
]