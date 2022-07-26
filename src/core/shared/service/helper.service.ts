import { User } from "core/entities";
import { ROLE, STATUS } from "core/enums";

export class HelperService{
  public searalizeUser(d: any, role: ROLE, status: STATUS){
    const user: User = {
      email: d.email,
      name: d.name,
      gender: d.gender,
      mobile: d.mobile,
      role,
      status,
      password: '',
      cityId: d.cityId,
      image: d.image,
      address: d.address,
    };
    return user;
  }
}