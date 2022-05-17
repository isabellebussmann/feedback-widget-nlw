import nodemailer from 'nodemailer'
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d5fa9a0f66c8ce",
    pass: "a5226409d96dd5"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Isabelle Bussmann <isabellebussmann@hotmail.com>',
      subject,
      html: body,
    });
  };
}