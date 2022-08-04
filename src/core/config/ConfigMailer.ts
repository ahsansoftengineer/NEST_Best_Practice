
// This Configuration only works if you use own Email Address
// export const MailerModuleAsync = MailerModule.forRootAsync({
//   // imports: [ConfigModule], // import module if not enabled globally
//   useFactory: async () => ({
//     // transport: config.get("MAIL_TRANSPORT"), // or
//     transport: {
//       host: ENV.MAIL_HOST,
//       secure: false,
//       port: 587,
//       tls: {
//         ciphers: 'SSLv3',
//       },
//       auth: {
//         user: ENV.MAIL_USER,// ahsansoftengineer@outlook.co
//         pass: ENV.MAIL_PASS,
//       },
//     },
//     defaults: {
//       from: `"No Reply" <${ENV.MAIL_FROM}>`,
//     },
//     // template: {
//     //   dir: join(__dirname, 'templates'),
//     //   adapter: new HandlebarsAdapter(),
//     //   options: {
//     //     strict: true,
//     //   },
//     // },
//   }),
//   // inject: [ConfigService],
// })

// This Configuration only works if you use own Email Address
// export const configMailer = {
//   // transport: 'smtps://user@domain.com:pass@smtp.domain.com',
//   transport: {
//     host: 'smtp-mail.outlook.com',
//     port: 587,
//     tls: {
//       ciphers: 'SSLv3',
//     },
//     // ignoreTLS: true,
//     secureConnection: false,
//     auth: {
//       user: ENV.MAIL_USER, // 'ahsansoftengineer@outlook.com'
//       pass: ENV.MAIL_PASS,
//     },
//   },
//   defaults: {
//     from: '"No Reply" <no-reply@localhost>',
//   },
// };

// Send Grid Docs using NodeJS and it is Working
// Only Send Grid need to be install using NPM
