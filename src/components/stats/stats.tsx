import Squares from "../ui/squares/squares";
import HeadsetIcon from "../ui/svgs/headset-fill";
import RocketIcon from "../ui/svgs/rocket";
import SolidGraduationCapIcon from "../ui/svgs/solid-graduation-cap";
import UserGroupIcon from "../ui/svgs/user-group";

export default function Stats() {
    return (
        <section className="mt-20 w-full relative sm:py-20 py-14 bg-afri-primary overflow-hidden">
            <h2 className="hidden">Nos statistiques</h2>
            <ul className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto flex items-start justify-between text-center gap-4 relative z-30">
                <li className="flex-1 flex flex-col items-center justify-center lg:gap-8 gap-5 text-center">
                    <span className="lg:w-28 sm:w-20 w-16 lg:h-28 sm:h-20 h-16 rounded-full shadow-sm text-afri-primary bg-white flex justify-center items-center">
                        <RocketIcon className="lg:w-14 sm:w-10 w-8 lg:h-14 sm:h-10 h-8" />
                    </span>
                    <span className="font-poppins text-white lg:text-4xl sm:text-2xl text-lg font-medium">+120</span>
                    <p className="font-poppins text-white lg:lg:text-2xl sm:text-base text-sm">Solutions déployées</p>
                </li>
                <li className="flex-1 flex flex-col items-center justify-center lg:gap-8 gap-5 text-center">
                    <span className="lg:w-28 sm:w-20 w-16 lg:h-28 sm:h-20 h-16 rounded-full shadow-sm text-afri-primary bg-white flex justify-center items-center">
                        <SolidGraduationCapIcon className="lg:w-14 sm:w-10 w-8 lg:h-14 sm:h-10 h-8" />
                    </span>
                    <span className="font-poppins text-white lg:text-4xl sm:text-2xl text-lg font-medium">327</span>
                    <p className="font-poppins text-white lg:text-2xl sm:text-base text-sm">Étudiants Formés</p>
                </li>
                <li className="flex-1 flex flex-col items-center justify-center lg:gap-8 gap-5 text-center">
                    <span className="lg:w-28 sm:w-20 w-16 lg:h-28 sm:h-20 h-16 rounded-full shadow-sm text-afri-primary bg-white flex justify-center items-center">
                        <HeadsetIcon className="lg:w-14 sm:w-10 w-8 lg:h-14 sm:h-10 h-8" />
                    </span>
                    <span className="font-poppins text-white lg:text-4xl sm:text-2xl text-lg font-medium">+500 h</span>
                    <p className="font-poppins text-white lg:text-2xl sm:text-base text-sm">Support et Suivi</p>
                </li>
                <li className="flex-1 flex flex-col items-center justify-center lg:gap-8 gap-5 text-center">
                    <span className="lg:w-28 sm:w-20 w-16 lg:h-28 sm:h-20 h-16 rounded-full shadow-sm text-afri-primary bg-white flex justify-center items-center">
                        <UserGroupIcon className="lg:w-14 sm:w-10 w-8 lg:h-14 sm:h-10 h-8" />
                    </span>
                    <span className="font-poppins text-white lg:text-4xl sm:text-2xl text-lg font-medium">82</span>
                    <p className="font-poppins text-white lg:text-2xl sm:text-base text-sm">Clients Satisfaits</p>
                </li>
            </ul>
            <div
                aria-label="Carrés en haut à gauche pour l'esthétique"
                className={"absolute inset-0 -top-5 -left-2 w-max z-0"}
            >
                <Squares />
            </div>
            <div
                aria-label="Carrés en bas à droite pour l'esthétique"
                className={"absolute bottom-0 -right-0 w-max z-0 rotate-180"}
            >
                <Squares />
            </div>
        </section>
    );
}
