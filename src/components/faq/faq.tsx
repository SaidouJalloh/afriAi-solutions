"use client";
import Link from "next/link";
import React from "react";
import Footer from "@components/footer/footer";
import ArrowTopIcon from "@ui/svgs/arrow-top";
import styles from "@components/faq/faq.module.scss";

interface FAQItemProps {
    title: string;
    href: string;
    answer: string;
}

const faqData: FAQItemProps[] = [
    {
        title: "Comment savoir si l'IA peut vraiment m'aider dans mon activité ?",
        href: "/faq#ia-activite",
        answer: "L'intelligence artificielle peut automatiser des tâches répétitives, améliorer votre relation client, optimiser vos processus internes et vous faire gagner du temps. Nous analysons votre activité, vos objectifs et vos contraintes afin d’identifier les opportunités concrètes où l’IA peut créer de la valeur mesurable.",
    },
    {
        title: "Comment faire un diagnostic rapide de mon activité ?",
        href: "/faq#diagnostic-rapide",
        answer: "Nous proposons un diagnostic rapide qui permet d’identifier les tâches chronophages, les processus inefficaces et les opportunités d’automatisation. En quelques échanges, vous obtenez une vision claire des solutions IA adaptées à votre structure.",
    },
    {
        title: "Proposez-vous des cas d’usage adaptés à mon métier ?",
        href: "/faq#cas-usage",
        answer: "Oui. Chaque secteur a ses spécificités. Nous analysons votre métier pour vous proposer des cas d’usage concrets : automatisation du service client, génération de contenus, analyse de données, assistants intelligents, optimisation des ventes, et bien plus encore.",
    },
    {
        title: "Puis-je me former à l’utilisation de l’intelligence artificielle ?",
        href: "/faq#formation-ia",
        answer: "Absolument. Nous proposons des formations pratiques adaptées à votre niveau afin de vous rendre autonome dans l’utilisation des outils d’intelligence artificielle. L’objectif est de vous permettre d’intégrer l’IA efficacement dans votre quotidien professionnel.",
    },
    {
        title: "Proposez-vous un accompagnement pour intégrer des solutions IA ?",
        href: "/faq#accompagnement-ia",
        answer: "Oui, nous vous accompagnons de l’analyse à l’implémentation. Cela inclut le choix des outils, l’intégration technique, les tests, ainsi que le suivi et l’optimisation continue pour garantir un retour sur investissement durable.",
    },
];

const FAQItem: React.FC<{ item: FAQItemProps }> = ({ item }) => {
    const id = item.href.split("#")[1];

    return (
        <article id={id} className={styles.faqItem}>
            <h2 className={styles.faqQuestion}>{item.title}</h2>
            <p className={styles.faqAnswer}>{item.answer}</p>
        </article>
    );
};

export default function FAQ() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.backHeader}>
                <Link href="/" className={styles.backLink} aria-label="Retour à l'accueil" title="Retour à l'accueil">
                    <ArrowTopIcon className={styles.backIcon} />
                </Link>
            </header>

            <main className={styles.main}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.title}>Questions Fréquentes</h1>
                    <p className={styles.subtitle}>
                        Trouvez les réponses aux questions les plus courantes sur notre plateforme de contribution
                        vocale
                    </p>
                </header>

                <section className={styles.faqSection} aria-label="Liste des questions fréquentes">
                    {faqData.map((item) => (
                        <FAQItem key={item.href} item={item} />
                    ))}
                </section>

                <div className={styles.contactWrapper}>
                    <p className={styles.contactText}>Vous ne trouvez pas la réponse à votre question ?</p>
                    <Link href="/#contact" className={styles.contactButton}>
                        Contactez-nous
                    </Link>
                </div>
            </main>

            <Footer currentPage="faq" />
        </div>
    );
}
