import { MailerService } from "@nestjs-modules/mailer";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  // @Inject(MailerService) mailerService: MailerService
  constructor(public mailerService: MailerService){}
  public send({to, subject, html}) {
    return this
      .mailerService
      .sendMail({
        from: 'noreply@nestjs.com', // sender address
        to,
        subject,
        html
        // text: 'welcome', // plaintext body
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  
  public sendTemplate(): void {
    this
      .mailerService
      .sendMail({
        to: 'test@nestjs.com',
        from: 'noreply@nestjs.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
       .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  public sendTemplateNoReply(): void {
    this
      .mailerService
      .sendMail({
        to: 'test@nestjs.com',
        from: 'noreply@nestjs.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: '/index', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  private generalEmailPattern({name, message, subject}){
    return {
      Subject: subject,
      Content: `
      <h3> Dear ${name}</h3>
      <p>${message}</p>
      
      `
    }
  }
  emailLawyerSignUp(name:string){
    return this.generalEmailPattern({
      subject: 'Kacheri Account Confirmation!',
      name, 
      message:''
    })
  }
  emailLawyerSignUpByAdmin(name:string, email){
    return this.generalEmailPattern({
      subject: 'Kacheri Lawyer Account Confirmatin!',
      name, 
      message:`
        Your account has created as ${email} you're now live at kacheri, <br>
        You can customizing your settings by clicking on the following Link []
      `
    })
  }
  emailLawyerAccountActivation(name:string){
    return this.generalEmailPattern({
      subject: 'Kacheri Account Activation',
      name, 
      message:`
        Your Signup Request has been accepted and you're now live at kacheri, 
      `
    })
  }
  emailLawyerTeam(name:string, lawyer:string){
    return this.generalEmailPattern({
      subject: 'Kacheri Team Member Account Activation',
      name, 
      message:`
        You are informed that your account has been created by ${lawyer} in Kacheri as Team Member <br>
        You can customizing your settings by clicking on the following Link []
      `
    })
  }
  emailAppointmentCreated(name:string){
    return this.generalEmailPattern({
      subject: 'Kacheri Appointment saved confirmation',
      name, 
      message:`
       Your appointment is in process and you will be inform with status via email
      `
    })
  }
  emailAppointmentReschedule(name:string, Date: string, Time: string){
    return this.generalEmailPattern({
      subject: 'Kacheri Appointment Re-Schedule',
      name, 
      message:`
        Your appointment is reschedule to new ${Date} and ${Time}.
      `
    })
  }
  emailAppointmentForward(name:string){
    return this.generalEmailPattern({
      subject: 'Kacheri Appointment Acceptance',
      name, 
      message:`
      Your Appointment is forwarded to Lawyer for further approval and scheduling on given date. <br>
      You will be informed soon.
      `
    })
  }
  emailAppointmentAccept_Reject(name:string, Accept: boolean, DateTime: string){
    let message;
    if(Accept) message = `Your Appointment has been Accepted by lawyer and your appointment is schedule on ${DateTime}`
    else message = 'Your appointment has rejected by Lawyer'
    return this.generalEmailPattern({
      subject: `Appointment ${Accept ? 'Accepted' : 'Rejected'} By Lawyer`,
      name, 
      message
    })
  }


}

// 9. Kacheri Admin 
// Subject: (Admin will set)
// Content (Admin will set)
