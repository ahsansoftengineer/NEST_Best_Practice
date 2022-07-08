import { FileInterceptor } from "@nestjs/platform-express"
import { FileImageTypeInterceptor } from "interceptor/file-image.interceptor"
import { FileRenameInterceptor } from "interceptor/file-rename.interceptor"
import { diskStorage } from "multer"

const path = require("path")

export const Uploads = path.join(__dirname, '.', 'assests/uploads')

export const FileUploadInterceptor =   FileInterceptor('image', {
  storage: diskStorage({
    destination: 'public',
    filename: FileRenameInterceptor,
  }),
  fileFilter: FileImageTypeInterceptor,
})