import { User } from 'core/entities/user.entity';
import {
  AlphaModel,
  BetaModel,
  Book,
  Casez,
  News,
  Court,
  Lawyer,
  LawyerTeam,
  Specialization,
  City,
} from 'core/entities';
import { Task } from './task.entity';
import { Appoinment } from './appoinment.entity';
import { LawyerClient } from './lawyer-client.entity';

export const entities = [
  Book,
  User,
  News,
  Casez,
  Court,
  City,
  Specialization,
  Lawyer,
  LawyerTeam,
  LawyerClient,
  Task,
  Appoinment,
];

export const baseEntities = [AlphaModel, BetaModel];
