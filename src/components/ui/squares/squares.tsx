import styles from "@ui/squares/squares.module.scss";

const rows = [1, 2, 3];
const cols = [1, 2, 3];

export default function Squares() {
    return (
        <div className={styles.squaresContainer}>
            {rows.map((row) => (
                <div key={row} className={styles.squareRow}>
                    {cols.map((col) => (
                        <div key={col} className={styles.square}></div>
                    ))}
                </div>
            ))}

            <div className={styles.gradientOverlay}></div>
        </div>
    );
}
