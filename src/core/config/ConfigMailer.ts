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
