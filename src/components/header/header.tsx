"use client";
import MenuTablerIcon from "@icons/menu-tabler";
import MenuCloseIcon from "@icons/menu-close";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@components/header/header.module.scss";
import Logo from "@ui/logo/logo";
import NavLink from "@ui/nav-link";

type MenuLinkType = {
    label: string;
    href: string;
};

const menuLink: MenuLinkType[] = [
    { label: "À Propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#projects" },
    { label: "News", href: "/events" },
    { label: "Équipe", href: "#team" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const anchorPrefix = pathname === "/" ? undefined : "/";

    useEffect(() => {
        const onScroll = () => setMobileMenuOpen(false);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Desktop Header */}
            <header className={styles.desktopHeader}>
                <Link href="/" className={styles.logoContainer}>
                    <Logo />
                </Link>

                <nav>
                    <ul className={styles.navList}>
                        {menuLink.map((link) => (
                            <li key={link.label}>
                                <NavLink href={link.href} prefix={anchorPrefix} className={styles.navItem}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink href="#contact" prefix={anchorPrefix} className={styles.ctaButton}>
                                Devis Gratuit
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Mobile and Tablet Navigation */}
            <aside className={styles.mobileAside}>
                <div className={styles.mobileHeader}>
                    <Link href="/" className={styles.mobileLogoContainer}>
                        <Logo />
                    </Link>
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

            {isMobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)} className={styles.overlay} />}

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className={styles.mobileNav}>
                    <ul className={styles.mobileNavList}>
                        {menuLink.map((link) => (
                            <li key={link.label}>
                                <NavLink
                                    href={link.href}
                                    prefix={anchorPrefix}
                                    className={styles.mobileNavItem}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink
                                href="#contact"
                                prefix={anchorPrefix}
                                className={styles.ctaButton}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Devis Gratuit
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}
