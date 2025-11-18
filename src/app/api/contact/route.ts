import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message, subject } = await req.json();

        // to team
        await resend.emails.send({
            from: "AfriAI Contact <onboarding@resend.dev>",
            to: "rouguiatoubarry559@gmail.com",
            subject: `📬 Nouveau message : ${subject}`,
            html: `
        <h3>Nouveau message de : ${name}</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
        });

        //  for user confirmation
        await resend.emails.send({
            from: "AfriAI Contact <onboarding@resend.dev>",
            to: email,
            subject: "Votre message a bien été reçu ✔️",
            html: `
        <p>Bonjour ${name},</p>
        <p>Nous avons bien reçu votre message et nous vous répondrons bientôt.</p>
        <br/>
        <p>— L’équipe AfriAI</p>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Erreur email:", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
