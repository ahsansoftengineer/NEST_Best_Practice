import { ForbiddenException } from '@nestjs/common';
import { User } from 'core/entities';
import { ROLE, STATUS } from 'core/enums';

export const searalizeUser = (d: any, role: ROLE, status: STATUS) => {
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
};

export const deSearalizeUser = (d: any) => {
  const result = {
    ...d,
    ...d?.user,
    desc: d?.desc
  };
  delete result.userId
  delete result.hashedRt
  // delete result.createdAt
  // delete result.updatedAt
  delete result.password
  delete result.user
  delete result.role
  return result
};

export const deSearalizeUsers = (d: any[]) => {
  return d.map((y) => deSearalizeUser(y));
};

export const throwForbiddenException = (data) => {
  if (data) throw new ForbiddenException('Email Address already exsit');
};

export const throwForbiddenExceptiontitle = (data) => {
  if (data) throw new ForbiddenException('Title already exsit');
};

export const generatePassword = () => {
  let result = '';
  const characters =
    '!@#~%^&*()_+}{":ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
