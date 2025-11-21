import SectionReveal from "@/components/ui/section-reveal/section-reveal";
import TeamList from "@components/team/team-list/team-list";
import styles from "@components/team/team-section/team.module.scss";

export default function Team() {
    return (
        <section aria-labelledby="team-section" id="team" className={styles.teamSection}>
            <SectionReveal variant="fadeUp">
                <h2 id="team-section" className={styles.title}>
                    notre équipe
                </h2>
            </SectionReveal>
            <SectionReveal className={styles.description} variant="fadeUp" delay={0.1}>
                <p>Des professionnels passionnés, toujours prêts à trouver la solution la plus juste pour vous</p>
            </SectionReveal>

            <TeamList />
        </section>
    );
}
