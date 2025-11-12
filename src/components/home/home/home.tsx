import Circle from "@ui/circle/cirle";
import Squares from "@ui/squares/squares";
import ImageComponent from "@/components/home/home-image/home-image";
import styles from "@components/home/home/home.module.scss";
import HomeImage from "@/components/home/home-image/home-image";

export default function Home() {
    return (
        <section className={styles.homeContainer} aria-labelledby="home-section">
            <div className={styles.contentWrapper}>
                <div className={styles.innerContent}>
                    <div className={styles.textSection}>
                        <h2 id="home-section" className={styles.title}>
                            Donnez à votre entreprise la puissance de l’IA
                        </h2>
                        <p className={styles.description}>
                            <span className="font-semibold">AfriAI Solutions</span> simplifie vos tâches grâce à
                            l’intelligence artificielle afin que vous puissiez vous concentrer sur l’essentiel
                        </p>
                        <div>
                            <button type="button" aria-label="Demander un devis gratuit" className={styles.ctaButton}>
                                Devis Gratuit
                            </button>
                        </div>
                    </div>
                    <HomeImage />
                </div>
            </div>

            <div aria-label="Carrés en haut à gauche pour l'esthétique" className={styles.squaresTopLeft}>
                <Squares />
            </div>

            <span aria-label="Cercle en haut pour l'esthétique" className={styles.circleTop}>
                <Circle />
            </span>

            <span aria-label="Cercle en bas pour l'esthétique" className={styles.circleBottom}>
                <Circle />
            </span>

            <div aria-label="Carrés en bas à droite pour l'esthétique" className={styles.squaresBottomRight}>
                <Squares />
            </div>
        </section>
    );
}
