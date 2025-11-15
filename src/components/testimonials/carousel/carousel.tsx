"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useSyncExternalStore } from "react";
import StarIcon from "@/components/ui/svgs/star";
import Image from "next/image";
import styles from "@components/testimonials/carousel/carousel.module.scss";

import "swiper/css";
import "swiper/css/pagination";

// Hook pour détecter si on est côté client
function useIsClient() {
    return useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
}

type Testimonial = {
    id: number;
    name: string;
    project: string;
    image: string;
    rating: number;
    text: string;
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Abou Condé 1",
        project: "Projet Santé Digital",
        image: "/black-man-with-costum.jpg",
        rating: 5,
        text: "La formation m'a permis de comprendre l'impact concret de l'IA et d'acquérir des compétences directement applicables.",
    },
    {
        id: 2,
        name: "Abou Condé 2",
        project: "Projet Santé Digital",
        image: "/black-man-with-costum.jpg",
        rating: 5,
        text: "La formation m'a permis de comprendre l'impact concret de l'IA et d'acquérir des compétences directement applicables.",
    },
    {
        id: 3,
        name: "Abou Condé 3",
        project: "Projet Santé Digital",
        image: "/black-man-with-costum.jpg",
        rating: 5,
        text: "La formation m'a permis de comprendre l'impact concret de l'IA et d'acquérir des compétences directement applicables.",
    },
    {
        id: 4,
        name: "Abou Condé 4",
        project: "Projet Santé Digital",
        image: "/black-man-with-costum.jpg",
        rating: 5,
        text: "La formation m'a permis de comprendre l'impact concret de l'IA et d'acquérir des compétences directement applicables.",
    },
];

export default function Carousel() {
    const isClient = useIsClient();

    if (!isClient) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.fallbackContainer}>
                    {testimonials.slice(0, 3).map((element) => (
                        <div key={element.id} className={styles.fallbackCard}>
                            <article className={styles.cardItemArticle}>
                                <div className={styles.profileSection}>
                                    <Image
                                        src={element.image}
                                        alt={element.name}
                                        width={500}
                                        height={500}
                                        className={styles.profileImage}
                                    />
                                    <div className={styles.profileInfo}>
                                        <h3 className={styles.profileName}>{element.name}</h3>
                                        <h4 className={styles.profileProject}>{element.project}</h4>
                                        <span className={styles.ratingContainer}>
                                            {Array.from({ length: element.rating }).map((_, i) => (
                                                <StarIcon key={i} />
                                            ))}
                                        </span>
                                    </div>
                                </div>
                                <p className={styles.quoteBlock}>{element.text}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.carouselContainer}>
            <Swiper
                modules={[Autoplay, Pagination]}
                speed={500}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={32}
                pagination={{
                    el: `.${styles.paginationCustom}`,
                    type: "bullets",
                    clickable: true,
                    bulletClass: styles.paginationBullet,
                    bulletActiveClass: styles.paginationBulletActive,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 32,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }}
                className={styles.carousel}
            >
                {testimonials.map((element) => (
                    <SwiperSlide key={element.id} className={styles.cardItem}>
                        <article className={styles.cardItemArticle}>
                            <div className={styles.profileSection}>
                                <Image
                                    src={element.image}
                                    alt={element.name}
                                    width={500}
                                    height={500}
                                    className={styles.profileImage}
                                />
                                <div className={styles.profileInfo}>
                                    <h3 className={styles.profileName}>{element.name}</h3>
                                    <h4 className={styles.profileProject}>{element.project}</h4>
                                    <span className={styles.ratingContainer}>
                                        {Array.from({ length: element.rating }).map((_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </span>
                                </div>
                            </div>
                            <p className={styles.quoteBlock}>{element.text}</p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.paginationCustom}></div>
        </div>
    );
}
