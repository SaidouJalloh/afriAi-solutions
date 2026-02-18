"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSyncExternalStore } from "react";
import Image from "next/image";
import LinkedInIcon from "@icons/linkedin";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@components/team/team-list/team-list.module.scss";
import ChevronLeftIcon from "@/components/ui/svgs/chevron-left";
import ChevronRightIcon from "@/components/ui/svgs/chevron-right";
import SectionReveal from "@/components/ui/section-reveal/section-reveal";

function useIsClient() {
    return useSyncExternalStore(
        () => () => { },
        () => true,
        () => false
    );
}

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
        name: "A. Wahab Diallo",
        role: "Co-fondateur & CEO",
        image: "/wahab.JPG",
        linkedin: "https://www.linkedin.com/in/abdoul-wahab-diallo-b81345168/",
    },
    {
        id: 2,
        name: "L. Mbagdje Dorenan",
        role: "CGO & LeadData Scientist",
        image: "/lauriane.jpg",
        linkedin: "https://www.linkedin.com/in/lauriane-mbagdje-dorenan/",
    },

    {
        id: 3,
        name: "M. Saïdou Diallo",
        role: "Co-fondateur Software & AI Engineer",
        image: "/imam_said.png",
        linkedin: "https://www.linkedin.com/in/mamadou-sa%C3%AFdou-diallo-744920296/",
    },
    {
        id: 4,
        name: "Tony Sarr",
        role: "Co-Lead DataScientist",
        image: "/tony.jpeg",
        linkedin: "https://www.linkedin.com/in/tony-sarre-0b4236129/",
    },
    {
        id: 5,
        name: "Y. Mouhoumed Elmi",
        role: "Co-fondateur & COO",
        image: "/yacin.jpeg",
        linkedin: "https://www.linkedin.com/in/yacin-mouhoumed-elmi-6a157287/",
    },
    {
        id: 6,
        name: "P. Marcelle Elanga",
        role: "Data Scientist – IA & IoT",
        image: "/marcelle.jpg",
        linkedin: "https://www.linkedin.com/in/paule-marcelle-elanga-7a21781a3/",
    },
    {
        id: 7,
        name: "Oumar Kra",
        role: "Co-fondateur & CTO",
        image: "/oumar.jpg",
        linkedin: "https://www.linkedin.com/in/oumar-kra-a4012a128/",
    },
];

export default function TeamList() {
    const isClient = useIsClient();

    if (!isClient) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.skeletonWrapper}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={styles.skeletonCard}>
                            <div className={styles.skeletonImage}></div>
                            <div className={styles.skeletonInfo}>
                                <div className={styles.skeletonText}>
                                    <div className={styles.skeletonName}></div>
                                    <div className={styles.skeletonRole}></div>
                                </div>
                                <div className={styles.skeletonButton}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <SectionReveal className={styles.carouselContainer} variant="fadeUp" delay={0.2}>
            <Swiper
                modules={[Navigation]}
                speed={400}
                loop={false}
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                    nextEl: `.${styles.nextButton}`,
                    prevEl: `.${styles.prevButton}`,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className={styles.carousel}
            >
                {teamMembers.map((member) => (
                    <SwiperSlide key={member.id}>
                        <div className={styles.memberCard}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={500}
                                height={600}
                                className={styles.memberImage}
                            />

                            <div className={styles.memberInfo}>
                                <div className={styles.memberDetails}>
                                    <h3 className={styles.memberName}>{member.name}</h3>
                                    <p className={styles.memberRole}>{member.role}</p>
                                </div>

                                <Link
                                    href={member.linkedin}
                                    target="_blank"
                                    title="Voir le profil LinkedIn"
                                    className={styles.linkedinButton}
                                >
                                    <LinkedInIcon className="md:w-6 w-5 md:h-6 h-5" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Boutons de navigation */}
            <button className={styles.prevButton} aria-label="Précédent">
                <ChevronLeftIcon />
            </button>
            <button className={styles.nextButton} aria-label="Suivant">
                <ChevronRightIcon />
            </button>
        </SectionReveal>
    );
}
