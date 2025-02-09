
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FAKE_EMAIL = 'gg@gg.dev';
const FAKE_EMAIL_TO = 'gg@gmail.com';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || FAKE_EMAIL,
      to: [process.env.TO_EMAIL || FAKE_EMAIL_TO],
      subject: 'New message from epasingha.me',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
