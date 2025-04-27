import emailjs from '@emailjs/nodejs';
import { EmailException } from "../exceptions/EmailException";

export type EmailTemplateParams = {
  name: string;
  emailTo: string;
}

class MailSenderService {
  constructor(
    private readonly publicKey: string,
    private readonly privateKey: string,

  ) { }

  async send(params: EmailTemplateParams) {
    try {
      await emailjs.send('ayla_invite', 'template_rn22xce', params, { publicKey: this.publicKey, privateKey: this.privateKey })
    } catch (error) {
      console.error(error)
      throw new EmailException("Falha ao enviar e-mail de confirmação!")
    }
  }
}

const mailSenderService = new MailSenderService(process.env.EMAIL_PUBLIC_KEY!, process.env.EMAIL_PRIVATE_KEY!)

export default mailSenderService