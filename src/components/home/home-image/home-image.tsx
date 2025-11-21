import Image from "next/image";
import styles from "@components/home/home-image/home-image.module.scss";
import SectionReveal from "@/components/ui/section-reveal/section-reveal";

export default function ImageComponent() {
    return (
        <SectionReveal variant="fadeRight" className={styles.imageContainer}>
            <Image
                className={styles.image}
                src="/man-holding-laptop.png"
                alt="man holding laptop"
                width={692}
                height={674}
                priority
                fetchPriority="high"
            />
        </SectionReveal>
    );
}
