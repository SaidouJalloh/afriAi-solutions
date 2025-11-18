import styles from "@components/contact/form/contact-form.module.scss";
import ChevronBottomIcon from "@/components/ui/svgs/chevron-bottom";

export default function ContactForm() {
    return (
        <form action="" className={styles.form}>
            <div className={styles.formFields}>
                <div className={styles.inputWrapper}>
                    <input type="text" className={styles.input} placeholder="Nom complet" required />
                </div>

                <div className={styles.inputWrapper}>
                    <input type="email" className={styles.input} placeholder="Email" required />
                </div>

                <div className={styles.inputWrapper}>
                    <input type="tel" className={styles.input} placeholder="Téléphone" required />
                </div>

                <div className={styles.inputWrapper}>
                    <select name="options" className={styles.select} required defaultValue="">
                        <option disabled hidden value="" className={styles.option}>
                            Sélectionner une option
                        </option>
                        <option value="intelligence Artificielle">Intelligence Artificielle</option>
                        <option value="développement Digital">Développement Digital</option>
                        <option value="Formations">Formations</option>
                        <option value="Conseil & Recherche">Conseil & Recherche</option>
                    </select>
                    <div className={styles.selectIcon}>
                        <ChevronBottomIcon />
                    </div>
                </div>

                <div className={styles.inputWrapper}>
                    <textarea
                        name="message"
                        rows={4}
                        className={styles.textarea}
                        placeholder="Votre message"
                        required
                    ></textarea>
                </div>
            </div>

            <button type="submit" className={styles.submitButton}>
                Envoyer le message
            </button>
        </form>
    );
}
