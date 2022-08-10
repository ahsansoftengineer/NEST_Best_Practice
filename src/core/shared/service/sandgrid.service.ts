import { Injectable } from "@nestjs/common";
import * as SendGrid from '@sendgrid/mail';
import { ENV } from "core/constant";
import { STATUS_APPOINT } from "core/enums";


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
            <h3>Kacheri Lawyer Account Confirmation!</h3>
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
            <h3>Kacheri Account Activation</h3>
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
            <h3>Kacheri Lawyer Account Confirmation!</h3>
            <p>Your account has created as ${email} you're now live at kacheri</p>
            <p>to customize your account <a href='#' target="_blank">click</a><p>
            `
        })
    }
    async teamAccountByLawyer({to, name, password, lawyer}){
        await this.sendEmail({
            to,
            subject: 'Kacheri Lawyer Team Account',
            html: `
            <h2>Dear ${name} Conguragulation!</h2>
            <h3>Kacheri Lawyer Team Account</h3>
            <p>Your account has been created against ${to} and your password ${password} by ${lawyer} <p>
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
            <h3>Kacheri Appointment Registration</h3>
            <p>Thank you for submitting your application at Kacheri, our representatives will get you on the board soon!<p>
            `
        })
    }
    async appointmentReSchedule({to, name, date, time, status}){
      if(status == STATUS_APPOINT.DIRECT){
        await this.sendEmail({
          to,
          subject: 'Kacheri Appointment',
          html: `
          <h2>Dear ${name}</h2>
          <h3> Kacheri Appointment Admin Recommended </h3>
          <p>Your appointment is recommended and forwarded to Lawyer for further approval 
          on data: ${date} and time: ${time}
          <p>you will be informed and notified by email<p>
          `
        })
      } 
      else if (STATUS_APPOINT.CANCEL == status){
        await this.sendEmail({
          to,
          subject: 'Kacheri Appointment',
          html: `
          <h2>Dear ${name}</h2>
          <h3> Kacheri Appointment not recommended </h3>
          `
        })
      } 
    }
    async appointmentAcceptRejectByLawyer({to, name, status,date,time}){
        let message;
        if(status) message = `Your Appointment has been accepted by lawyer and your appointment`
        else message = 'Your appointment has rejected by Lawyer'
        await this.sendEmail({
            to,
            subject: 'Kacheri Appointment ' +status,
            html: `
            <h2>Dear ${name}</h2>
            <p>${message}</p>
            on data: ${date} and time: ${time}
            `
        })
    }
    async sendRequestForTeam({to, name, from}){
      await this.sendEmail({
          to,
          subject: 'Kacheri Lawyer Invitation',
          html: `
          <h2>Dear ${name}</h2>
          <h3>Kacheri Invitation Lawyer Team Member</h3>
          <p>You are invited as Team member of lawyer <b>${from}</b></p>
          <p>please click the following to become a team member <a href='#' target="_blank">click</a><p>
          `
          // maybe need a invitation table for user to accept and reject invitation on app
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