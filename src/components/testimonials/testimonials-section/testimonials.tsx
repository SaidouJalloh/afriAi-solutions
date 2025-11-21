import styles from "@components/testimonials/testimonials-section/testimonials.module.scss";
import TestimonialsList from "@components/testimonials/testimonials-list/testimonials-list";
export default function Testimonials() {
    return (
        <section aria-labelledby="testimonials-section" className={styles.testimonialsSection}>
            <div className={styles.testimonialsWrapper}>
                {/* title */}
                <div className={styles.titleContainer}>
                    <span className={styles.titleDecorator}></span>
                    <h2 id="testimonials-section" className={styles.titleText}>
                        témoignages
                    </h2>
                    <span className={styles.titleDecorator}></span>
                </div>

                {/* description */}
                <p className={styles.description}>Ils partagent leur expérience avec notre travail</p>

                <TestimonialsList />
            </div>
        </section>
    );
}
