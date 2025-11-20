import Squares from "../ui/squares/squares";
import HeadsetIcon from "../ui/svgs/headset-fill";
import RocketIcon from "../ui/svgs/rocket";
import SolidGraduationCapIcon from "../ui/svgs/solid-graduation-cap";
import UserGroupIcon from "../ui/svgs/user-group";
import styles from "@components/stats/stats.module.scss";

type statsDataType = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    value: string;
    label: string;
};
const stats: statsDataType[] = [
    {
        icon: RocketIcon,
        value: "+120",
        label: "Solutions déployées",
    },
    {
        icon: SolidGraduationCapIcon,
        value: "327",
        label: "Étudiants Formés",
    },
    {
        icon: HeadsetIcon,
        value: "+500 h",
        label: "Support et Suivi",
    },
    {
        icon: UserGroupIcon,
        value: "82",
        label: "Clients Satisfaits",
    },
];

export default function Stats() {
    return (
        <section aria-labelledby="stats-section" className={styles.statsSection}>
            <h2 className="hidden" id="stats-section">
                Nos statistiques
            </h2>

            <ul className={styles.statsList}>
                {stats.map(({ icon: Icon, value, label }, idx) => (
                    <li key={idx} className={styles.statsItem}>
                        <span aria-hidden={true} className={styles.iconWrapper}>
                            <Icon className={styles.iconSize} />
                        </span>

                        <span className={styles.statsValue}>{value}</span>
                        <h3 className={styles.statsLabel}>{label}</h3>
                    </li>
                ))}
            </ul>

            <div aria-hidden={true} className={styles.decorTop}>
                <Squares />
            </div>

            <div aria-hidden={true} className={styles.decorBottom}>
                <Squares />
            </div>
        </section>
    );
}
