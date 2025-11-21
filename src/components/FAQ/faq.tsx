import Image from "next/image";
import SharpQuestionIcon from "@icons/sharp-question";
import Link from "next/link";
import styles from "@components/faq/faq.module.scss";
import SectionReveal from "../ui/section-reveal/section-reveal";

export type MenuItem = {
    id: number;
    href: string;
    label: string;
};

export const menuItems: MenuItem[] = [
    {
        id: 1,
        href: "/",
        label: "Comment savoir si l'IA peut vraiment m'aider dans mon activité ?",
    },
    {
        id: 2,
        href: "/diagnostic",
        label: "Faire un diagnostic rapide de mon activité",
    },
    {
        id: 3,
        href: "/use-cases",
        label: "Découvrir des cas d'usage adaptés à mon métier",
    },
    {
        id: 4,
        href: "/formation",
        label: "Me former à l'utilisation de l'intelligence artificielle",
    },
    {
        id: 5,
        href: "/accompagnement",
        label: "Être accompagné dans l'intégration de solutions IA",
    },
];

export default function FAQ() {
    return (
        <section aria-labelledby="faq-section" id="faq" className={styles.faqSection}>
            {/* Images container */}
            <SectionReveal className={styles.imagesContainer} delay={0.1}>
                <div className={styles.imagesWrapper}>
                    {/* Icon "?" */}
                    <span className={styles.questionIcon}>
                        <SharpQuestionIcon className="w-6 h-6" />
                    </span>

                    {/* Image top */}
                    <Image
                        src="/man-at-work.jpg"
                        alt="man at work"
                        width={600}
                        height={400}
                        className={styles.imageTop}
                    />

                    {/* Image bottom */}
                    <Image
                        src="/man-at-work-smoking.jpg"
                        alt="man at work"
                        width={600}
                        height={400}
                        className={styles.imageBottom}
                    />
                </div>
            </SectionReveal>

            {/* Content */}
            <SectionReveal className={styles.contentContainer}>
                <h2 id="faq-section" className={styles.title}>
                    Questions fréquentes
                </h2>

                <p className={styles.description}>Quelques questions clés pour mieux comprendre notre accompagnement</p>

                <ul className={styles.questionsList}>
                    {menuItems.map((item) => (
                        <li key={item.id} className={styles.questionItem}>
                            <Link href={item.href} className={styles.questionLink}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SectionReveal>
        </section>
    );
}
