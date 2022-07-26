/* eslint-disable import/no-anonymous-default-export */

import sgMail from '@sendgrid/mail'
const dotenv = require('dotenv')
dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { name, email, subject, message } = req.body
  console.log(process.env.SENDGRID_API_KEY)

  const Data = {
    from: email,
    to: 'info@kunconsultingservices.com',
    name: `Message From ${name}`,
    subject: subject,
    text: message,
    html: `<div>This mail is sent by ${email}\r\n${message}</div>`
  }

  try {
    await sgMail.send(Data).then(() => {
      res.status(200).json({ message: `Email has been sent` })
    })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}
