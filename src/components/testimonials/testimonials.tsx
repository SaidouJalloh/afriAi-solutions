import styles from "@components/testimonials/testimonials.module.scss";

import Carousel from "./carousel/carousel";
export default function Testimonials() {
    return (
        <section className="bg-[#E9EDF6] w-full py-16">
            <div className="xl:w-[80%] w-[95%] max-w-[90rem] mx-auto flex flex-col items-center text-center gap-4">
                {/* title */}
                <div className="flex gap-4 items-center">
                    <span className="inline-block h-1 w-14 bg-afri-primary"></span>
                    <h2 className="lg:text-lg text-sm font-semibold uppercase text-afri-primary;">témoignages</h2>
                    <span className="inline-block h-1 w-14 bg-afri-primary"></span>
                </div>

                {/* description */}
                <p className="font-poppins font-medium lg:text-2xl text-xl text-afri-text-primary leading-snug ">
                    Ils partagent leur expérience avec notre travail
                </p>

                <Carousel />
            </div>
        </section>
    );
}
