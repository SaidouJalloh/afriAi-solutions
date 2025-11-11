import Image from "next/image";
import AfricaIcon from "../ui/svgs/africa";
import LightBulbIcon from "../ui/svgs/light-bulb";
import QuoteAltRightIcon from "../ui/svgs/quote-alt-right";
import HeadsetIcon from "../ui/svgs/headset-fill";

export default function About() {
    return (
        <section aria-labelledby="about-section" className="w-[80%] mx-auto mt-80 mb-4">
            {/* content */}
            <div className="w-full flex justify-between gap-10">
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
                        <div className="h-28 w-[16.3rem] shadow-sm bg-afri-primary rounded-b-[4em] rounded-tl-[4em] p-5 rotate-180 relative">
                            <span className="h-20 w-20 bg-white shadow-sm rounded-full absolute right-6 top-1/2 transform -translate-y-1/2"></span>
                        </div>
                    </div>

                    {/* image right */}
                    <div className="flex flex-col gap-4">
                        {/* image circle */}
                        <div className="p-2 border-2 border-afri-primary border-dotted rounded-full shadow-sm">
                            <div className="w-[14.3rem] h-[14.3rem] rounded-full overflow-hidden relative shadow-sm">
                                <Image
                                    src={"/people-talking-together.jpg"}
                                    className="object-cover w-full h-full"
                                    height={300}
                                    width={400}
                                    alt="Équipe de professionnels africains en discussion"
                                />
                                <span className="absolute bg-black/10 z-10 w-full h-full top-0 left-0 bottom-0 right-0"></span>
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
                <div className="flex-1 mt-5">
                    <h2 id="about-section" className="text-xl font-semibold uppercase text-afri-primary">
                        À propos
                    </h2>
                    <p className="font-poppins font-medium text-2xl text-afri-text-primary leading-snug mt-2">
                        Une nouvelle ère d’IA africaine, <span className="text-afri-primary">éthique</span> et
                        <span className="text-afri-primary"> transformative</span>
                    </p>
                    <p className="text-afri-text-muted text-base mt-4 leading-relaxed">
                        <b>AfriAI Solutions</b> est une société panafricaine spécialisée en intelligence artificielle.
                        Fondée par des chercheurs africains, elle forme et accompagne les talents tout en concevant des
                        applications innovantes avec une approche éthique et responsable
                    </p>
                    <div className="mt-10 flex gap-2">
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
                                        <h3 className="text-afri-text-primary font-medium text-xl">
                                            Perspective africaine
                                        </h3>
                                        <p className="text-base text-afri-text-muted">
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
                                        <h3 className="text-afri-text-primary font-medium text-xl">
                                            Innovation responsable{" "}
                                        </h3>
                                        <p className="text-base text-afri-text-muted">
                                            nous concevons des solutions humaines et à fort impact{" "}
                                        </p>
                                    </div>
                                </article>
                            </li>
                        </ul>
                        <p className="bg-afri-secondary/5 py-5 px-3 rounded-md text-afri-text-muted text-base w-[45%] font-semibold leading-relaxed relative shadow-sm">
                            L’intelligence artificielle peut transformer l’Afrique, si elle est conçue avec elle, par
                            ses talents et pour son avenir
                            <QuoteAltRightIcon className="text-afri-secondary absolute -bottom-4 right-2" />
                        </p>
                    </div>
                    <div className="flex gap-14 mt-10 items-center">
                        <button
                            type="button"
                            aria-label="Demander un devis gratuitement"
                            className="bg-afri-primary text-white py-3 px-8 rounded-md shadow-sm lg:text-lg text-base hover:bg-afri-primary-dark transition"
                        >
                            Devis Gratuit
                        </button>
                        <div className="flex gap-3 items-center">
                            <span className="min-h-[3rem] min-w-[3rem] bg-afri-secondary/5 text-afri-secondary rounded-full flex items-center justify-center shadow-sm">
                                <HeadsetIcon className="w-6 h-6" />
                            </span>
                            <address className="not-italic">
                                <h4 className="text-afri-text-primary font-medium text-base">Téléphone</h4>
                                <p className="font-semibold text-base text-afri-secondary mt-1">+221 33 123 45 67</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
