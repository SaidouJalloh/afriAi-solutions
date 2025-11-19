"use client";
import MenuTablerIcon from "@icons/menu-tabler";
import { useState } from "react";
import MenuCloseIcon from "@icons/menu-close";
import styles from "@components/header/header.module.scss";
import Logo from "../ui/logo/logo";

const menuLink: string[] = ["Accueil", "À Propos", "Services", "Réalisations", "Équipe", "Contact"];

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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
                            <li key={link} className={styles.navItem}>
                                {link}
                            </li>
                        ))}
                        <li>
                            <button className={styles.ctaButton}>Devis Gratuit</button>
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
                            <li key={link} className={styles.mobileNavItem}>
                                {link}
                            </li>
                        ))}
                        <li>
                            <button className={styles.ctaButton}>Devis Gratuit</button>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}
