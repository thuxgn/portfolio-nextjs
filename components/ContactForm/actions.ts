'use server';

import { Resend } from 'resend';

export interface ContactFormState {
  success: boolean;
  error: string | null;
  ids: { id: string }[] | null;
}

const resend = new Resend(process.env.RESEND_API_KEY);

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
      ids: null,
    };
  }

  const fromEmail = process.env.EMAIL_FROM;
  const contactEmail = process.env.CONTACT_EMAIL || 'thuxgn.business@gmail.com';

  try {
    const { data, error } = await resend.batch.send([
      {
        from: fromEmail,
        to: [email],
        subject: 'We received your message',
        text: `Hi ${name},\n\nThank you for reaching out! We received your message:\n"${message}"\n\nWe will get back to you soon.`,
      },
      {
        from: fromEmail,
        to: [contactEmail],
        subject: `New contact form submission from ${name}`,
        text: `You have a new message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      },
    ]);

    if (error) {
      console.error('Resend batch error:', error);
      return {
        success: false,
        error: error.message,
        ids: null,
      };
    }

    return {
      success: true,
      error: null,
      ids: data?.data ?? null,
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      success: false,
      error: 'Failed to send form. Please try again.',
      ids: null,
    };
  }
}