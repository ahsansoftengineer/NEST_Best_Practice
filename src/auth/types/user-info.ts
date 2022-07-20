import { COURT, GENDER, ROLE, SPECIALIZATION } from "core/enums";

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