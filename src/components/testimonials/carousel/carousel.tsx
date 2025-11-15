"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import StarIcon from "@/components/ui/svgs/star";
import Image from "next/image";
import styles from "@components/testimonials/carousel/carousel.module.scss";

import "swiper/css";
import "swiper/css/pagination";

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
                    el: ".swiper-pagination-custom",
                    type: "bullets",
                    clickable: true,
                    bulletClass: "w-3 h-3 rounded-full bg-afri-primary/40 inline-block transition-all cursor-pointer",
                    bulletActiveClass: "!bg-afri-primary",
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
                            <div className="flex gap-6">
                                <Image
                                    src={element.image}
                                    alt={element.name}
                                    width={500}
                                    height={500}
                                    className="rounded-full h-14 w-14 object-cover shadow-lg"
                                />

                                <div className="flex flex-col items-start gap-0">
                                    <h3 className="md:text-base text-sm text-afri-primary font-poppins font-bold">
                                        {element.name}
                                    </h3>

                                    <h4 className="text-afri-text-muted md:text-xs text-[0.64rem]">
                                        {element.project}
                                    </h4>

                                    <span className="mt-2 -ml-1 flex">
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

            <div className="swiper-pagination-custom flex justify-center items-center w-auto mx-auto mt-14 gap-2"></div>
        </div>
    );
}
