import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { extname } from 'path';
import { argv } from 'process';
import { Observable } from 'rxjs';

// @Injectable()
// export class FileRenameInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     const file = context.getArgs()
//     const name = file.originalname.split('.')[0];
//     const fileExtName = extname(file.originalname);
//     const randomName = Array(4)
//       .fill(null)
//       .map(() => Math.round(Math.random() * 16).toString(16))
//       .join('');
//     callback(null, `${name}-${randomName}${fileExtName}`);
//     return next.handle();
//   }
// }
// First Arg is { body } = req
export const FileRenameInterceptor = ({body}, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};

