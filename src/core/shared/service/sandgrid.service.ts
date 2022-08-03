import { Injectable } from "@nestjs/common";
import * as SendGrid from '@sendgrid/mail';
import { ENV } from "core/constant";


@Injectable()
export class SendgridService {
    constructor() {
        SendGrid.setApiKey(ENV.MAIL_API_KEY);
    }
    async lawyerSignUp(to: string, name: string){
        await this.sendEmail({
            to,
            subject: 'Kacheri Sign Up Confirmation!',
            html: `
            <h2>Dear ${name} Conguragulation</h2>

            <p>Your Signup Request has been forwarded for activation it will take couple of days to proceed.<p>
            ${this.query}
            `
        })
    }
    async TeamSignUp(to: string, name: string){
        await this.sendEmail({
            to,
            subject: 'Kacheri Sign Up Confirmation!',
            html: `
            <h2>Dear ${name} Conguragulation</h2>

            <p>Your Signup Request has been forwarded for activation it will take couple of days to proceed.<p>
            ${this.query}
            `
        })
    }
    private query = '<p><i>please feel free to contact us in case of any query.</i></p>'
    sendEmail({to, subject, html}) {
        return this.send({ from: ENV.MAIL_FROM, to, subject, html });
    }
    send(mail: SendGrid.MailDataRequired) {
        return SendGrid.send(mail)
    }
    
    

}

// SendGrid.setApiKey(ENV.MAIL_API_KEY);
// const msg = {
//   to: 'ahsansoftengineer@gmail.com', // Change to your recipient
//   from: 'ahsansoftengineer@gmail.com', // Change to your verified sender
//   subject: 'Dear Syed Ahmed Where does it goes',
//   html: `
//   <h2>Welcome to Indus Valley</h2>
//   You have selected as a Junior Developer
//   `
// }
// sgMail.send(msg).then(() => {
//   console.log('Email sent')
// }).catch((error) => {
//   console.error(error)
// })