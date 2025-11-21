"use client";
import Squares from "@ui/squares/squares";
import styles from "@components/CTA/cta-section.module.scss";
import { scrollToSection } from "@/utils/scroll-to-section";
import SectionReveal from "../ui/section-reveal/section-reveal";

export default function CTASection() {
    return (
        <section aria-labelledby="cta-section" className={styles.ctaSection}>
            <div className={styles.contentWrapper}>
                <SectionReveal variant="fadeUp">
                    <h2 id="cta-section" className={styles.title}>
                        Nous faisons de votre réussite notre priorité
                    </h2>
                </SectionReveal>

                <SectionReveal variant="fadeUp" delay={0.1}>
                    <p className={styles.description}>
                        Que ce soit pour créer un site, une application mobile ou automatiser vos processus avec l'IA,
                        notre équipe vous accompagne avec expertise et engagement pour concrétiser vos ambitions
                    </p>
                </SectionReveal>

                <SectionReveal variant="fadeUp" delay={0.2}>
                    <button
                        type="button"
                        aria-label="Contactez-nous"
                        className={styles.ctaButton}
                        onClick={() => scrollToSection("#contact")}
                    >
                        Contactez-nous
                    </button>
                </SectionReveal>
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
