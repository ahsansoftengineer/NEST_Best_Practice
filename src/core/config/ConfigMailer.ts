import { MailerModule } from "@nestjs-modules/mailer";

export const configMailer = {
  // transport: 'smtps://user@domain.com:pass@smtp.domain.com',
  transport: {
    host: 'smtp-mail.outlook.com',
    port: 587,
    tls: {
      ciphers: 'SSLv3',
    },
    // ignoreTLS: true,
    secureConnection: false,
    auth: {
      user: process.env.MAILDEV_INCOMING_USER, // 'ahsansoftengineer@outlook.com'
      pass: process.env.MAILDEV_INCOMING_PASS,
    },
  },
  defaults: {
    from: '"No Reply" <no-reply@localhost>',
  },
};

// const mailerModule = MailerModule.forRoot({
//   transport: {
//     host: 'smtp.example.com',
//     port: 587,
//     secure: false, // upgrade later with STARTTLS
//     auth: {
//       user: "username",
//       pass: "password",
//     },
//   },
//   defaults: {
//     from:'"nest-modules" <modules@nestjs.com>',
//   },
//   template: {
//     dir: process.cwd() + '/templates/',
//     adapter: new HandlebarsAdapter(), // or new PugAdapter()
//     options: {
//       strict: true,
//     },
//   },
// })

// const mailerModuleAsync = MailerModule.forRootAsync({
//   useFactory: () => ({
//     transport: {
//       host: 'smtp.example.com',
//       port: 587,
//       secure: false, // upgrade later with STARTTLS
//       auth: {
//         user: "username",
//         pass: "password",
//       },
//     },
//     defaults: {
//       from:'"nest-modules" <modules@nestjs.com>',
//     },
//     template: {
//       dir: process.cwd() + '/templates/',
//       adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
//       options: {
//         strict: true,
//       },
//     },
//   }),
// })
