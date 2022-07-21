import { HttpException, HttpStatus } from '@nestjs/common';

export const HandleUniqueError = (err: any) => {
  const check = (check) => {
    return err.sqlMessage.indexOf(check) != -1;
  };
  const result = (message: string) => {
    throw new HttpException(message, HttpStatus.BAD_REQUEST);
  };
  if (check('book-title-unique'))
    return result('already a book exsit with this title');
};
