// import { EmailTemplate } from '../../../components/EmailTemplate';
import { EmailTemplate } from "@/components/Email/Email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // const { name, email, message } = await req.json();
    const body = await req.json();
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.EMAIL_TO],
      subject: "TriniTy Page",
      react: EmailTemplate(body),
    });

    return Response.json({ message: "Message sent" });
  } catch (error) {
    return Response.json({ error });
  }
}
