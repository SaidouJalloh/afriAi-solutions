import dynamic from "next/dynamic";
import styles from "@components/testimonials/testimonials-section/testimonials.module.scss";
import SectionReveal from "@/components/ui/section-reveal/section-reveal";

const TestimonialsList = dynamic(() => import("@components/testimonials/testimonials-list/testimonials-list"));
export default function Testimonials() {
    return (
        <section aria-labelledby="testimonials-section" className={styles.testimonialsSection}>
            <div className={styles.testimonialsWrapper}>
                {/* title */}{" "}
                <SectionReveal variant="fadeUp">
                    <div className={styles.titleContainer}>
                        <span className={styles.titleDecorator}></span>

                        <h2 id="testimonials-section" className={styles.titleText}>
                            témoignages
                        </h2>
                        <span className={styles.titleDecorator}></span>
                    </div>
                </SectionReveal>
                {/* description */}
                <SectionReveal variant="fadeUp" delay={0.1}>
                    <p className={styles.description}>Ils partagent leur expérience avec notre travail</p>
                </SectionReveal>
                <TestimonialsList />
            </div>
        </section>
    );
}
