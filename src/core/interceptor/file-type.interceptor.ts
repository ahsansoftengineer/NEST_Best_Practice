import {
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';

// @Injectable()
// export class FileImageInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> | any {
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return next(new Error('Only image files are allowed!'), false);
//     }
//     return next(null);
//   }
// }
export const PDF_ImageInterceptor = (req: Request, file, callback) => {
  if (file.fieldname == 'image' &&  !file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new HttpException('image must be jpg|jpeg|png|gif', HttpStatus.FORBIDDEN),false);
  } else if( file.fieldname == 'pdf' &&  !file.originalname.match(/\.(pdf)$/)){
    return callback(new HttpException('book must be of type pdf document', HttpStatus.FORBIDDEN),false);
  }
  callback(null, true);
};

export const FileImageTypeInterceptor = (req: Request, file, callback) => {
  if(!file.originalname.match(/\.(pdf)$/)) callback(null, true)
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException('Only image files are allowed!', HttpStatus.FORBIDDEN),
      false,
    );
  }
  callback(null, true);
};

export const FilePDFTypeInterceptor = (req, file, callback) => {
  console.log('pdf => ', file);
  if (!file.originalname.match(/\.(pdf)$/)) {
    return callback(
      new HttpException('Only pdf files are allowed!', HttpStatus.FORBIDDEN),
      false,
    );
  }
  callback(null, true);
};
