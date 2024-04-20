// import { EmailTemplate } from '../../../components/EmailTemplate';
import { EmailTemplate } from "@/components/Email/Email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const data = await resend.emails.send({
      from: "Trinity Page <onboarding@resend.dev>",
      to: ["trinityhealthcareservices51@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }),
    });

    return Response.json({message:"Message sent"});
  } catch (error) {
    return Response.json({ error });
  }
}
