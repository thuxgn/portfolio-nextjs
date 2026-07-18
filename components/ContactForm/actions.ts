'use server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export interface ContactFormState {
  success: boolean;
  error: string | null;
  timestamp: number | null; // Trigger the toast
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      error: 'All fields are required',
      timestamp: Date.now(),
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      error: 'Invalid email.',
      timestamp: Date.now(),
    };
  }

  try {
    const [receiptResult, notificationResult] = await Promise.all([
      
      // To users
      transporter.sendMail({
        from: process.env.SMTP_USER,
        to: [email],
        subject: `We received your message - ${subject}`,
        text: `Hi ${name},\n\nThank you for reaching out! We received your message:\n"${message}"\n\nWe will get back to you soon.`,
      }),

      // To me
      transporter.sendMail({
        from: process.env.SMTP_USER, 
        to: process.env.SMTP_USER,
        replyTo: [email],
        subject: `New form submission: ${subject}`,
        text: `You have received a new message via the form:\n\n` +
              `From: ${name} (${email})\n` +
              `Subject: ${subject}\n\n` +
              `Message:\n${message}`,
      })

    ]);
    return {
      success: true,
      error: null,
      timestamp: Date.now()
    };

  } catch (err: any) {
    console.error('Nodemailer error caught:', err);
    return {
      success: false,
      error: err.message || 'Failed to send form. Please try again.',
      timestamp: Date.now()
    };
  } 
}