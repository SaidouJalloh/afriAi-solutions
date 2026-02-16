import Link from "next/link";
import CalendarClockIcon from "@icons/calendar-clock";
import ContactForm from "@components/contact/form/contact-form";
import styles from "@components/contact/contact-section/contact.module.scss";

export default function Contact() {
    return (
        <section aria-labelledby="contact-section" id="contact" className={styles.section}>
            <h2 id="contact-section" className={styles.title}>
                Contactez-nous
            </h2>

            {/* content */}
            <div className={styles.container}>
                {/* text */}
                <div className={styles.textContent}>
                    <address className={styles.address}>
                        <ul className={styles.contactList}>
                            <li className={`${styles.contactItem} ${styles.schedule}`}>
                                <span className="flex gap-1">
                                    <CalendarClockIcon /> Horaires d'ouverture :
                                </span>
                                <span className={styles.contactValue}>Lundi - Vendredi / 9h30 - 17h30</span>
                            </li>

                            <li className={styles.contactItem}>
                                <span className={styles.contactLabel}>Adresse Email :</span>
                                <Link href="" className={styles.contactLink}>
                                    contact@afriaisolutions.com
                                </Link>
                            </li>

                            <li className={styles.contactItem}>
                                <span className={styles.contactLabel}>Numéro de telephone :</span>
                                <span className={styles.contactValue}>+221 78 155 73 73</span>
                            </li>

                            <li className={styles.contactItem}>
                                <span className={styles.contactLabel}>Adresse :</span>
                                <span className={styles.contactValue}>
                                    Yeumbeul Asecna, Immeuble 14, <span>Dakar, Sénégal</span>
                                </span>
                            </li>
                        </ul>
                    </address>
                </div>

                {/* form */}
                <ContactForm />
            </div>
        </section>
    );
}
