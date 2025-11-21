import BotIcon from "@icons/bot";
import ChatCodeIcon from "@icons/chat-code";
import GlobaleIcon from "@icons/globale";
import TargetIcon from "@icons/target";
import styles from "@components/service/service.module.scss";
import SectionReveal from "@ui/section-reveal/section-reveal";
import { li } from "framer-motion/client";

type CardData = {
    id: number;
    title: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    iconColor: string;
    iconBg: string;
    order?: string;
};

const cardsData: CardData[] = [
    {
        id: 1,
        title: "Intelligence Artificielle",
        description:
            "Développement de solutions IA sur mesure : chatbots, vision par ordinateur, NLP, systèmes prédictifs et moteurs de recommandation",
        icon: BotIcon,
        iconColor: "text-afri-primary",
        iconBg: "bg-afri-primary/5",
    },
    {
        id: 2,
        title: "Développement Digital",
        description:
            "Création de solutions logicielles sur mesure : sites web, applications mobiles, design et outils personnalisés pour répondre à vos besoins",
        icon: ChatCodeIcon,
        iconColor: "text-afri-secondary",
        iconBg: "bg-afri-secondary/5",
    },
    {
        id: 3,
        title: "Formations & Appui",
        description:
            "Programmes pratiques pour former professionnels et étudiants aux outils d’IA, de data science et de gestion de projet, incluant le suivi et l’évaluation",
        icon: TargetIcon,
        iconColor: "text-afri-primary",
        order: "mid-xl:order-3 md:order-4 order-3",
        iconBg: "bg-afri-primary/5",
    },
    {
        id: 4,
        title: "Conseil & Recherche",
        description:
            "Accompagnement complet pour les porteurs de projet, de l’idée initiale à la mise en œuvre digitale, afin d’assurer l’impact et la réussite de vos initiatives",
        icon: GlobaleIcon,
        iconColor: "text-afri-secondary",
        order: "mid-xl:order-4 md:order-3 order-4",
        iconBg: "bg-afri-secondary/5",
    },
];

export default function Services() {
    return (
        <section id="services" aria-labelledby="services-section" className={styles.section}>
            <div className={styles.container}>
                <SectionReveal variant="fadeUp">
                    <h2 id="services-section" className={styles.subtitle}>
                        Nos Services
                    </h2>
                </SectionReveal>

                <SectionReveal variant="fadeUp" delay={0.1}>
                    <p className={styles.title}>
                        Pensés pour simplifier, automatiser et faire <span className={styles.highlight}>croître</span>{" "}
                        votre activité
                    </p>
                </SectionReveal>

                <ul className={styles.cardsList}>
                    {cardsData.map(({ id, title, description, icon: Icon, iconColor, order, iconBg }, i) => (
                        <li key={id} className={`${styles.cardItem} ${order || ""}`}>
                            <SectionReveal variant="fadeUp" delay={i * 0.12}>
                                <article className={styles.cardArticle}>
                                    <span
                                        aria-hidden={true}
                                        className={`${styles.cardIconWrapper} ${iconColor} ${iconBg}`}
                                    >
                                        <Icon className="w-8 h-8" />
                                    </span>
                                    <h3 className={styles.cardTitle}>{title}</h3>
                                    <p className={styles.cardDescription}>{description}</p>
                                </article>
                            </SectionReveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
