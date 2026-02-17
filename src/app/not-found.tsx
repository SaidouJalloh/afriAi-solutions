"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const handleClick = () => router.replace("/");
    return (
        <div className="flex flex-col items-center justify-center gap-2 h-screen text-center px-4 mt-[-2em]">
            <h1 className="sm:text-[15em] text-[12em] font-bold text-primary mb-4">404</h1>
            <h2 className="sm:text-[2em] text-2xl font-poppins text-foreground font-semibold mb-2 ">
                Page non trouvée
            </h2>
            <p className="text-foreground sm:text-2xl text-xl mb-6">Désolé, la page que vous cherchez n'existe pas.</p>
            <button
                className="bg-primary xl:text-lg text-primary-foreground font-medium py-2.5 px-6 rounded-md shadow-sm hover:bg-[#1B1464] transition"
                onClick={handleClick}
            >
                Revenir à la page d'accueil
            </button>
        </div>
    );
}
