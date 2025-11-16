"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import LinkedInIcon from "@icons/linkedin";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@components/team/team-list/team-list.module.scss";
import ChevronLeftIcon from "@/components/ui/svgs/chevron-left";
import ChevronRightIcon from "@/components/ui/svgs/chevron-right";

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

export default function TeamList() {
    return (
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
                <ChevronLeftIcon />
            </button>
            <button className={styles.nextButton} aria-label="Suivant">
                <ChevronRightIcon />
            </button>
        </div>
    );
}
