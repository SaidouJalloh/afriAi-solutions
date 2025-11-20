"use client";
import Squares from "@ui/squares/squares";
import styles from "./cta-section.module.scss";
import { scrollToSection } from "@/utils/scroll-to-section";

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>Nous faisons de votre réussite notre priorité</h2>

                <p className={styles.description}>
                    Que ce soit pour créer un site, une application mobile ou automatiser vos processus avec l'IA, notre
                    équipe vous accompagne avec expertise et engagement pour concrétiser vos ambitions
                </p>

                <button
                    type="button"
                    aria-label="Contactez-nous"
                    className={styles.ctaButton}
                    onClick={() => scrollToSection("#contact")}
                >
                    Contactez-nous
                </button>
            </div>

            <div aria-hidden={true} className={styles.squaresTopLeft}>
                <Squares />
            </div>

            <div aria-hidden={true} className={styles.squaresBottomRight}>
                <Squares />
            </div>
        </section>
    );
}
