import styles from "@components/testimonials/testimonials.module.scss";
import Image from "next/image";
import KidStarIcon from "../ui/svgs/star";
import QuoteAltRightIcon from "../ui/svgs/quote-alt-right";
export default function Testimonials() {
    return (
        <section className="bg-[#E9EDF6] w-full py-16">
            <div className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto flex flex-col items-center text-center gap-4">
                {/* title */}
                <div className="flex gap-4 items-center">
                    <span className="inline-block h-1 w-14 bg-afri-primary"></span>
                    <h2 className="lg:text-lg text-sm font-semibold uppercase text-afri-primary;">témoignages</h2>
                    <span className="inline-block h-1 w-14 bg-afri-primary"></span>
                </div>

                {/* description */}
                <p className="font-poppins font-medium lg:text-2xl text-xl text-afri-text-primary leading-snug ">
                    Ils partagent leur expérience avec notre travail
                </p>

                {/* container */}
                <div className="relative overflow-hidden w-full md:mt-16 mt-10">
                    <ul className="w-full h-full relative z-0 flex gap-3">
                        <li className={styles.cardItem}>
                            <article className={styles.cardItemArticle}>
                                {/* User Info */}
                                <div className="flex gap-6">
                                    <Image
                                        src={"/black-man-with-costum.jpg"}
                                        alt="Black man with costum"
                                        width={500}
                                        height={500}
                                        className="rounded-full h-14 w-14 object-cover shadow-lg"
                                    />
                                    <div className="flex flex-col items-start gap-0">
                                        <h3 className="md:text-base text-sm text-afri-primary font-poppins font-bold">
                                            Abou Condé
                                        </h3>
                                        <h4 className="text-afri-text-muted md:text-xs text-[0.64rem]">
                                            Projet Santé Digital
                                        </h4>
                                        <span className="mt-2 -ml-1 flex">
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                        </span>
                                    </div>
                                </div>
                                <p className={styles.quoteBlock}>
                                    La formation m'a permis de comprendre l'impact concret de l'IA et d'acquérir des
                                    compétences directement&nbsp;
                                    <span className={styles.quoteEnd}>
                                        applicables .
                                        <QuoteAltRightIcon className="absolute w-[0.9rem] h-4 -bottom-[0.1rem] right-0 text-afri-primary" />
                                    </span>
                                </p>
                            </article>
                        </li>
                        <li className={styles.cardItem}>
                            <article className={styles.cardItemArticle}>
                                {/* User Info */}
                                <div className="flex gap-6">
                                    <Image
                                        src={"/black-man-with-costum.jpg"}
                                        alt="Black man with costum"
                                        width={500}
                                        height={500}
                                        className="rounded-full h-14 w-14 object-cover shadow-lg"
                                    />
                                    <div className="flex flex-col items-start gap-0">
                                        <h3 className="md:text-base text-sm text-afri-primary font-poppins font-bold">
                                            Abou Condé
                                        </h3>
                                        <h4 className="text-afri-text-muted md:text-xs text-[0.64rem]">
                                            Projet Santé Digital
                                        </h4>
                                        <span className="mt-2 -ml-1 flex">
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                        </span>
                                    </div>
                                </div>
                                <p className={styles.quoteBlock}>
                                    La formation m'a permis de comprendre l'impact concret de l'IA et d'acquérir des
                                    compétences directement
                                    <span className={styles.quoteEnd}>
                                        applicables .
                                        <QuoteAltRightIcon className="absolute w-[0.9rem] h-4 -bottom-[0.1rem] right-0 text-afri-primary" />
                                    </span>
                                </p>
                            </article>
                        </li>
                        <li className={styles.cardItem}>
                            <article className={styles.cardItemArticle}>
                                {/* User Info */}
                                <div className="flex gap-6">
                                    <Image
                                        src={"/black-man-with-costum.jpg"}
                                        alt="Black man with costum"
                                        width={500}
                                        height={500}
                                        className="rounded-full h-14 w-14 object-cover shadow-lg"
                                    />
                                    <div className="flex flex-col items-start gap-0">
                                        <h3 className="md:text-base text-sm text-afri-primary font-poppins font-bold">
                                            Abou Condé
                                        </h3>
                                        <h4 className="text-afri-text-muted md:text-xs text-[0.64rem]">
                                            Projet Santé Digital
                                        </h4>
                                        <span className="mt-2 -ml-1 flex">
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                            <KidStarIcon />
                                        </span>
                                    </div>
                                </div>
                                <p className={styles.quoteBlock}>
                                    La formation m'a permis de comprendre l'impact concret de l'IA et d'acquérir des
                                    compétences directement
                                    <span className={styles.quoteEnd}>
                                        applicables .
                                        <QuoteAltRightIcon className="absolute w-[0.9rem] h-4 -bottom-[0.1rem] right-0 text-afri-primary" />
                                    </span>
                                </p>
                            </article>
                        </li>
                    </ul>
                    {/* dots */}
                    <div className="flex justify-center items-center w-auto mx-auto mt-14 gap-2">
                        <div className="w-3 h-3 rounded-full bg-afri-primary"></div>
                        <div className="w-3 h-3 rounded-full bg-afri-primary/40"></div>
                        <div className="w-3 h-3 rounded-full bg-afri-primary/40"></div>
                        <div className="w-3 h-3 rounded-full bg-afri-primary/40"></div>

                    </div>
                </div>
            </div>
        </section>
    );
}
