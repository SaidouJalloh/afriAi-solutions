"use client";
import { useRouter } from "next/navigation";
import styles from "@components/not-found/not-found.module.scss";

export default function NotFound() {
    const router = useRouter();
    const handleClick = () => router.replace("/");

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.code}>404</h1>

            <h2 className={styles.title}>Page non trouvée</h2>

            <p className={styles.description}>Désolé, la page que vous cherchez n'existe pas.</p>

            <button className={styles.button} onClick={handleClick}>
                Revenir à la page d'accueil
            </button>
        </div>
    );
}
