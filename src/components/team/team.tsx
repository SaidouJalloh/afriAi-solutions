"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import LinkedInIcon from "../ui/svgs/linkedin";
import Link from "next/link";
import styles from "./team.module.scss";

import "swiper/css";
import "swiper/css/navigation";

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
        <section className={styles.teamSection}>
            <h2 className={styles.title}>notre équipe</h2>
            <p className={styles.description}>
                Des professionnels passionnés, toujours prêts à trouver la solution la plus juste pour vous
            </p>

            <div className={styles.carouselContainer}>
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M15 18l-6-6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button className={styles.nextButton} aria-label="Suivant">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M9 18l6-6-6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}
