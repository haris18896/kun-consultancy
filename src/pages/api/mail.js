/* eslint-disable import/no-anonymous-default-export */
// import sgMail from '@sendgrid/mail'
// sgMail.setApiKey(process.env.EMAIL_API_KEY)

export default async (req, res) => {
  require('dotenv').config()
  let nodemailer = require('nodemailer')

  const { name, email, subject, message } = req.body
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'hk6530739@gmail.com',
      pass: process.env.password
    },
    secure: true
  })

  const mailData = {
    to: 'kunconsultancy2022@gmail.com',
    from: 'hk6530739@gmail.com',
    name: `Message From ${name}`,
    subject: `Message From ${subject}`,
    text: `This mail is sent by ${email}\r\n${message}`,
    html: `<div>This mail is sent by ${email}\r\n${message}</div>`
  }

  try {
    // await sgMail.send(data)
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err)
      else console.log(info)
    })
    res.status(200).json({ msg: 'Email Sent successfully' })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ msg: 'Error sending email' })
  }
}
