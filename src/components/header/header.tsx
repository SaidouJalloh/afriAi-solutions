"use client";
import Image from "next/image";
import MenuTablerIcon from "../ui/svgs/menu-tabler";
import { useState } from "react";
import MenuCloseIcon from "../ui/svgs/menu-close";

const LogoComponent = () => (
    <>
        <Image src="/logo.png" alt="AfriAi Solutions Logo" width={50} height={50} quality={75} />
        <h1 className="text-xl font-semibold text-afri-primary">
            Afri<span className="text-afri-text-primary">Ai</span> Solutions
        </h1>
    </>
);
export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    return (
        <>
            {/* Desktop Header */}
            <header className="bg-white shadow-violet-card absolute top-4 xl:w-[80%] w-[95%] py-4 px-4 mx-auto left-1/2 transform -translate-x-1/2 rounded-md lg:flex hidden justify-between items-center z-20">
                <div className="py-2 flex items-center gap-2">
                    <LogoComponent />
                </div>

                <nav>
                    <ul className="flex gap-5 justify-between items-center">
                        <li className="inline-block xl:text-lg text-base text-afri-text-primary font-medium cursor-pointer hover:text-afri-primary transition">
                            Accueil
                        </li>
                        <li className="inline-block xl:text-lg text-base text-afri-text-primary font-medium cursor-pointer hover:text-afri-primary transition">
                            À Propos
                        </li>
                        <li className="inline-block xl:text-lg text-base text-afri-text-primary font-medium cursor-pointer hover:text-afri-primary transition">
                            Services
                        </li>
                        <li className="inline-block xl:text-lg text-base text-afri-text-primary font-medium cursor-pointer hover:text-afri-primary transition">
                            Réalisations
                        </li>
                        <li className="inline-block xl:text-lg text-base text-afri-text-primary font-medium cursor-pointer hover:text-afri-primary transition">
                            Équipe
                        </li>
                        <li className="inline-block xl:text-lg text-base text-afri-text-primary font-medium cursor-pointer hover:text-afri-primary transition">
                            Contact
                        </li>
                        <li>
                            <button className="bg-afri-primary xl:text-lg text-white font-medium py-2.5 px-6 rounded-md shadow-sm hover:bg-[#1B1464] transition">
                                Devis Gratuit
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Mobile and Tablet Navigation */}
            <aside className="lg:hidden bg-inherit absolute z-30 w-full ">
                <div className="p-5 bg-white flex justify-between items-center w-full shadow-md">
                    <div className="flex items-center gap-2">
                        <LogoComponent />
                    </div>
                    <button
                        type="button"
                        className="text-afri-text-primary p-2 rounded-md hover:bg-afri-primary/[0.1] transition shadow-sm border"
                        aria-label="Ouvrir le menu de navigation"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuTablerIcon />}
                    </button>
                </div>
            </aside>
            {/* overlay */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    className="lg:hidden bg-black/40 w-full h-full absolute top-0 left-0 z-20"
                />
            )}

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className="lg:hidden bg-white shadow-md w-full absolute z-40 top-20 left-0 px-4 py-6 flex flex-col gap-7">
                    <ul className="flex flex-col gap-4 justify-between items-start">
                        <li className="text-afri-text-primary font-semibold cursor-pointer hover:text-afri-primary transition">
                            Accueil
                        </li>
                        <li className="text-afri-text-primary font-semibold cursor-pointer hover:text-afri-primary transition">
                            À Propos
                        </li>
                        <li className="text-afri-text-primary font-semibold cursor-pointer hover:text-afri-primary transition">
                            Services
                        </li>
                        <li className="text-afri-text-primary font-semibold cursor-pointer hover:text-afri-primary transition">
                            Réalisations
                        </li>
                        <li className="text-afri-text-primary font-semibold cursor-pointer hover:text-afri-primary transition">
                            Équipe
                        </li>
                        <li className="text-afri-text-primary font-semibold cursor-pointer hover:text-afri-primary transition">
                            Contact
                        </li>
                        <li>
                            <button className="bg-afri-primary xl:text-lg text-white font-medium py-2.5 px-6 rounded-md shadow-sm hover:bg-[#1B1464] transition">
                                Devis Gratuit
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}
