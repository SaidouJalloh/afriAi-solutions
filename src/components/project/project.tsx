import Image from "next/image";
import styles from "./project.module.scss";

export default function Projects() {
    return (
        <section className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto mt-20 flex flex-col gap-3">
            <h2 className="lg:text-lg text-sm font-semibold uppercase text-afri-primary">Projets selectionés</h2>
            <p className="font-poppins font-medium lg:text-2xl text-xl text-afri-text-primary leading-snug w-[45%]">
                Nous transformons les défis d’aujourd’hui en un
                <span className="text-afri-primary">avenir plus inclusif</span>
            </p>
            <ul className="mt-10 flex gap-10">
                <li className="flex-1 relative">
                    <article className="h-[25rem] relative rounded-lg overflow-hidden shadow-sm">
                        {/* image */}
                        <Image
                            src="/black-doctor-looking-at-irm.jpg"
                            alt="Project 1"
                            className="object-cover w-full h-full absolute top-0 left-0 z-0"
                            width={400}
                            height={400}
                        />
                        {/* overlay */}
                        <div className={styles.bgOverlayGradient} />

                        {/* content */}
                        <div className="absolute bottom-6 left-0 px-3 z-20 text-white flex flex-col gap-2">
                            <h3 className="text-white font-medium lg:text-xl text-base text-start">Santé digitale</h3>
                            <p className="lg:text-base text-white/90 text-sm text-start">
                                Application de l’IA à l’analyse d’images médicales pour un diagnostic précis
                            </p>
                        </div>
                    </article>

                    {/* rectangle bottom  */}
                    <span className="absolute -bottom-3 right-1/2 transform translate-x-1/2 -z-10 bg-afri-secondary w-[80%] h-6"></span>
                </li>
                <li className="flex-1 relative">
                    <article className="h-[25rem] relative rounded-lg overflow-hidden shadow-sm">
                        {/* image */}
                        <Image
                            src="/man-at-airport.jpg"
                            alt="Project 1"
                            className="object-cover w-full h-full absolute top-0 left-0 z-0"
                            width={400}
                            height={400}
                        />
                        {/* overlay */}
                        <div className={styles.bgOverlayGradient} />

                        {/* content */}
                        <div className="absolute bottom-6 left-0 px-3 z-20 text-white flex flex-col gap-2">
                            <h3 className="text-white font-medium lg:text-xl text-base text-start">
                                Mobilité connectée
                            </h3>
                            <p className="lg:text-base text-white/90 text-sm text-start">
                                Optimisation logistique et suivi automatisé des bagages dans les aéroports
                            </p>
                        </div>
                    </article>

                    {/* rectangle bottom  */}
                    <span className="absolute -bottom-3 right-1/2 transform translate-x-1/2 -z-10 bg-afri-secondary w-[80%] h-6"></span>
                </li>
                <li className="flex-1 relative">
                    <article className="h-[25rem] relative rounded-lg overflow-hidden shadow-sm">
                        {/* image */}
                        <Image
                            src="/black-mother-with-son-at-hospital.jpg"
                            alt="Project 1"
                            className="object-cover w-full h-full absolute top-0 left-0 z-0"
                            width={400}
                            height={400}
                        />
                        {/* overlay */}
                        <div className={styles.bgOverlayGradient} />

                        {/* content */}
                        <div className="absolute bottom-6 left-0 px-3 z-20 text-white flex flex-col gap-2">
                            <h3 className="text-white font-medium lg:text-xl text-base text-start">Santé augmentée</h3>
                            <p className="lg:text-base text-white/90 text-sm text-start">
                                IA conversationnelle au service du diagnostic et de l’orientation des patients.
                            </p>
                        </div>
                    </article>

                    {/* rectangle bottom  */}
                    <span className="absolute -bottom-3 right-1/2 transform translate-x-1/2 -z-10 bg-afri-secondary w-[80%] h-6"></span>
                </li>
            </ul>
        </section>
    );
}
