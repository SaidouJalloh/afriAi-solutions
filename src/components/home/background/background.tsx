import Circle from "@ui/circle/cirle";
import Squares from "@ui/squares/squares";
import styles from "@components/home/background/background.module.scss";
export default function Background() {
    return (
        <div className={styles.backgroundContainer}>
            <div aria-hidden={true} className={styles.squaresTopLeft}>
                <Squares />
            </div>
            <span aria-hidden={true} className={styles.circleTop}>
                <Circle />
            </span>
            <span aria-hidden={true} className={styles.circleBottom}>
                <Circle />
            </span>
            <div aria-hidden={true} className={styles.squaresBottomRight}>
                <Squares />
            </div>
        </div>
    );
}
