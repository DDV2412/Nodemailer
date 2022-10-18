const nodeMailer = require("nodemailer");

const mailerTransport = async (options) => {
  try {
    const transport = nodeMailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Dian Dwi Vaputra` + `<` + process.env.MAIL_USER + `>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    await transport.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mailerTransport;
