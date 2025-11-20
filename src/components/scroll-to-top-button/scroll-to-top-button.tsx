"use client";
import { useEffect, useState } from "react";
import ArrowTopIcon from "@icons/arrow-top";
import styles from "@components/scroll-to-top-button/scroll-to-top.module.scss";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button
            onClick={scrollToTop}
            className={`${styles.button} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            }`}
            aria-label="Retour en haut"
        >
            <ArrowTopIcon className={styles.icon} />
        </button>
    );
}
