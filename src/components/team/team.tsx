import Image from "next/image";
import LinkedInIcon from "../ui/svgs/linkedin";
import Link from "next/link";

type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
    linkedin: string;
};

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "A. Wahab DIALLO",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
    {
        id: 2,
        name: "A. Wahab DIALLO 2",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
    {
        id: 3,
        name: "A. Wahab DIALLO 3",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
    {
        id: 4,
        name: "A. Wahab DIALLO 4",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
    {
        id: 5,
        name: "A. Wahab DIALLO 5",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
    {
        id: 6,
        name: "A. Wahab DIALLO 6",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
    {
        id: 7,
        name: "A. Wahab DIALLO 7",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
    {
        id: 8,
        name: "A. Wahab DIALLO 8",
        role: "Co-fondateur & CEO",
        image: "/man-with-laptop.jpg",
        linkedin: "/",
    },
];
export default function Team() {
    return (
        <section className="mt-20 xl:w-[80%] w-[95%] max-w-[90rem] mx-auto flex flex-col items-center text-center gap-4">
            <h2 className="lg:text-lg text-sm font-semibold uppercase text-afri-primary">notre équipe</h2>
            <p className="font-poppins font-medium lg:text-2xl text-xl text-afri-text-primary leading-snug md:w-[70%]">
                Des professionnels passionnés, toujours prêts à trouver la solution la plus juste pour vous
            </p>
            <ul className="flex gap-5 mt-16 max-w-[70rem]  flex-wrap justify-center">
                {teamMembers.map((member) => (
                    <li
                        key={member.id}
                        className="relative h-[18.4rem] w-[15rem] shadow-white-card bg-black/10 rounded-md overflow-hidden"
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={500}
                            height={600}
                            className="absolute object-cover top-0 left-0 h-full w-full -z-0"
                        />

                        <div className="absolute top-[70%] left-0 bg-white p-2 w-[90%] rounded-r-full shadow-lg flex justify-between items-center">
                            <div className="text-start">
                                <h3 className="text-sm font-poppins font-medium text-afri-text-primary">
                                    {member.name}
                                </h3>
                                <p className="font-raleway text-afri-text-muted text-xs">{member.role}</p>
                            </div>

                            <Link
                                href={member.linkedin}
                                target="_blank"
                                title="Voir le profil LinkedIn"
                                className="w-14 h-14 bg-afri-primary/5 rounded-full shadow-xl flex justify-center items-center"
                            >
                                <LinkedInIcon />
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
