/* eslint-disable import/no-anonymous-default-export */
import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

// sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default async (req, res) => {
  const body = req.body

  const msg = `
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
    text: body.message
  }

  try {
    // await sgMail.send(data)
    res.status(200).json({ msg: 'Email Sent successfully' })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ msg: 'Error sending email' })
  }
}
