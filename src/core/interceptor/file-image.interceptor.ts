import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

// @Injectable()
// export class FileImageInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> | any {
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return next(new Error('Only image files are allowed!'), false);
//     }
//     return next(null);
//   }
// }
export const FileImageTypeInterceptor = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException('Only image files are allowed!', HttpStatus.FORBIDDEN),
      false,
    );
  }
  callback(null, true);
};
