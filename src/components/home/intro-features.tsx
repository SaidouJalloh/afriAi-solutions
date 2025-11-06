import BrainIcon from "../ui/svgs/brain";
import CodeComputerIcon from "../ui/svgs/code-computer";
import GraduationCapIcon from "../ui/svgs/graduation-cap";

export default function IntroFeatures() {
    return (
        <ul className="w-[80%] max-w-[1800px] mx-auto flex justify-between items-center absolute left-1/2 transform -translate-x-1/2 z-20 top-[46rem]">
            <li className="bg-white shadow-white-card rounded-tl-md rounded-bl-md overflow-hidden ">
                <article className="bg-black/[0.01] flex-1 flex flex-col items-center justify-center gap-4 py-8 px-4">
                    <span className="bg-afri-primary/[0.07] text-afri-primary rounded-full p-5">
                        <BrainIcon />
                    </span>
                    <h3 className="text-xl font-semibold font-poppins">Solutions IA adaptées</h3>
                    <p className="text-afri-text-muted text-base text-center">
                        Nous propulsons vos performances grâce à l’IA en automatisant vos tâches, optimisant vos
                        processus et accélérant votre croissance
                    </p>
                </article>
            </li>
            <li className="bg-white shadow-white-card rounded-md overflow-hidden  relative z-10">
                <article className="flex-1  flex flex-col items-center justify-center gap-4 py-14 px-6 ">
                    <span className="bg-afri-primary/[0.07] text-afri-primary rounded-full p-5">
                        <CodeComputerIcon />
                    </span>
                    <h3 className="text-xl font-semibold font-poppins">Développement logiciel</h3>
                    <p className="text-afri-text-muted text-base text-center">
                        Votre travail mérite d’être valorisé. Nous créons des sites et applications sur mesure pour
                        renforcer votre présence en ligne et accroître votre impact
                    </p>
                </article>
            </li>
            <li className="bg-white shadow-white-card rounded-tr-md rounded-br-md overflow-hidden ">
                <article className="bg-black/[0.01] flex-1 flex flex-col items-center justify-center gap-4 py-8 px-4">
                    <span className="bg-afri-primary/[0.07] text-afri-primary rounded-full p-5">
                        <GraduationCapIcon />
                    </span>
                    <h3 className="text-xl font-semibold font-poppins">Renforcement des talents</h3>
                    <p className="text-afri-text-muted text-base text-center">
                        Former, accompagner et valoriser vos compétences en IA et gestion de projet pour renforcer vos
                        capacités et bâtir une expertise
                    </p>
                </article>
            </li>
        </ul>
    );
}
