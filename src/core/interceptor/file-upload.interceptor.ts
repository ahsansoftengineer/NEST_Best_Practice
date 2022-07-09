import { FileInterceptor } from "@nestjs/platform-express"
import { diskStorage } from "multer"
import { FileImageTypeInterceptor, FileRenameInterceptor } from "./index"

const path = require("path")

export const Uploads = path.join(__dirname, '.', 'assests/uploads')

export const FileUploadInterceptor =   FileInterceptor('image', {
  storage: diskStorage({
    destination: 'public',
    filename: FileRenameInterceptor,
  }),
  fileFilter: FileImageTypeInterceptor,
})