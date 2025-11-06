import Circle from "../ui/circle/cirle";
import Squares from "../ui/squares/squares";
import ImageComponent from "./image";

export default function Home() {
    return (
        <div className="flex h-screen max-h-[902px] items-center bg-afri-primary relative overflow-hidden">
            <div className="w-[80%] max-w-[1800px] mx-auto z-10 absolute top-32 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-1 mx-auto justify-between items-center gap-10">
                    <section className="flex flex-col gap-8 w-[40%]">
                        <h2 className="text-5xl leading-tight font-semibold text-white">
                            Donnez à votre entreprise la puissance de l’IA
                        </h2>
                        <p className="text-lg text-afri-text-secondary opacity-90">
                            <span className="font-semibold">AfriAI Solutions</span> simplifie vos tâches grâce à
                            l’intelligence artificielle afin que vous puissiez vous concentrer sur l’essentiel
                        </p>
                        <div>
                            <button className="bg-white text-lg text-afri-text-primary font-semibold py-3 px-8 rounded-md shadow-sm hover:bg-gray-200 transition">
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
            <span className="absolute top-1/3 left-1/3 z-10">
                <Circle />
            </span>
            <span className="absolute top-3/4 left-32 z-10">
                <Circle />
            </span>
            <div className="absolute -bottom-5 -right-2 w-max z-0 rotate-180">
                <Squares />
            </div>
        </div>
    );
}
