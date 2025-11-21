import BrainIcon from "@icons/brain";
import CodeComputerIcon from "@icons/code-computer";
import GraduationCapIcon from "@icons/graduation-cap";
import styles from "@components/home/intro-features/intro-features.module.scss";
import SectionReveal from "@/components/ui/section-reveal/section-reveal";

export default function IntroFeatures() {
    return (
        <div className={styles.featuresList}>
            <SectionReveal variant="fadeLeft" className={styles.featureCardLeft}>
                <article className={styles.featureArticle}>
                    <span className={styles.iconWrapper}>
                        <BrainIcon className="w-6 h-6" />
                    </span>
                    <h3 className={styles.featureTitle}>Solutions IA adaptées</h3>
                    <p className={styles.featureText}>
                        Nous propulsons vos performances grâce à l’IA en automatisant vos tâches, optimisant vos
                        processus et accélérant votre croissance
                    </p>
                </article>
            </SectionReveal>

            <SectionReveal variant="fadeUp" className={styles.featureCardCenter}>
                <article className={styles.featureArticleCenter}>
                    <span className={styles.iconWrapper}>
                        <CodeComputerIcon className="w-5 h-5" />
                    </span>
                    <h3 className={styles.featureTitle}>Développement logiciel</h3>
                    <p className={styles.featureText}>
                        Votre travail mérite d’être valorisé. Nous créons des sites et applications sur mesure pour
                        renforcer votre présence en ligne et accroître votre impact
                    </p>
                </article>
            </SectionReveal>

            <SectionReveal variant="fadeRight" className={styles.featureCardRight}>
                <article className={styles.featureArticle}>
                    <span className={styles.iconWrapper}>
                        <GraduationCapIcon className="w-6 h-6" />
                    </span>
                    <h3 className={styles.featureTitle}>Renforcement des talents</h3>
                    <p className={styles.featureText}>
                        Former, accompagner et valoriser vos compétences en IA et gestion de projet pour renforcer vos
                        capacités et bâtir une expertise
                    </p>
                </article>
            </SectionReveal>
        </div>
    );
}
