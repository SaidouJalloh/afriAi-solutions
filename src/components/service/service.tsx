import BotIcon from "../ui/svgs/bot";
import ChatCodeIcon from "../ui/svgs/chat-code";
import GlobaleIcon from "../ui/svgs/globale";
import TargetIcon from "../ui/svgs/target";

export default function Service() {
    return (
        <section className="bg-[#E9EDF6] w-full  absolute z-10 left-1/2 transform -translate-x-1/2 xl:top-[110rem] lg:top-[100rem] md:top-[135rem] top-[165rem]">
            <div className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto flex flex-col items-center text-center py-16 gap-4">
                <h2 className="lg:text-lg text-sm font-semibold uppercase text-afri-primary">Nos Services</h2>
                <p className="font-poppins font-medium lg:text-2xl text-xl text-afri-text-primary leading-snug">
                    Pensés pour simplifier, automatiser et faire <span className="text-afri-primary">croître</span>{" "}
                    votre activité
                </p>
                <ul className="flex gap-5 mt-16 mid-xl:flex-nowrap flex-wrap">
                    <li className="flex-1">
                        <article className="w-full mid-xl:min-w-[18rem] md:min-w-[25rem] min-w-[95vw] h-full bg-white px-3 py-7 rounded-lg shadow-sm flex flex-col gap-4 justify-center">
                            <span className="h-[4rem] w-[4rem] text-afri-primary bg-afri-primary/5 rounded-full flex items-center justify-center shadow-sm">
                                <BotIcon className="w-8 h-8" />
                            </span>
                            <h3 className="text-afri-text-primary font-medium lg:text-xl text-base text-start">
                                Intelligence Artificielle
                            </h3>
                            <p className="lg:text-base text-afri-text-muted text-sm text-start">
                                Développement de solutions IA sur mesure : chatbots, vision par ordinateur, NLP,
                                systèmes prédictifs et moteurs de recommandation
                            </p>
                        </article>
                    </li>
                    <li className="flex-1">
                        <article className="w-full mid-xl:min-w-[18rem] md:min-w-[25rem] min-w-[95vw] h-full bg-white px-3 py-7 rounded-lg shadow-sm flex flex-col gap-4 justify-center">
                            <span className="h-[4rem] w-[4rem] text-afri-secondary bg-afri-secondary/5 rounded-full flex items-center justify-center shadow-sm">
                                <ChatCodeIcon className="w-8 h-8" />
                            </span>
                            <h3 className="text-afri-text-primary font-medium lg:text-xl text-base text-start">
                                Développement Digital
                            </h3>
                            <p className="lg:text-base text-afri-text-muted text-sm text-start">
                                Création de solutions logicielles sur mesure : sites web, applications mobiles, design
                                et outils personnalisés pour répondre à vos besoins
                            </p>
                        </article>
                    </li>
                    <li className="flex-1">
                        <article className="w-full mid-xl:min-w-[18rem] md:min-w-[25rem] min-w-[95vw] h-full bg-white px-3 py-7 rounded-lg shadow-sm flex flex-col gap-4 justify-center">
                            <span className="h-[4rem] w-[4rem] text-afri-primary bg-afri-primary/5 rounded-full flex items-center justify-center shadow-sm">
                                <TargetIcon className="w-8 h-8" />
                            </span>
                            <h3 className="text-afri-text-primary font-medium lg:text-xl text-base text-start">
                                Formations & Appui
                            </h3>
                            <p className="lg:text-base text-afri-text-muted text-sm text-start">
                                Programmes pratiques pour former professionnels et étudiants aux outils d’IA, de data
                                science et de gestion de projet, incluant le suivi et l’évaluation
                            </p>
                        </article>
                    </li>
                    <li className="flex-1">
                        <article className="w-full mid-xl:min-w-[18rem] md:min-w-[25rem] min-w-[95vw] h-full bg-white px-3 py-7 rounded-lg shadow-sm flex flex-col gap-4 justify-center">
                            <span className="h-[4rem] w-[4rem] text-afri-secondary bg-afri-secondary/5 rounded-full flex items-center justify-center shadow-sm">
                                <GlobaleIcon className="w-8 h-8" />
                            </span>
                            <h3 className="text-afri-text-primary font-medium lg:text-xl text-base text-start">
                                Conseil & Recherche
                            </h3>
                            <p className="lg:text-base text-afri-text-muted text-sm text-start">
                                Accompagnement complet pour les porteurs de projet, de l’idée initiale à la mise en
                                œuvre digitale, afin d’assurer l’impact et la réussite de vos initiatives
                            </p>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    );
}
