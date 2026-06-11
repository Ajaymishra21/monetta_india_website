import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const required = ['name', 'phone', 'email', 'industry', 'service', 'message']
    const missing = required.filter((field) => !String(body[field] || '').trim())

    if (missing.length > 0) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const submittedAt = body.submittedAt ? new Date(body.submittedAt) : new Date()
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 's.patel@monettaindia.com',
      subject: 'New Website Enquiry - Monetta India',
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
        <p><strong>Industry:</strong> ${body.industry}</p>
        <p><strong>Service Required:</strong> ${body.service}</p>
        <p><strong>Message:</strong> ${body.message}</p>
        <p><strong>Office Location:</strong> ${body.location || 'N/A'}</p>
        <p><strong>Submission Date & Time:</strong> ${submittedAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact email error:', error)
    return NextResponse.json(
      { error: 'Failed to send enquiry email. Please try again later.' },
      { status: 500 }
    )
  }
}
