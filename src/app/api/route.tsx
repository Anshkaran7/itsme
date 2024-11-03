import { contactEmailTemplate } from '@/lib/template/welcome';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Bad Request: Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address from environment variables
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password from environment variables
      },
    });

    // Create the email options
    const mailOptions = {
      from: `"Your Website" <${process.env.GMAIL_USER}>`, // Use your email as the sender
      to: process.env.GMAIL_USER, // Your email address to receive messages
      replyTo: email, // Use the user's email as the reply-to address
      subject: `New contact message from ${name}`, // Keep the subject same
      html: contactEmailTemplate(name, email, message), // Use the template
    };
    
    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message', error: (error as Error).message }, { status: 500 });
  }
}
