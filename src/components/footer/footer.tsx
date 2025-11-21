"use client";
import ChevronDoubleRight from "@icons/chevron-double-right";
import FacebookLogoIcon from "@icons/facebook-logo";
import LinkedInLogoIcon from "@icons/linkedIn-logo";
import SendPlaneIcon from "@icons/send-plane";
import TwitterLogoIcon from "@icons/twitter-logo";
import Link from "next/link";
import styles from "@components/footer/footer.module.scss";
import { scrollToSection } from "@/utils/scroll-to-section";
import Image from "next/image";

const infoLinks = [
    { href: "#services", label: "Services", isInternal: true },
    { href: "#projects", label: "Projets", isInternal: true },
    { href: "#team", label: "Équipe", isInternal: true },
    { href: "#faq", label: "FAQ", isInternal: true },
    { href: "/conditions-generales", label: "Conditions Générales", isInternal: false },
    { href: "/politique-utilisation", label: "Politique d'Utilisation", isInternal: false },
];

const socialLinks = [
    { Icon: FacebookLogoIcon, href: "/", label: "Facebook" },
    { Icon: LinkedInLogoIcon, href: "/", label: "LinkedIn" },
    { Icon: TwitterLogoIcon, href: "/", label: "Twitter ou X", className: "bg-white text-black rounded-md" },
];

const footerBottomLinks = [
    { href: "#home", label: "Accueil", isInternal: true },
    { href: "#about", label: "À propos", isInternal: true },
    { href: "/conditions-generales", label: "Conditions Générales", isInternal: false },
    { href: "/politique-utilisation", label: "Politique d'Utilisation", isInternal: false },
    { href: "#contact", label: "Contact", isInternal: true },
];

function InfoLink({ href, label, isInternal }: { href: string; label: string; isInternal: boolean }) {
    const handleClick = (e: React.MouseEvent) => {
        if (isInternal && href.startsWith("#")) {
            e.preventDefault();
            scrollToSection(href);
        }
    };

    if (isInternal && href.startsWith("#")) {
        return (
            <li>
                <button onClick={handleClick} className={styles.infoLink}>
                    <ChevronDoubleRight className={styles.chevronIcon} />
                    <span>{label}</span>
                </button>
            </li>
        );
    }

    return (
        <li>
            <Link href={href} className={styles.infoLink}>
                <ChevronDoubleRight className={styles.chevronIcon} />
                <span>{label}</span>
            </Link>
        </li>
    );
}

function BottomLink({ href, label, isInternal }: { href: string; label: string; isInternal: boolean }) {
    const handleClick = (e: React.MouseEvent) => {
        if (isInternal && href.startsWith("#")) {
            e.preventDefault();
            scrollToSection(href);
        }
    };

    if (isInternal && href.startsWith("#")) {
        return (
            <li>
                <button onClick={handleClick} className={styles.bottomLink}>
                    {label}
                </button>
            </li>
        );
    }

    return (
        <li>
            <Link href={href} className={styles.bottomLink}>
                {label}
            </Link>
        </li>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    {/* Logo + Description + Réseaux sociaux */}
                    <section className={styles.logoSection}>
                        <div className={styles.logoWrapper}>
                            <Image src="/logo.png" alt="AfriAi Solutions Logo" width={50} height={50} quality={75} />
                            <h2 className={styles.logoText}>
                                Afri<span className={styles.logoTextSpan}>Ai</span> Solutions
                            </h2>
                        </div>
                        <p className={styles.description}>
                            Nous concevons des interfaces sur mesure et développons des solutions adaptées à vos
                            besoins. Nous connectons les idées aux technologies.
                        </p>
                        <h3 className={styles.socialTitle}>Suivez-nous</h3>
                        <ul className={styles.socialList}>
                            {socialLinks.map((social, i) => (
                                <li key={i}>
                                    <Link href={social.href}>
                                        <span className="sr-only">{social.label}</span>
                                        <social.Icon className={`${styles.socialIcon} ${social.className || ""}`} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Informations */}
                    <section className={styles.infoSection}>
                        <h3>
                            Informations <span></span>
                        </h3>
                        <ul>
                            {infoLinks.map((link, i) => (
                                <InfoLink key={i} href={link.href} label={link.label} isInternal={link.isInternal} />
                            ))}
                        </ul>
                    </section>

                    {/* Newsletter */}
                    <section className={styles.newsletterSection}>
                        <h3>
                            Newsletter <span></span>
                        </h3>
                        <p>Un concentré d'inspiration et de tech, une fois de temps en temps. Ça vous dit ?.</p>
                        <form action="">
                            <div className={styles.newsletterForm}>
                                <input type="email" name="email" placeholder="Votre adresse mail" />
                                <button aria-label="Envoyer" type="submit">
                                    <SendPlaneIcon />
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

            {/* Footer bas */}
            <div className={styles.bottomBar}>
                <section className={styles.bottomContent}>
                    <p>© {currentYear} AfriAi Solutions Tous droits réservés</p>
                    <ul>
                        {footerBottomLinks.map((link, i) => (
                            <BottomLink key={i} href={link.href} label={link.label} isInternal={link.isInternal} />
                        ))}
                    </ul>
                </section>
            </div>
        </footer>
    );
}
