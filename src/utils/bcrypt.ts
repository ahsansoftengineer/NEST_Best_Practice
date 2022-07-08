import { genSaltSync, hash, hashSync } from "bcrypt";
import { CONSTANT } from "constant/contants";

export function encodePassword(password: string){
  const SALT = genSaltSync()
  // return  hash(password, CONSTANT.SALT)
  return  hashSync(password, SALT)
}