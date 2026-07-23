"use client";

import ChevronDoubleRight from "@icons/chevron-double-right";
import FacebookLogoIcon from "@icons/facebook-logo";
import InstagramLogoIcon from "@icons/instagram-logo";
import LinkedInLogoIcon from "@icons/linkedIn-logo";
import SendPlaneIcon from "@icons/send-plane";
import TwitterLogoIcon from "@icons/twitter-logo";
import Link from "next/link";
import Image from "next/image";
import styles from "@components/footer/footer.module.scss";
import NavLink from "@ui/nav-link";

interface FooterProps {
    currentPage?: "landing-page" | "faq";
}

const infoLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projets" },
    { href: "#team", label: "Équipe" },
    { href: "#faq", label: "FAQ" },
    { href: "/conditions-generales", label: "Conditions Générales" },
    { href: "/politique-utilisation", label: "Politique d'Utilisation" },
];

const socialLinks = [
    { Icon: FacebookLogoIcon, href: "https://www.facebook.com/share/1BamMnqKN3/?mibextid=wwXIfr", label: "Facebook" },
    { Icon: LinkedInLogoIcon, href: "https://www.linkedin.com/company/afriai-solutions/", label: "LinkedIn" },
    { Icon: InstagramLogoIcon, href: "https://www.instagram.com/afriai_solutions/", label: "Instagram" },
    { Icon: TwitterLogoIcon, href: "https://x.com/AfriaiSolutions", label: "X (Twitter)" },
];

const footerBottomLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "/conditions-generales", label: "Conditions Générales" },
    { href: "/politique-utilisation", label: "Politique d'Utilisation" },
    { href: "#contact", label: "Contact" },
];

export default function Footer({ currentPage = "landing-page" }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const anchorPrefix = currentPage === "faq" ? "/" : undefined;

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <section className={styles.logoSection}>
                        <div className={styles.logoWrapper}>
                            <Image src="/logo.png" alt="AfriAi Solutions Logo" width={50} height={50} quality={75} />
                            <h2 className={styles.logoText}>
                                Afri<span className={styles.logoTextSpan}>AI</span> Solutions
                            </h2>
                        </div>
                        <p className={styles.description}>
                            Nous concevons des interfaces sur mesure et développons des solutions adaptées à vos
                            besoins. Nous connectons les idées aux technologies.
                        </p>
                        <h3 className={styles.socialTitle}>Suivez-nous</h3>
                        <ul className={styles.socialList}>
                            {socialLinks.map((social) => (
                                <li key={social.label}>
                                    <Link href={social.href}>
                                        <span className="sr-only">{social.label}</span>
                                        <social.Icon className={styles.socialIcon} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.infoSection}>
                        <h3>
                            Informations <span></span>
                        </h3>
                        <ul>
                            {infoLinks.map((link) => (
                                <li key={link.href}>
                                    <NavLink href={link.href} prefix={anchorPrefix} className={styles.infoLink}>
                                        <ChevronDoubleRight className={styles.chevronIcon} />
                                        <span>{link.label}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.newsletterSection}>
                        <h3>
                            Newsletter <span></span>
                        </h3>
                        <p>Un concentré d'inspiration et de tech, une fois de temps en temps. Ça vous dit ?.</p>
                        <form>
                            <div className={styles.newsletterForm}>
                                <input type="email" name="email" placeholder="Votre adresse mail" />
                                <button aria-label="Envoyer" type="submit" disabled={true}>
                                    <SendPlaneIcon />
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <section className={styles.bottomContent}>
                    <p>© {currentYear} AfriAi Solutions Tous droits réservés</p>
                    <ul>
                        {footerBottomLinks.map((link) => (
                            <li key={link.href}>
                                <NavLink href={link.href} prefix={anchorPrefix} className={styles.bottomLink}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </footer>
    );
}
