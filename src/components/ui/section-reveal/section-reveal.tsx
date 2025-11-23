"use client";
import { motion, Variants } from "framer-motion";
import { useInViewSection } from "@/hooks/use-in-view-section";

const variants: Record<string, Variants> = {
    fadeUp: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } },
    fadeLeft: { hidden: { opacity: 0, x: -80 }, show: { opacity: 1, x: 0 } },
    fadeRight: { hidden: { opacity: 0, x: 80 }, show: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
};

export default function SectionReveal({
    children,
    variant = "fadeUp",
    duration = 0.4,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    variant?: keyof typeof variants;
    duration?: number;
    delay?: number;
    className?: string;
}) {
    const { ref, isVisible, shouldAnimate } = useInViewSection(0.1);

    return (
        <motion.div
            ref={ref} // TS sait maintenant que c'est un HTMLDivElement
            initial={shouldAnimate ? "hidden" : "show"}
            animate={isVisible ? "show" : "hidden"}
            variants={variants[variant]}
            transition={{
                duration: shouldAnimate ? duration : 0,
                delay: shouldAnimate ? delay : 0,
                ease: "easeOut",
            }}
            className={className}
            style={{ transformPerspective: 1000 }}
        >
            {children}
        </motion.div>
    );
}
