"use client";
import styles from "@components/home/home/home.module.scss";
import HomeImage from "@/components/home/home-image/home-image";
import IntroFeatures from "../intro-features/intro-features";
import Background from "../background/background";
import { scrollToSection } from "@/utils/scroll-to-section";

export default function Home() {
    return (
        <section id={"home"} className={styles.homeContainer} aria-labelledby="home-section">
            <Background />
            <div className={styles.contentWrapper}>
                <div className={styles.innerContent}>
                    <div className={styles.textSection}>
                        <h2 id="home-section" className={styles.title}>
                            Donnez à votre entreprise la puissance de l’IA
                        </h2>
                        <p className={styles.description}>
                            <span className="font-semibold">AfriAI Solutions</span> simplifie vos tâches grâce à
                            l’intelligence artificielle afin que vous puissiez vous concentrer sur l’essentiel
                        </p>
                        <div>
                            <button
                                type="button"
                                aria-label="Demander un devis gratuit"
                                className={styles.ctaButton}
                                onClick={() => scrollToSection("#contact")}
                            >
                                Devis Gratuit
                            </button>
                        </div>
                    </div>
                    <HomeImage />
                </div>
                <IntroFeatures />
            </div>
        </section>
    );
}
