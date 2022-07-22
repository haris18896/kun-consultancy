/* eslint-disable import/no-anonymous-default-export */
import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

// sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default async (req, res) => {
  const { name, email, subject, message } = req.body

  const data = {
    to: 'kunconsultancy2022@gmail.com',
    from: email,
    subject: subject,
    name: name,
    text: message
  }

  try {
    // await sgMail.send(data)
    console.log(data)
    res.status(200).json({ msg: 'Email Sent successfully' })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ msg: 'Error sending email' })
  }
}
