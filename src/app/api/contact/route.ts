// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//     try {
//         const { name, email, message, subject } = await req.json();

//         // to team
//         await resend.emails.send({
//             from: "AfriAI Contact <onboarding@resend.dev>",
//             to: "saidouhw02@gmail.com",
//             subject: `📬 Nouveau message : ${subject}`,
//             html: `
//         <h3>Nouveau message de : ${name}</h3>
//         <p><strong>Email :</strong> ${email}</p>
//         <p><strong>Sujet :</strong> ${subject}</p>
//         <p><strong>Message :</strong><br/>${message}</p>
//       `,
//         });

//         //  for user confirmation
//         await resend.emails.send({
//             from: "AfriAI Contact <onboarding@resend.dev>",
//             to: email,
//             subject: "Votre message a bien été reçu ✔️",
//             html: `
//         <p>Bonjour ${name},</p>
//         <p>Nous avons bien reçu votre message et nous vous répondrons bientôt.</p>
//         <br/>
//         <p>— L’équipe AfriAI</p>
//       `,
//         });

//         return NextResponse.json({ ok: true });
//     } catch (error) {
//         console.error("Erreur email:", error);
//         return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
//     }
// }


// v2 for prod
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// 1. Schéma de validation Zod
const contactSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    email: z.string().email("Format d'email invalide"),
    phone: z.string().min(6, "Téléphone invalide"),
    subject: z.string().min(1, "Veuillez choisir une option"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsedData = contactSchema.parse(body);
        const { name, email, message, subject, phone } = parsedData;

        await Promise.all([
            // NOTIFICATION INTERNE : Reçue sur contact@afriaisolutions.com
            resend.emails.send({
                from: "AfriAI Solutions <contact@afriaisolutions.com>",
                to: "contact@afriaisolutions.com",
                reply_to: email,
                subject: `🚀 Nouveau Lead [${subject}] : ${name}`,
                html: teamTemplate(name, email, phone, subject, message),
            }),

            // ACCUSÉ DE RÉCEPTION : Envoyé au client
            resend.emails.send({
                from: "AfriAI Solutions <contact@afriaisolutions.com>",
                to: email,
                subject: "Nous avons bien reçu votre demande — AfriAI Solutions",
                html: userTemplate(name),
            })
        ]);

        return NextResponse.json({ ok: true }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: error.issues[0]?.message || "Données invalides" },
                { status: 400 }
            );
        }
        return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
    }
}

// --- TEMPLATES HTML AVEC LE NOUVEAU BLEU ---

const teamTemplate = (name: string, email: string, phone: string, subject: string, message: string) => `
  <div style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
    <div style="background-color: #2b2d84; padding: 24px; text-align: center;"> <h1 style="color: #ffffff; margin: 0; font-size: 18px; letter-spacing: 2px; font-weight: 700;">AFRIAI SOLUTIONS</h1>
    </div>
    <div style="padding: 32px; background-color: #ffffff;">
      <h2 style="font-size: 14px; color: #2b2d84; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; font-weight: 700;">Nouveau Message Prospect</h2>
      <p style="margin-bottom: 8px;"><strong>Client :</strong> ${name}</p>
      <p style="margin-bottom: 8px;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #2b2d84; text-decoration: none;">${email}</a></p>
      <p style="margin-bottom: 8px;"><strong>Téléphone :</strong> ${phone}</p>
      <p style="margin-bottom: 24px;"><strong>Service :</strong> ${subject}</p>
      <div style="background-color: #f9fafb; border-left: 4px solid #2b2d84; padding: 20px; border-radius: 4px; font-size: 15px; white-space: pre-wrap; color: #374151;">
        ${message}
      </div>
    </div>
  </div>
`;

const userTemplate = (name: string) => `
  <div style="font-family: 'Inter', Arial, sans-serif; color: #1f2937; max-width: 600px; margin: auto; padding: 40px 20px;">
    <div style="border-left: 4px solid #2b2d84; padding-left: 20px;">
      <h2 style="font-size: 20px; font-weight: 700; color: #111827; margin-bottom: 16px;">Bonjour ${name},</h2>
      <p style="font-size: 16px; line-height: 1.7; color: #4b5563; margin-bottom: 16px;">
        Nous confirmons la réception de votre demande via le portail <strong>AfriAI Solutions</strong>.
      </p>
      <p style="font-size: 16px; line-height: 1.7; color: #4b5563; margin-bottom: 24px;">
        L'un de nos ingénieurs analysera votre message et vous recontactera sous <strong>24 à 48 heures</strong>.
      </p>
    </div>
    <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 14px; font-weight: 700; margin-bottom: 4px; color: #2b2d84;">L'équipe AfriAI Solutions</p>
      <p style="font-size: 12px; color: #6b7280; margin: 0;">Dakar, Sénégal</p>
    </div>
  </div>
`;