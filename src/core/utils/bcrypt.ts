import { compareSync, genSaltSync, hash, hashSync } from 'bcrypt';

export function encodePassword(password: string) {
  const SALT = genSaltSync();
  // return  hash(password, CONSTANT.SALT)
  return hashSync(password, SALT);
}

export function comparePassword(password: string, hash: string) {
  return compareSync(password, hash);
}
