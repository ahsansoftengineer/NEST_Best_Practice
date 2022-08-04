import { Injectable } from "@nestjs/common";
import * as SendGrid from '@sendgrid/mail';
import { ENV } from "core/constant";


@Injectable()
export class SendgridService {
    constructor() {
        SendGrid.setApiKey(ENV.MAIL_API_KEY);
    }
    async lawyerAccount({to, name}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Lawyer Account Confirmation!',
            html: `
            <h2>Dear ${name} Conguragulation</h2>
            <p>Your Signup Request has been forwarded for activation it will take couple of days to proceed.<p>
            `
        })
    }
    async lawyerAccountActivation(to: string, name: string){
        await this.sendEmail({
            to,
            subject: 'Kacheri Account Activation',
            html: `
            <h2>Dear ${name} Conguragulation!</h2>
            <p>Your Signup Request has been accepted and you're now live at kacheri, <p>
            `
        })
    }
    async teamAccount({to, name, email, password, lawyer}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Lawyer Team Account',
            html: `
            <h2>Dear ${name} Conguragulation!</h2>
            <p>Your account has been created against ${email} and your password ${password} by ${lawyer} <p>
            <p>to customize your account <a href='#' target="_blank">click</a>
            `
        })
    }
    
    private query = '<p><i>please feel free to contact us in case of any query.</i></p>'
    private sendEmail({to, subject, html}) {
        html = html + this.query
        return this.send({ from: ENV.MAIL_FROM, to, subject, html });
    }
    private send(mail: SendGrid.MailDataRequired) {
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