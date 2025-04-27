"use server"

import confirmationService, { ConfirmationData } from "@/services/ConfirmationService"
import mailSenderService, { EmailTemplateParams } from "@/services/MailSenderService"

export async function sendConfirmation(data: ConfirmationData) {
  await confirmationService.confirm(data)
}

export async function sendEmail(data: EmailTemplateParams) {
  await mailSenderService.send(data)
}
