import styles from "@components/testimonials/testimonials.module.scss";

import Carousel from "./carousel/carousel";
export default function Testimonials() {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.testimonialsWrapper}>
                {/* title */}
                <div className={styles.titleContainer}>
                    <span className={styles.titleDecorator}></span>
                    <h2 className={styles.titleText}>témoignages</h2>
                    <span className={styles.titleDecorator}></span>
                </div>

                {/* description */}
                <p className={styles.description}>Ils partagent leur expérience avec notre travail</p>

                <Carousel />
            </div>
        </section>
    );
}
