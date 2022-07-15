import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { join } from 'path';
import { FileImageTypeInterceptor, FileRenameInterceptor, FilePDFTypeInterceptor, PDF_ImageInterceptor } from './index';

// export const Uploads = join(__dirname, '.', 'assests/uploads');

export const InterceptorImage = FileInterceptor('image', {
  storage: diskStorage({
    destination: 'public',
    filename: FileRenameInterceptor,
  }),
  fileFilter: FileImageTypeInterceptor,
});

export const InterceptorPDF = FileInterceptor('pdf', {
  storage: diskStorage({
    destination: 'public',
    filename: FileRenameInterceptor,
  }),
  fileFilter: FilePDFTypeInterceptor,
});

export const Interceptor_Files_PDF_Image = FileFieldsInterceptor([
  { name: 'image', maxCount: 1},
  { name: 'pdf', maxCount: 1 }
], {
  dest: 'public',
  storage: diskStorage({
    destination: 'public',
    filename: FileRenameInterceptor,
  }),
  fileFilter: PDF_ImageInterceptor,
  limits: {
    fileSize: (1024 * 2048),
    files: 2,
  }
})
