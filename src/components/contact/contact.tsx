import Link from "next/link";
import CalendarClockIcon from "../ui/svgs/calendar-clock";
import HandCheckIcon from "../ui/svgs/handcheck";
import ChevronBottomIcon from "../ui/svgs/chevron-bottom";

export default function Contact() {
    return (
        <section className="mt-20 bg-[#E9EDF6] w-full">
            {/* content */}
            <div className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto flex lg:flex-row flex-col items-center text-center  py-16 mid-xl:justify-start mid-xl:gap-[12vw] justify-between gap-10">
                {/* text */}
                <div className="flex flex-col items-start gap-6 lg:max-w-[600px] max-w-[750px]">
                    <div className="flex flex-col items-start gap-1">
                        <span className="lg:text-sm text-xs text-afri-text-primary font-semibold font-raleway flex items-center">
                            <HandCheckIcon className="w-3 h-3 mx-1" /> Construisons quelques choses ensemble...
                        </span>
                        <h2 className="font-poppins font-medium lg:text-2xl text-xl text-afri-primary leading-snug">
                            Contact
                        </h2>
                        <p className="lg:text-sm text-xs text-afri-text-muted text-start">
                            Nous sommes à votre écoute pour discuter de vos projets, répondre à vos questions ou vous
                            accompagner dans vos prochaines étapes
                        </p>
                    </div>
                    {/* line */}
                    <hr className="h-[0.15rem] w-full bg-afri-primary/20"></hr>
                    <address className="not-italic">
                        <ul className="flex flex-col items-start gap-4">
                            <li className="text-afri-primary lg:text-base text-sm flex sm:flex-nowrap flex-wrap gap-1 font-medium">
                                <CalendarClockIcon className="w-4" /> Horaires d'ouverture :
                                <span className="text-afri-text-muted">Lundi - Vendredi / 9h30 - 17h30</span>
                            </li>

                            <li className="lg:text-base text-sm flex gap-1 font-medium">
                                Adresse Email :
                                <Link href={""} className="text-afri-text-muted underline">
                                    contact@afriaisolutions.com
                                </Link>
                            </li>
                            <li className="lg:text-base text-sm flex gap-1 font-medium">
                                Numéro de telephone :<span className="text-afri-text-muted">+221 33 123 45 67</span>
                            </li>
                            <li className="lg:text-base text-sm flex gap-1 font-medium">
                                Lieu :<span className="text-afri-text-muted">Dakar, Sénégal</span>
                            </li>
                        </ul>
                    </address>
                </div>

                {/* form */}
                <form
                    action=""
                    className="sm:px-8 px-5 sm:py-12 py-10 bg-white shadow-2xl rounded-2xl w-full lg:max-w-[450px] max-w-[750px] flex flex-col gap-5 border border-gray-100"
                >
                    <div className="space-y-5">
                        <div className="relative">
                            <input
                                type="text"
                                className="md:p-3.5 p-2.5 rounded-lg w-full border-2 border-gray-200 focus:border-afri-primary focus:ring-2 focus:ring-afri-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-gray-400 autofill:bg-white autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                                placeholder="Nom complet"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                className="md:p-3.5 p-2.5 rounded-lg w-full border-2 border-gray-200 focus:border-afri-primary focus:ring-2 focus:ring-afri-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-gray-400 autofill:bg-white autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="tel"
                                className="md:p-3.5 p-2.5 rounded-lg w-full border-2 border-gray-200 focus:border-afri-primary focus:ring-2 focus:ring-afri-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-gray-400 autofill:bg-white autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                                placeholder="Téléphone"
                                required
                            />
                        </div>

                        <div className="relative">
                            <select
                                name="options"
                                className="md:p-3.5 p-2.5 rounded-lg w-full border-2 border-gray-200 focus:border-afri-primary focus:ring-2 focus:ring-afri-primary/20 outline-none transition-all duration-300 text-sm text-gray-700 bg-white cursor-pointer appearance-none [&:invalid]:text-gray-400"
                                required
                                defaultValue={""}
                            >
                                <option disabled hidden value="" className="text-gray-400">
                                    Sélectionner une option
                                </option>
                                <option value="intelligence Artificielle">Intelligence Artificielle</option>
                                <option value="développement Digital">Développement Digital</option>
                                <option value="Formations">Formations</option>
                                <option value="Conseil & Recherche">Conseil & Recherche</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                <ChevronBottomIcon />
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                rows={4}
                                className="md:p-3.5 p-2.5 rounded-lg w-full border-2 border-gray-200 focus:border-afri-primary focus:ring-2 focus:ring-afri-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-gray-400 resize-none"
                                placeholder="Votre message"
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-afri-primary to-[#1B1464] text-white py-3.5 px-8 rounded-lg shadow-lg lg:text-base text-sm font-medium hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2"
                    >
                        Envoyer le message
                    </button>
                </form>
            </div>
        </section>
    );
}
