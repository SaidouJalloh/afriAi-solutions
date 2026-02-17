"use client";
import Image from "next/image";
import styles from "@components/project/project.module.scss";
import { useState } from "react";
import SectionReveal from "@ui/section-reveal/section-reveal";

type projectsDataType = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
};
const projectsData: projectsDataType[] = [
    {
        id: 0,
        title: "Santé digitale",
        subtitle: "IA pour l’analyse d’images médicales avec précision",
        image: "/black-doctor-looking-at-irm.jpg",
        description:
            "Notre solution d’IA a permis de détecter une anomalie pulmonaire passée inaperçue par les méthodes classiques. En renforçant la précision des diagnostics, elle offre aux médecins un soutien essentiel pour intervenir plus tôt et améliorer les chances de guérison.",
    },
    {
        id: 1,
        title: "Mobilité connectée",
        subtitle: "IA pour la gestion et le suivi automatisé des bagages",
        image: "/man-at-airport.jpg",
        description:
            "Grâce à l’IA, notre système optimise la gestion des bagages en anticipant les retards et en réduisant les pertes. Cette technologie assure un suivi en temps réel et améliore considérablement l’expérience des voyageurs dans les aéroports.",
    },
    {
        id: 2,
        title: "Santé augmentée",
        subtitle: "IA conversationnelle pour l’orientation des patients",
        image: "/black-mother-with-son-at-hospital.jpg",
        description:
            "Nos assistants virtuels analysent les symptômes et orientent les patients vers les bons services médicaux. Cette approche réduit les délais d’attente et améliore l’accès à des soins adaptés et personnalisés.",
    },
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section aria-labelledby="projects-section" id="projects" className={styles.section}>
            <SectionReveal variant="fadeLeft">
                <h2 id="projects-section" className={styles.title}>
                    Projets selectionés
                </h2>
            </SectionReveal>
            <SectionReveal variant="fadeLeft" delay={0.1}>
                <p className={styles.subtitle}>
                    Nous transformons les défis d’aujourd’hui en <br className="sm:block hidden" /> un
                    <span className="text-primary"> avenir plus inclusif</span>
                </p>
            </SectionReveal>

            <ul className={styles.list}>
                {projectsData.map((project, index) => (
                    <li
                        key={project.id}
                        className={styles.item}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <SectionReveal variant="scale" delay={index * 0.12}>
                            <article className={styles.article}>
                                {/* image */}
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.image}
                                    width={400}
                                    height={400}
                                />

                                {/* overlay */}
                                <div className={styles.bgOverlayGradient}></div>

                                {/* content */}
                                <div
                                    className={`${styles.content} ${
                                        hoveredIndex === index ? "-translate-y-[24rem]" : "-translate-y-0"
                                    }`}
                                >
                                    <h3 className={styles.titleProject}>{project.title}</h3>
                                    <p className={styles.subtitleProject}>{project.subtitle}</p>
                                </div>

                                {/* hover description */}
                                <div
                                    className={`${styles.bgHoverGradient} ${
                                        hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                                    }`}
                                >
                                    <p className={styles.hoverText}>{project.description}</p>
                                </div>
                            </article>
                            {/* rectangle bottom */}
                            <span className={styles.rectangle}></span>
                        </SectionReveal>
                    </li>
                ))}
            </ul>
        </section>
    );
}
