/* eslint-disable import/no-anonymous-default-export */
import sgMail from '@sendgrid/mail'
// import { NextApiRequest, NextApiResponse } from 'next';

export default async (req, res) => {
  const { name, email, message } = req.body
  console.log('body', name, email, message)

  res.status(200).json({ status: 'ok' })
}
