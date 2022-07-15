import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

export const configStaticFiles = ServeStaticModule.forRoot({
  // http://localhost:3000/mysql-107a1.png
  rootPath: join(__dirname, '..', 'public'),
});
