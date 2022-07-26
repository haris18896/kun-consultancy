/* eslint-disable import/no-anonymous-default-export */

let nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

export default async (req, res) => {
  const { name, email, subject, message } = req.body

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      type: 'OAUTH2',
      user: process.env.GMAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: process.env.OAUTH_ACCESS_TOKEN,
      expires: 3599
    }
  })

  const mailData = {
    from: 'info@kunconsultingservices.com',
    to: 'hk6530739@gmail.com',
    // to: "info@kunconsultingservices.com"
    name: `Message From ${name}`,
    subject: `Message From ${subject}`,
    text: `This mail is sent by ${email}\r\n${message}`,
    html: `<div>This mail is sent by ${email}\r\n${message}</div>`
  }

  try {
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log('error in nodemailer:-', err)
      else console.log('info', info)
      if (!err) res.status(200).json({ msg: 'Email Sent successfully' })
    })
  } catch (error) {
    console.log('error 500:- ', error)
    res.status(500).json({ msg: 'Error sending email' })
  }
}
