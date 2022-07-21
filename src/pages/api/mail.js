/* eslint-disable import/no-anonymous-default-export */
import sgMail from '@sendgrid/mail'
// import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default (req, res) => {
  const body = req.body

  const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `

  const data = {
    to: 'kunconsultancy2022@gmail.com',
    from: body.email,
    name: body.name,
    text: body.message
  }
}
