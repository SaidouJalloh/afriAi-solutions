"use client";
import MenuTablerIcon from "@icons/menu-tabler";
import { useEffect, useState } from "react";
import MenuCloseIcon from "@icons/menu-close";
import styles from "@components/header/header.module.scss";
import Logo from "@ui/logo/logo";
import { scrollToSection } from "@/utils/scroll-to-section";
type MenuLinkType = {
    label: string;
    href: string;
};

const menuLink: MenuLinkType[] = [
    { label: "Accueil", href: "#home" },
    { label: "À Propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#projects" },
    { label: "Équipe", href: "#team" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const isCrolling = () => {
            setMobileMenuOpen(false);
        };
        window.addEventListener("scroll", isCrolling);

        return () => window.removeEventListener("scroll", isCrolling);
    }, []);

    const onClickMobileLink = (href: string) => {
        setMobileMenuOpen(false);
        scrollToSection(href);
    };
    return (
        <>
            {/* Desktop Header */}
            <header className={styles.desktopHeader}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>

                <nav>
                    <ul className={styles.navList}>
                        {menuLink.map((link) => (
                            <li key={link.label} className={styles.navItem} onClick={() => scrollToSection(link.href)}>
                                {link.label}
                            </li>
                        ))}
                        <li>
                            <button onClick={() => scrollToSection("#contact")} className={styles.ctaButton}>
                                Devis Gratuit
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Mobile and Tablet Navigation */}
            <aside className={styles.mobileAside}>
                <div className={styles.mobileHeader}>
                    <div className={styles.mobileLogoContainer}>
                        <Logo />
                    </div>
                    <button
                        type="button"
                        className={styles.menuButton}
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuTablerIcon />}
                    </button>
                </div>
            </aside>

            {/* overlay */}
            {isMobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)} className={styles.overlay} />}

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        {menuLink.map((link) => (
                            <li
                                onClick={() => onClickMobileLink(link.href)}
                                key={link.label}
                                className={styles.mobileNavItem}
                            >
                                {link.label}
                            </li>
                        ))}
                        <li>
                            <button onClick={() => onClickMobileLink("#contact")} className={styles.ctaButton}>
                                Devis Gratuit
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}
