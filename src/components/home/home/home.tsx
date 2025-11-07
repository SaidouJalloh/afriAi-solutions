import Circle from "@ui/circle/cirle";
import Squares from "@ui/squares/squares";
import ImageComponent from "@components/home/image-component/image-component";
import styles from "@components/home/home/home.module.scss";

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.innerContent}>
                    <section className={styles.textSection}>
                        <h2 className={styles.title}>Donnez à votre entreprise la puissance de l’IA</h2>
                        <p className={styles.description}>
                            <span className="font-semibold">AfriAI Solutions</span> simplifie vos tâches grâce à
                            l’intelligence artificielle afin que vous puissiez vous concentrer sur l’essentiel
                        </p>
                        <div>
                            <button className={styles.ctaButton}>Devis Gratuit</button>
                        </div>
                    </section>
                    <ImageComponent />
                </div>
            </div>

            <div className={styles.squaresTopLeft}>
                <Squares />
            </div>

            <span className={styles.circleTop}>
                <Circle />
            </span>

            <span className={styles.circleBottom}>
                <Circle />
            </span>

            <div className={styles.squaresBottomRight}>
                <Squares />
            </div>
        </div>
    );
}
