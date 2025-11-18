import Link from "next/link";
import CalendarClockIcon from "@icons/calendar-clock";
import HandCheckIcon from "@icons/handcheck";
import ContactForm from "@components/contact/form/contact-form";
import styles from "@components/contact/contact-section/contact.module.scss";

export default function Contact() {
    return (
        <section className={styles.section}>
            {/* content */}
            <div className={styles.container}>
                {/* text */}
                <div className={styles.textContent}>
                    <div className={styles.header}>
                        <span className={styles.badge}>
                            <HandCheckIcon /> Construisons quelques choses ensemble...
                        </span>
                        <h2 className={styles.title}>Contact</h2>
                        <p className={styles.description}>
                            Nous sommes à votre écoute pour discuter de vos projets, répondre à vos questions ou vous
                            accompagner dans vos prochaines étapes
                        </p>
                    </div>

                    {/* line */}
                    <hr className={styles.divider} />

                    <address className={styles.address}>
                        <ul className={styles.contactList}>
                            <li className={`${styles.contactItem} ${styles.schedule}`}>
                                <CalendarClockIcon /> Horaires d'ouverture :
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
                                <span className={styles.contactValue}>+221 33 123 45 67</span>
                            </li>

                            <li className={styles.contactItem}>
                                <span className={styles.contactLabel}>Lieu :</span>
                                <span className={styles.contactValue}>Dakar, Sénégal</span>
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
