import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { join } from 'path';
import { FileImageTypeInterceptor, FileRenameInterceptor, FilePDFTypeInterceptor } from './index';

// export const Uploads = join(__dirname, '.', 'assests/uploads');

export const InterceptorImage = FileInterceptor('image', {
  storage: diskStorage({
    destination: 'public',
    filename: FileRenameInterceptor,
  }),
  fileFilter: FileImageTypeInterceptor,
});

// export const InterceptorPDF = FileInterceptor('pdf', {
//   storage: diskStorage({
//     destination: 'public',
//     filename: FileRenameInterceptor,
//   }),
//   fileFilter: FilePDFTypeInterceptor,
// });
