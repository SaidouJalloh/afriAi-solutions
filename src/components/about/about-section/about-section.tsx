"use client";
import AfricaIcon from "@icons/africa";
import LightBulbIcon from "@icons/light-bulb";
import QuoteAltRightIcon from "@icons/quote-alt-right";
import HeadsetIcon from "@icons/headset-fill";
import AboutImages from "@components/about/about-images/about-images";
import styles from "@components/about/about-section/about-section.module.scss";
import { scrollToSection } from "@/utils/scroll-to-section";
import SectionReveal from "@/components/ui/section-reveal/section-reveal";

interface CardProps {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export const cardsData: CardProps[] = [
    {
        icon: AfricaIcon,
        title: "Innovation locale",
        description: "Des solutions d'IA adaptées aux besoins spécifiques de l'Afrique.",
    },
    {
        icon: LightBulbIcon,
        title: "Expertise africaine",
        description: "Une équipe de chercheurs et développeurs africains passionnés.",
    },
];

export function Card({ icon: Icon, title, description }: CardProps) {
    return (
        <li>
            <article className={styles.card}>
                {/* icon */}
                <span aria-hidden={true} className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                </span>
                {/* text */}
                <div>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </article>
        </li>
    );
}

export default function About() {
    return (
        <SectionReveal>
            <section id="about" aria-labelledby="about-section" className={styles.section}>
                {/* content */}
                <div className={styles.content}>
                    {/* images container */}
                    <AboutImages />

                    {/* text container */}
                    <div className={styles.textContainer}>
                        <h2 id="about-section" className={styles.sectionTitle}>
                            À propos
                        </h2>
                        <p className={styles.mainTitle}>
                            Une nouvelle ère d'IA africaine, <span className={styles.highlight}>éthique</span> et
                            <span className={styles.highlight}> transformative</span>
                        </p>
                        <p className={styles.description}>
                            AfriAI Solutions est une société panafricaine spécialisée en intelligence artificielle.
                            Fondée par des chercheurs africains, elle forme et accompagne les talents tout en concevant
                            des applications innovantes avec une approche éthique et responsable.
                        </p>
                        <div className={styles.cardsWrapper}>
                            <ul className={styles.cardsList}>
                                {cardsData.map((card, index) => (
                                    <Card
                                        key={index}
                                        icon={card.icon}
                                        title={card.title}
                                        description={card.description}
                                    />
                                ))}
                            </ul>
                            <p className={styles.quoteBox}>
                                L'intelligence artificielle peut transformer l'Afrique, si elle est conçue avec elle,
                                par ses talents et pour son avenir.
                                <QuoteAltRightIcon className={styles.quoteIcon} />
                            </p>
                        </div>
                        <div className={styles.actionsWrapper}>
                            <button
                                type="button"
                                aria-label="Demander un devis gratuitement"
                                className={styles.ctaButton}
                                onClick={() => scrollToSection("#contact")}
                            >
                                Devis Gratuit
                            </button>
                            <div className={styles.contactInfo}>
                                <span className={styles.headsetIconWrapper}>
                                    <HeadsetIcon className={styles.headsetIcon} />
                                </span>
                                <address className={styles.address}>
                                    <h4 className={styles.contactLabel}>Téléphone</h4>
                                    <p className={styles.phoneNumber}>+221 33 123 45 67</p>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SectionReveal>
    );
}
