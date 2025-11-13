"use client";
import Image from "next/image";
import styles from "./project.module.scss";
import { useState } from "react";

// 🔹 Données des projets (extraites à l’extérieur)
const projectsData = [
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
        <section className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto mt-20 flex flex-col gap-3">
            <h2 className="lg:text-lg text-sm font-semibold uppercase text-afri-primary">Projets selectionés</h2>
            <p className="font-poppins font-medium lg:text-2xl text-xl text-afri-text-primary leading-snug  w-full">
                Nous transformons les défis d’aujourd’hui en <br className="sm:block hidden" /> un
                <span className="text-afri-primary"> avenir plus inclusif</span>
            </p>

            <ul className="mt-10 flex md:flex-nowrap flex-wrap sm:flex-row flex-col justify-center items-center gap-5">
                {projectsData.map((project, index) => (
                    <li
                        key={project.id}
                        className="flex-1 min-w-[15rem] md:max-w-none sm:max-w-[18rem] w-full relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <article className="lg:h-[25rem] sm:h-[20rem]  h-[25rem] relative rounded-lg overflow-hidden shadow-sm">
                            {/* image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full absolute top-0 left-0 z-0"
                                width={400}
                                height={400}
                            />

                            {/* overlay */}
                            <div className={styles.bgOverlayGradient}></div>

                            {/* content */}
                            <div
                                className={`absolute bottom-6 left-0 2xl:px-8 md:px-2 px-4 z-20 text-white flex flex-col gap-2 ${
                                    hoveredIndex === index ? "-translate-y-[24rem]" : "-translate-y-0"
                                } transition-transform duration-500`}
                            >
                                <h3 className="text-white font-medium lg:text-xl text-base text-start">
                                    {project.title}
                                </h3>
                                <p className="lg:text-base text-white/90 text-sm text-start">{project.subtitle}</p>
                            </div>

                            {/* hover description */}
                            <div
                                className={`${styles.bgHoverGradient} ${
                                    hoveredIndex === index ? "translate-y-0" : "translate-y-full"
                                }`}
                            >
                                <p className="lg:text-base text-white/90 text-sm text-start 2xl:px-8 md:px-2 px-4 ">
                                    {project.description}
                                </p>
                            </div>
                        </article>

                        {/* rectangle bottom */}
                        <span className="absolute -bottom-3 right-1/2 transform translate-x-1/2 -z-10 bg-afri-secondary w-[80%] h-6"></span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
