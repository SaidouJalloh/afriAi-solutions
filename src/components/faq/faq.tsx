"use client";
import Link from "next/link";
import React from "react";
import Footer from "@components/footer/footer";
import ArrowTopIcon from "@ui/svgs/arrow-top";
import styles from "@components/faq/faq.module.scss";
import { faqData, FAQItem as FAQItemProps } from "@/data/faq-data";

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
