/* eslint-disable import/no-anonymous-default-export */
import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default async (NextApiRequest, NextApiResponse) => {
  const body = NextApiRequest.body
  console.log('body', body)

  const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Subject: ${body.subject}\r\n
        Message: ${body.message}
    `

  const data = {
    to: 'kunconsultancy2022@gmail.com',
    from: body.email,
    subject: body.subject,
    name: body.name,
    text: body.message,
    html: message.replace(/\r\n/g, '<br />')
  }

  console.log('Mail data', data)

  NextApiResponse.json({ message: `Email has been sent` })

  // try {
  //   await sgMail.send(data)
  //   NextApiResponse.json({ message: `Email has been sent` })
  // } catch (error) {
  //   NextApiResponse.status(500).json({ error: 'Error sending email' })
  // }
}
