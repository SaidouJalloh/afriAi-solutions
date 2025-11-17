import Link from "next/link";
import CalendarClockIcon from "../ui/svgs/calendar-clock";
import HandCheckIcon from "../ui/svgs/handcheck";

export default function Contact() {
    return (
        <section className="mt-20 bg-[#E9EDF6] w-full ">
            {/* content */}
            <div className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto flex items-center text-center justify-center py-16 gap-20">
                {/* text */}
                <div className="flex flex-col items-start gap-6 max-w-[600px]">
                    <div className="flex flex-col items-start gap-1">
                        <span className="lg:text-sm text-xs text-afri-text-primary font-semibold font-raleway flex">
                            <HandCheckIcon className="w-3 h-3 mx-1" /> Construisons quelques choses ensemble
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
                            <li className="text-afri-primary lg:text-base text-sm flex gap-1 font-medium">
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
                    className="px-7 py-10 bg-white shadow-white-card rounded-lg w-full max-w-[400px] flex flex-col gap-4"
                >
                    <input
                        type="text"
                        className="p-2 rounded shadow-sm w-full border border-afri-primary"
                        placeholder="Nom complet"
                    />
                    <input
                        type="email"
                        className="p-2 rounded shadow-sm w-full border border-afri-primary"
                        placeholder="Email"
                    />
                    <input
                        type="tel"
                        className="p-2 rounded shadow-sm w-full border border-afri-primary"
                        placeholder="Téléphone"
                    />
                    <select name="options" className="p-2 rounded shadow-sm w-full border border-afri-primary">
                        <option value="">Selectionner une option</option>
                        <option value="intelligence Artificielle">Intelligence Artificielle</option>
                        <option value="développement Digital">Développement Digital</option>
                        <option value="Formations">Formations</option>
                        <option value="Conseil & Recherche">Conseil & Recherche</option>
                    </select>
                    <textarea
                        name="message"
                        rows={3}
                        className="p-2 rounded shadow-sm w-full border border-afri-primary"
                        placeholder="Votre message"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-afri-primary text-white py-3 sm:px-8 px-4 rounded-md shadow-sm lg:text-lg text-base hover:bg-[#1B1464] transition"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}
