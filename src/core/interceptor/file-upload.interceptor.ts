import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { FileImageTypeInterceptor, FileRenameInterceptor } from './index';

export const Uploads = join(__dirname, '.', 'assests/uploads');

export const FileUploadInterceptor = FileInterceptor('image', {
  storage: diskStorage({
    destination: 'public',
    filename: FileRenameInterceptor,
  }),
  fileFilter: FileImageTypeInterceptor,
});
