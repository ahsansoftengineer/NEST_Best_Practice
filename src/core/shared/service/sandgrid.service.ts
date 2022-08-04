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
    async lawyerAccountActivation({to, name}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Account Activation',
            html: `
            <h2>Dear ${name} Conguragulation!</h2>
            <p>Your Signup Request has been accepted and you're now live at kacheri, <p>
            <p>You can customizing your settings by clicking on the following Link []</p>
            `
        })
    }
    async lawyerAccountByAdmin({to, name, email}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Lawyer Account Confirmation!',
            html: `
            <h2>Dear ${name} Conguragulation</h2>
            <p>Your account has created as ${email} you're now live at kacheri</p>
            <p>to customize your account <a href='#' target="_blank">click</a><p>
            `
        })
    }
    async teamAccountByLawyer({to, name, email, password, lawyer}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Lawyer Team Account',
            html: `
            <h2>Dear ${name} Conguragulation!</h2>
            <p>Your account has been created against ${email} and your password ${password} by ${lawyer} <p>
            <p>to customize your account <a href='#' target="_blank">click</a><p>
            `
        })
    }
    async appointmentUser({to, name}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Appointment Registration',
            html: `
            <h2>Dear ${name}</h2>
            <p>Your appointment is in process and you will be inform with status via email<p>
            `
        })
    }
    async appointmentReSchedule({to, name, date, time}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Appointment Re-Schedule',
            html: `
            <h2>Dear ${name}</h2>
            <p>Your appointment is reschedule to new data: ${date} and time: ${time}.<p>
            `
        })
    }
    async appointmentForward({to, name}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Appointment Recommended',
            html: `
            <h2>Dear ${name}</h2>
            <p>Your Appointment is recommended and forwarded to Lawyer for further approval and time scheduling</p>
            <p>you will be informed and notified by email<p>
            `
        })
    }
    async appointmentAcceptRejectByLawyer({to, name, status}){
        let message;
        if(status) message = `Your Appointment has been accepted by lawyer and your appointment`
        else message = 'Your appointment has rejected by Lawyer'
        await this.sendEmail({
            to,
            subject: ('Kacheri Appointment ' +  status ? 'Accepted': 'Rejected'),
            html: `
            <h2>Dear ${name}</h2>
            <p>${message}</p>
            `
        })
    }
    async adminEmail({to, subject, html}){
        await this.sendEmail({
            to,
            subject,
            html,
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