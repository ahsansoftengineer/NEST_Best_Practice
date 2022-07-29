import { ValidationPipe } from '@nestjs/common';

export const configValidation = new ValidationPipe({
  whitelist: true, // It is Working Only the Properties avalaible in DTO will go through
  stopAtFirstError: true,
  transform: true, // convert into the required data types // ParseIntPipe
  // forbidNonWhitelisted?: boolean; // extra properties will throw error
  // groups?: string[];
  // dismissDefaultMessages?: boolean;
  // validationError?: {
  //   target?: boolean;
  //   value?: boolean;
  // };

  // forbidUnknownValues?: boolean;
  // Below Settings Not Working
  // skipNullProperties: true,
  // skipUndefinedProperties: true,
  // skipMissingProperties: true // = skipNullProperties + skipUndefinedProperties
});
