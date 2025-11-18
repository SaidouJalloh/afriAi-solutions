"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "@components/contact/form/contact-form.module.scss";
import ChevronBottomIcon from "@/components/ui/svgs/chevron-bottom";

const schema = z.object({
    name: z.string().min(1, "Veuillez entrer votre nom.").min(2, "Nom trop court"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(6, "Téléphone invalide"),
    option: z.string().min(1, "Veuillez choisir une option"),
    message: z.string().min(1, "Veuillez entrer un message.").min(10, "Message trop court"),
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const onSubmit = async (data: ContactFormData) => {
        const payload = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            subject: data.option,
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            alert("Votre message a été envoyé !");
            reset();
        } else {
            alert("Une erreur est survenue, veuillez réessayer.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formFields}>
                <div className={styles.inputWrapper}>
                    <input type="text" placeholder="Nom complet" {...register("name")} className={styles.input} />
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>

                <div className={styles.inputWrapper}>
                    <input type="email" placeholder="Email" {...register("email")} className={styles.input} />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>

                <div className={styles.inputWrapper}>
                    <input type="tel" placeholder="Téléphone" {...register("phone")} className={styles.input} />
                    {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                </div>

                <div className={styles.inputWrapper}>
                    <select className={styles.select} defaultValue="" required {...register("option")}>
                        <option disabled hidden value="">
                            Sélectionner une option
                        </option>
                        <option value="artificial_intelligence">Intelligence Artificielle</option>
                        <option value="digital_development">Développement Digital</option>
                        <option value="training">Formations</option>
                        <option value="consulting_research">Conseil & Recherche</option>
                    </select>

                    <div className={styles.selectIcon}>
                        <ChevronBottomIcon />
                    </div>

                    {errors.option && <p className={styles.error}>{errors.option.message}</p>}
                </div>

                <div className={styles.inputWrapper}>
                    <textarea
                        rows={4}
                        placeholder="Votre message"
                        {...register("message")}
                        className={styles.textarea}
                    ></textarea>
                    {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                </div>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? "Envoi..." : "Envoyer le message"}
            </button>
        </form>
    );
}
