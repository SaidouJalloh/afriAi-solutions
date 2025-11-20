import TeamList from "@components/team/team-list/team-list";
import styles from "@components/team/team-section/team.module.scss";

export default function Team() {
    return (
        <section id="team" className={styles.teamSection}>
            <h2 className={styles.title}>notre équipe</h2>
            <p className={styles.description}>
                Des professionnels passionnés, toujours prêts à trouver la solution la plus juste pour vous
            </p>

            <TeamList />
        </section>
    );
}
