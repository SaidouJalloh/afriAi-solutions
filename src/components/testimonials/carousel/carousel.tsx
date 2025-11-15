"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useSyncExternalStore } from "react";
import StarIcon from "@/components/ui/svgs/star";
import Image from "next/image";
import styles from "@components/testimonials/carousel/carousel.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import QuoteAltRightIcon from "@/components/ui/svgs/quote-alt-right";

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
    textQuoteEnd: string;
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Ahmed Condé",
        project: "Projet Santé Digital",
        image: "/black-man-with-costum.jpg",
        rating: 5,
        text: "Grâce à leur modèle d’imagerie IA, nous avons pu détecter des maladies que nos systèmes traditionnels ne repéraient ",
        textQuoteEnd: "pas.",
    },
    {
        id: 2,
        name: "Oumar Dabo",
        project: "Projet Mobilité Connectée",
        image: "/black-man-with-afro-hair.jpg",
        rating: 5,
        text: "Le suivi intelligent des bagages a amélioré notre logistique et rendu l’expérience des passagers plus ",
        textQuoteEnd: "fluide.",
    },
    {
        id: 3,
        name: "Kadija Sow",
        project: "Étudiante",
        image: "/black-woman-blue.jpg",
        rating: 5,
        text: "La formation m’a permis de comprendre l’impact concret de l’IA et d’acquérir des compétences directement ",
        textQuoteEnd: "applicables.",
    },
    {
        id: 4,
        name: "Fatima Diallo",
        project: "Développement Digital",
        image: "/muslim-woman-on-yellow.jpg",
        rating: 5,
        text: "Le site créé répond bien à nos attentes. Design moderne et performances optimales. Notre présence en ligne ",
        textQuoteEnd: "transformée.",
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
                speed={400}
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
                            <p className={styles.quoteBlock}>
                                {element.text}
                                <span className={styles.quoteEnd}>
                                    {element.textQuoteEnd}
                                    <QuoteAltRightIcon className="absolute w-[0.9rem] h-4 -bottom-[0.1rem] right-0 text-afri-primary" />
                                </span>
                            </p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.paginationCustom}></div>
        </div>
    );
}
