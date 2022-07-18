import { COURT, GENDER, SPECIALIZATION } from "auth/entities/user.entity";
import { ROLE } from "core/enums";

export type UserInfo = {
  id: number;
  name: string;
  email: string;
  role: ROLE;
  mobile: string;
  gender: GENDER;
  city: string;
  specialization: SPECIALIZATION;
  court: COURT;
  address: string;
  image: string;
}