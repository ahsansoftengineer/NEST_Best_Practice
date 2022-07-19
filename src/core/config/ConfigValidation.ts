import { ValidationPipe } from '@nestjs/common';

export const configValidation = new ValidationPipe({
  whitelist: true, // It is Working Only the Properties avalaible in DTO will go through
  // skipMissingProperties?: boolean;
  // forbidNonWhitelisted?: boolean;
  // groups?: string[];
  // dismissDefaultMessages?: boolean;
  // validationError?: {
  //   target?: boolean;
  //   value?: boolean;
  // };

  // forbidUnknownValues?: boolean;
  // stopAtFirstError?: boolean;
  // Below Settings Not Working
  // skipNullProperties: true,
  // skipUndefinedProperties: true,
  // skipMissingProperties: true
});
