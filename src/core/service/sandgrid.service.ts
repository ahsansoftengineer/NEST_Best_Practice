import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
    constructor(private readonly configService: ConfigService) {
        SendGrid.setApiKey(this.configService.get<string>('SEND_GRID_KEY'));
    }
    async sendEmail(email: string) {
        const mail = {
            to: email,
            subject: 'Greeting Message from NestJS Sendgrid',
            from: '<send_grid_email_address>',
            text: 'Hello World from NestJS Sendgrid',
            html: '<h1>Hello World from NestJS Sendgrid</h1>'
        };

        return await this.send(mail);
    }
    async send(mail: SendGrid.MailDataRequired) {
        const transport = await SendGrid.send(mail);
        console.log(`Email successfully dispatched to ${mail.to}`)
        return transport;
    }

}