"use client";
import { useEffect, useRef, useState } from "react";

export function useInViewSection(threshold = 0.2, once = true) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const previousY = useRef<number | null>(null);
    const hasAnimated = useRef<boolean>(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const isInitiallyVisible = rect.top >= 0 && rect.top <= window.innerHeight;

        if (isInitiallyVisible) {
            setIsVisible(true);
            setShouldAnimate(false);
            hasAnimated.current = true;
            return;
        }

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const currentY = entry.boundingClientRect.top;

                    if (previousY.current === null) {
                        previousY.current = currentY;
                    }

                    const isScrollingDown = currentY < previousY.current;

                    if (entry.isIntersecting && isScrollingDown && (!once || !hasAnimated.current)) {
                        setIsVisible(true);
                        setShouldAnimate(true);
                        hasAnimated.current = true;
                        if (once) obs.unobserve(entry.target);
                    } else if (entry.isIntersecting && !hasAnimated.current) {
                        setIsVisible(true);
                        setShouldAnimate(false);
                        hasAnimated.current = true;
                        if (once) obs.unobserve(entry.target);
                    }

                    previousY.current = currentY;
                });
            },
            { threshold }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold, once]);

    return { ref, isVisible, shouldAnimate };
}
