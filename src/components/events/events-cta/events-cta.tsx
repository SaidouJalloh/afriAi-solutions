import Link from "next/link";
import Squares from "@ui/squares/squares";
import styles from "@components/CTA/cta-section.module.scss";
import SectionReveal from "@ui/section-reveal/section-reveal";

export default function EventsCTA() {
    return (
        <section aria-labelledby="events-cta-section" className={styles.ctaSection}>
            <div className={styles.contentWrapper}>
                <SectionReveal variant="fadeUp">
                    <h2 id="events-cta-section" className={styles.title}>
                        Rejoignez l'aventure dès aujourd'hui et faites entendre votre voix !
                    </h2>
                </SectionReveal>

                <SectionReveal variant="fadeUp" delay={0.15}>
                    <Link href="/#contact" className={styles.ctaButton}>
                        Contactez-nous
                    </Link>
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
