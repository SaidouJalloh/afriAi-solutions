"use client";
import Link from "next/link";
import styles from "@components/events/events-hero/events-hero.module.scss";
import DecorativeBackground from "../decorative-background/decorative-background";

export default function EventsHero() {
    return (
        <section className={styles.heroSection} aria-labelledby="events-hero-title">
                  <DecorativeBackground />

            <div className={styles.contentWrapper}>
                <div className={styles.innerContent}>
                    <div className={styles.textSection}>
                        <nav aria-label="Fil d'Ariane">
                            <ol className={styles.breadcrumb}>
                                <li>
                                    <Link href="/" className={styles.breadcrumbLink}>
                                        AfriAI Solutions
                                    </Link>
                                </li>
                                <li aria-hidden="true" className={styles.breadcrumbSeparator}>
                                    ›
                                </li>
                                <li className={styles.breadcrumbCurrent}>Événements</li>
                            </ol>
                        </nav>

                        <h1 id="events-hero-title" className={styles.title}>
                            Événements et cours pour enrichir votre parcours
                        </h1>

                       
                    </div>

                </div>
            </div>
        </section>
    );
}
