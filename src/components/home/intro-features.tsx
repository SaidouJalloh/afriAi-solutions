import BrainIcon from "../ui/svgs/brain";
import CodeComputerIcon from "../ui/svgs/code-computer";
import GraduationCapIcon from "../ui/svgs/graduation-cap";

export default function IntroFeatures() {
    return (
        <ul className="xl:w-[80%] w-[95%] max-w-[112.5rem] mx-auto flex md:flex-row md:gap-0 gap-4 flex-col justify-between items-center absolute left-1/2 transform -translate-x-1/2 z-10 md:top-[46rem] top-[48rem]">
            <li className="bg-white shadow-white-card rounded-tl-md rounded-bl-md md:rounded-tr-none rounded-tr-md md:rounded-br-none rounded-br-md overflow-hidden ">
                <article className="md:bg-black/[0.01] flex-1 flex flex-col items-center justify-center gap-4 md:py-8 py-4 lg:px-4 px-2">
                    <span className="bg-afri-primary/[0.07] text-afri-primary rounded-full lg:p-5 p-3">
                        <BrainIcon className="w-6 h-6" />
                    </span>
                    <h3 className="lg:text-xl text-base font-semibold font-poppins">Solutions IA adaptées</h3>
                    <p className="text-afri-text-muted lg:text-base text-sm text-center">
                        Nous propulsons vos performances grâce à l’IA en automatisant vos tâches, optimisant vos
                        processus et accélérant votre croissance
                    </p>
                </article>
            </li>
            <li className="bg-white shadow-white-card rounded-md overflow-hidden  relative z-10">
                <article className="flex-1 flex flex-col items-center justify-center gap-4 md:py-14 py-4 lg:px-6 px-3">
                    <span className="bg-afri-primary/[0.07] text-afri-primary rounded-full lg:p-5 p-3">
                        <CodeComputerIcon className="w-5 h-5" />
                    </span>
                    <h3 className="lg:text-xl text-base font-semibold font-poppins">Développement logiciel</h3>
                    <p className="text-afri-text-muted lg:text-base text-sm text-center">
                        Votre travail mérite d’être valorisé. Nous créons des sites et applications sur mesure pour
                        renforcer votre présence en ligne et accroître votre impact
                    </p>
                </article>
            </li>
            <li className="bg-white shadow-white-card rounded-tr-md rounded-br-md overflow-hidden md:rounded-tl-none md:rounded-bl-none rounded-tl-md rounded-bl-md ">
                <article className="md:bg-black/[0.01] flex-1 flex flex-col items-center justify-center gap-4 md:py-8 py-4 lg:px-4 px-2">
                    <span className="bg-afri-primary/[0.07] text-afri-primary rounded-full lg:p-5 p-3">
                        <GraduationCapIcon className="w-6 h-6" />
                    </span>
                    <h3 className="lg:text-xl text-base font-semibold font-poppins">Renforcement des talents</h3>
                    <p className="text-afri-text-muted lg:text-base text-sm text-center">
                        Former, accompagner et valoriser vos compétences en IA et gestion de projet pour renforcer vos
                        capacités et bâtir une expertise
                    </p>
                </article>
            </li>
        </ul>
    );
}
