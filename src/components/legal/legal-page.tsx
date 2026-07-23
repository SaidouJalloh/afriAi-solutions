import Link from "next/link";
import ArrowTopIcon from "@ui/svgs/arrow-top";
import Footer from "@components/footer/footer";
import styles from "@components/legal/legal-page.module.scss";

export interface LegalSection {
    id: string;
    title: string;
    paragraphs?: string[];
    items?: string[];
}

interface LegalPageProps {
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: LegalSection[];
}

export default function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
    return (
        <div className={styles.wrapper}>
            <header className={styles.backHeader}>
                <Link href="/" className={styles.backLink} aria-label="Retour à l'accueil" title="Retour à l'accueil">
                    <ArrowTopIcon className={styles.backIcon} />
                </Link>
            </header>

            <main className={styles.main}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <p className={styles.lastUpdated}>Dernière mise à jour : {lastUpdated}</p>
                </header>

                <div className={styles.content}>
                    {sections.map((section) => (
                        <article key={section.id} id={section.id} className={styles.section}>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                            <div className={styles.sectionBody}>
                                {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                                {section.items && (
                                    <ul className={styles.list}>
                                        {section.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.contactWrapper}>
                    <p className={styles.contactText}>Des questions sur ce document ?</p>
                    <Link href="/#contact" className={styles.contactButton}>
                        Contactez-nous
                    </Link>
                </div>
            </main>

            <Footer currentPage="faq" />
        </div>
    );
}
