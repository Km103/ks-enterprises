// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        // Get form data from request body
        const { name, email, phone, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Please provide name, email and message'
                },
                { status: 400 }
            );
        }

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD // Use an app password if using Gmail
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.NOTIFICATION_EMAIL, // Your email where you want to receive notifications
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Return success response
        return NextResponse.json(
            { success: true, message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to send message. Please try again later.'
            },
            { status: 500 }
        );
    }
}
