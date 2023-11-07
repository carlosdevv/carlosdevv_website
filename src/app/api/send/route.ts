import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { subject, name, email, description } = await req.json();

  try {
    const data = await resend.emails.send({
      from: String(email),
      text: String(description),
      to: ["carloslopessf@gmail.com"],
      subject: String(subject),
      react: EmailTemplate({ name, email, description }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
