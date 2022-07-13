import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';

const iv = randomBytes(16);
const secureKey = 'Password used to generate key';
// In this case for aes256, it is 32 bytes.
const hashCode = 'aes-256-ctr';

const key = ''; //(await promisify(scrypt)(secureKey, 'salt', 32)) as Buffer;
const cipher = createCipheriv(hashCode, key, iv);

const textToEncrypt = 'Nest';
const encryptedText = Buffer.concat([
  cipher.update(textToEncrypt),
  cipher.final(),
]);

const decipher = createDecipheriv(hashCode, key, iv);
const decryptedText = Buffer.concat([
  decipher.update(encryptedText),
  decipher.final(),
]);
