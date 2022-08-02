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
import { LawyerCase } from './lawyer-case.entity';

export const entities = [
  Appoinment,
  Book,
  Casez,
  City,
  Court,
  News,
  User,
  Lawyer,
  LawyerClient,
  LawyerTeam,
  Specialization,
  Task,
  LawyerCase
];

export const baseEntities = [AlphaModel, BetaModel];
