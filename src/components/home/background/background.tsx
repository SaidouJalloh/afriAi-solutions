import Circle from "@ui/circle/cirle";
import Squares from "@ui/squares/squares";
import styles from "./background.module.scss";
export default function Background() {
    return (
        <div className={styles.backgroundContainer}>
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
        </div>
    );
}
