import { MailerService } from '@nestjs-modules/mailer';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private _config: ConfigService,
    private readonly _ss: MailerService,
  ) {}
  async forgetPassword(to: string | string[]): Promise<any> {
    await this._ss.sendMail({
      to, // list of receivers
      from: 'ahsansoftengineer@gmail.com', // sender address
      subject: 'Testing Nest MailerModule ✔', // Subject line
      text: 'welcome', // plaintext body
      html: `
        <h1>Message Heading</h1>
        <a href>change password</a>
        <p> this is some paragraph </p>
      `,
      // template:  __dirname + 'welcome',//The `.pug .ejs .hbs` extension is appended automatically.
      // Data to be sent to template engine.
      // context: { 
      //   code: 'cf1a3f828287',
      //   username: 'john doe',
      // },
    })
    .then(() => {console.log('success')})
    .catch(console.log);

    return {message: 'done'}
  }
}
