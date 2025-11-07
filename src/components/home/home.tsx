import Circle from "../ui/circle/cirle";
import Squares from "../ui/squares/squares";
import ImageComponent from "./image";

export default function Home() {
    return (
        <div className="flex md:h-screen md:max-h-[56rem] h-[50rem] items-center bg-afri-primary relative overflow-hidden">
            <div className="xl:w-[80%] w-[95%] max-w-[112.5rem] mx-auto z-10 absolute lg:top-32 top-40 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-1 mx-auto lg:flex-row flex-col md:justify-between justify-end items-center xl:gap-10">
                    <section className="flex flex-col lg:items-start items-center lg:gap-8 gap-4 xl:w-[51%] lg:w-[55%] md:w-full w-[24rem]">
                        <h2 className="lg:text-5xl text-3xl lg:text-start text-center leading-tight font-semibold text-white">
                            Donnez à votre entreprise la puissance de l’IA
                        </h2>
                        <p className="lg:text-lg text-base lg:text-start text-center text-afri-text-secondary opacity-90 w-[90%]">
                            <span className="font-semibold">AfriAI Solutions</span> simplifie vos tâches grâce à
                            l’intelligence artificielle afin que vous puissiez vous concentrer sur l’essentiel
                        </p>
                        <div>
                            <button className="bg-white lg:text-lg text-base text-afri-text-primary font-semibold py-3 px-8 rounded-md shadow-sm hover:bg-gray-200 transition">
                                Devis Gratuit
                            </button>
                        </div>
                    </section>
                    <ImageComponent />
                </div>
            </div>

            <div className="absolute inset-0 -top-5 -left-2 w-max z-0">
                <Squares />
            </div>
            <span className="absolute lg:top-1/3 top-28 lg:left-1/3 left-[80%] z-10">
                <Circle />
            </span>
            <span className="absolute lg:top-3/4 top-64 left-32 z-10">
                <Circle />
            </span>
            <div className="absolute -bottom-5 -right-2 w-max z-0 rotate-180">
                <Squares />
            </div>
        </div>
    );
}
