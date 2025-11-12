import Image from "next/image";
import AfricaIcon from "../ui/svgs/africa";
import LightBulbIcon from "../ui/svgs/light-bulb";
import QuoteAltRightIcon from "../ui/svgs/quote-alt-right";
import HeadsetIcon from "../ui/svgs/headset-fill";
import UserGroupIcon from "../ui/svgs/user-group";
import CercleDashedIcon from "../ui/svgs/cercle-dashed";

export default function About() {
    return (
        <section
            aria-labelledby="about-section"
            className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto absolute z-10 left-1/2 transform -translate-x-1/2 xl:top-[70rem] lg:top-[66rem] md:top-[67rem] top-[90rem]"
        >
            {/* content */}
            <div className="w-full flex justify-between items-center lg:flex-row flex-col gap-10">
                {/* images container */}
                <div className="flex gap-6">
                    {/* images left */}
                    <div className="flex flex-col gap-6 w-1/2">
                        <div className="h-[20rem] w-[15.3rem] relative overflow-hidden rounded-s-[3.5em] rounded-tr-[3.5em] shadow-sm">
                            <Image
                                src={"/man-with-laptop.jpg"}
                                className="object-cover"
                                height={300}
                                width={400}
                                alt="Chercheur africain travaillant sur un ordinateur portable"
                            />
                            <span className="absolute bg-black/10 z-10 w-full h-full top-0 left-0 bottom-0 right-0"></span>
                        </div>
                        <div className="h-24 w-[15.3rem] shadow-white-card mid-xl:bg-afri-primary lg:bg-white bg-afri-primary  rounded-r-[3em] rounded-tl-[3em] p-5 flex gap-3 justify-between items-center">
                            <span
                                className="h-16 min-w-[4rem]  mid-xl:bg-white lg:bg-afri-primary/5 bg-white shadow-sm rounded-full flex items-center justify-center"
                                aria-label="Icône de groupe d'utilisateurs"
                            >
                                <UserGroupIcon className="w-10 h-10 text-afri-primary m-auto" />
                            </span>
                            <p className="mid-xl:text-white lg:text-afri-primary text-base  text-white font-semibold font-poppins">
                                100% de clients satisfaits
                            </p>
                        </div>
                    </div>

                    {/* image right */}
                    <div className="mid-xl:flex lg:hidden sm:flex hidden flex-col lg:gap-4 gap-8">
                        {/* image circle */}
                        <div className="relative p-2 w-[14.3rem] box-border h-[14.3rem] rounded-full">
                            <CercleDashedIcon className="absolute w-full h-full top-0 bottom-0 right-0 left-0 z-10" />
                            <div className="w-full h-full  rounded-full overflow-hidden relative shadow-sm flex items-center justify-center">
                                <Image
                                    src={"/people-talking-together.jpg"}
                                    className="object-cover w-[95%] h-[95%] rounded-full"
                                    height={300}
                                    width={400}
                                    alt="Équipe de professionnels africains en discussion"
                                />
                                <span className="absolute bg-black/10 z-10 w-[95%] h-[95%] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </div>
                        </div>
                        <div className="w-[15.3rem] h-[18rem] overflow-hidden relative shadow-sm rounded-tr-[3.5em] rounded-br-[3.5em] rounded-bl-[3.5em]">
                            <Image
                                src={"/woman-with-laptop-at-work.jpg"}
                                className="object-cover w-full h-full"
                                height={300}
                                width={400}
                                alt="Femme africaine utilisant une tablette au bureau"
                            />
                            <span className="absolute bg-black/10 z-10 w-full h-full top-0 left-0 bottom-0 right-0"></span>
                        </div>
                    </div>
                </div>

                {/* text container */}
                <div className="flex-1 lg:max-w-none max-w-[750px]">
                    <h2 id="about-section" className="lg:text-lg text-sm font-semibold uppercase text-afri-primary">
                        À propos
                    </h2>
                    <p className="font-poppins font-medium lg:text-2xl text-xl text-afri-text-primary leading-snug lg:mt-2 mt-1">
                        Une nouvelle ère d’IA africaine, <span className="text-afri-primary">éthique</span> et
                        <span className="text-afri-primary"> transformative</span>
                    </p>
                    <p className="text-afri-text-muted lg:text-base text-sm mt-4 leading-relaxed">
                        <b>AfriAI Solutions</b> est une société panafricaine spécialisée en intelligence artificielle.
                        Fondée par des chercheurs africains, elle forme et accompagne les talents tout en concevant des
                        applications innovantes avec une approche éthique et responsable
                    </p>
                    <div className="mt-10 flex sm:gap-2 gap-8 justify-between sm:flex-nowrap flex-wrap">
                        <ul className="flex flex-col gap-8">
                            <li>
                                <article className="flex items-center gap-6">
                                    {/* icon */}
                                    <span
                                        aria-label="Icône de l'Afrique"
                                        className="min-h-[4rem] min-w-[4rem]  text-afri-primary bg-afri-primary/5 rounded-full flex items-center justify-center shadow-sm"
                                    >
                                        <AfricaIcon className="w-7 h-8 " />
                                    </span>
                                    {/* text */}
                                    <div>
                                        <h3 className="text-afri-text-primary font-medium lg:text-xl text-base">
                                            Perspective africaine
                                        </h3>
                                        <p className="lg:text-base text-afri-text-muted text-sm">
                                            Nous plaçons le continent au cœur de la révolution numérique
                                        </p>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article className="flex items-center gap-6">
                                    {/* icon */}
                                    <span
                                        aria-label="Icône d'ampoule"
                                        className="min-h-[4rem] min-w-[4rem] text-afri-primary bg-afri-primary/5 rounded-full flex items-center justify-center shadow-sm"
                                    >
                                        <LightBulbIcon className="w-8 h-8" />
                                    </span>
                                    {/* text */}
                                    <div>
                                        <h3 className="text-afri-text-primary font-medium lg:text-xl text-base">
                                            Innovation responsable{" "}
                                        </h3>
                                        <p className="lg:text-base text-afri-text-muted text-sm">
                                            nous concevons des solutions humaines et à fort impact{" "}
                                        </p>
                                    </div>
                                </article>
                            </li>
                        </ul>
                        <p className="bg-afri-secondary/5 py-5 px-3 rounded-md text-afri-text-muted lg:text-base text-sm sm:w-[45%] min-w-[185px] lg:max-w-[230px] sm:max-w-[215px] w-full font-semibold leading-relaxed relative shadow-sm">
                            L’intelligence artificielle peut transformer l’Afrique, si elle est conçue avec elle, par
                            ses talents et pour son avenir
                            <QuoteAltRightIcon className="text-afri-secondary absolute -bottom-4 right-2" />
                        </p>
                    </div>
                    <div className="flex md:gap-14 gap-3 mt-10 items-center">
                        <button
                            type="button"
                            aria-label="Demander un devis gratuitement"
                            className="bg-afri-primary text-white py-3 sm:px-8 px-4 rounded-md shadow-sm lg:text-lg text-base hover:bg-afri-primary-dark transition"
                        >
                            Devis Gratuit
                        </button>
                        <div className="flex gap-3 items-center">
                            <span className="min-h-[3rem] min-w-[3rem] bg-afri-secondary/5 text-afri-secondary rounded-full flex items-center justify-center shadow-sm">
                                <HeadsetIcon className="w-6 h-6" />
                            </span>
                            <address className="not-italic">
                                <h4 className="text-afri-text-primary font-medium md:text-base text-sm">Téléphone</h4>
                                <p className="font-semibold md:text-base text-sm text-afri-secondary mt-1">
                                    +221 33 123 45 67
                                </p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
