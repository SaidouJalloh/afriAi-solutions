"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useInViewSection } from "@/hooks/use-in-view-section";
import Squares from "@ui/squares/squares";
import HeadsetIcon from "@ui/svgs/headset-fill";
import RocketIcon from "@ui/svgs/rocket";
import SolidGraduationCapIcon from "@ui/svgs/solid-graduation-cap";
import UserGroupIcon from "@ui/svgs/user-group";
import styles from "@components/stats/stats.module.scss";

type statsDataType = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    value: string;
    label: string;
};

const stats: statsDataType[] = [
    { icon: RocketIcon, value: "+120", label: "Solutions déployées" },
    { icon: SolidGraduationCapIcon, value: "327", label: "Étudiants Formés" },
    { icon: HeadsetIcon, value: "+500 h", label: "Support et Suivi" },
    { icon: UserGroupIcon, value: "82", label: "Clients Satisfaits" },
];

function AnimatedNumber({
    value,
    isVisible,
    shouldAnimate,
}: {
    value: string;
    isVisible: boolean;
    shouldAnimate: boolean;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimatedRef = useRef(false);

    const hasPlus = value.startsWith("+");
    const hasHour = value.includes("h");
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.5,
    });

    useEffect(() => {
        if (isVisible && !hasAnimatedRef.current) {
            if (shouldAnimate) {
                motionValue.set(0);
                setTimeout(() => motionValue.set(numericValue), 50);
            } else {
                motionValue.jump(numericValue);
            }
            hasAnimatedRef.current = true;
        }
    }, [isVisible, shouldAnimate, motionValue, numericValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = (hasPlus ? "+" : "") + Math.floor(latest).toString() + (hasHour ? " h" : "");
            }
        });

        return () => unsubscribe();
    }, [springValue, hasPlus, hasHour]);

    return (
        <span ref={ref} className={styles.statsValue}>
            {hasPlus && "+"}0{hasHour && " h"}
        </span>
    );
}

export default function Stats() {
    const { ref, isVisible, shouldAnimate } = useInViewSection(0.2, true);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            aria-labelledby="stats-section"
            className={styles.statsSection}
        >
            <h2 className="sr-only" id="stats-section">
                Nos statistiques
            </h2>

            <ul className={styles.statsList}>
                {stats.map(({ icon: Icon, value, label }, idx) => (
                    <li key={idx} className={styles.statsItem}>
                        <span aria-hidden={true} className={styles.iconWrapper}>
                            <Icon className={styles.iconSize} />
                        </span>

                        <AnimatedNumber value={value} isVisible={isVisible} shouldAnimate={shouldAnimate} />

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
