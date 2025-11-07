import Image from "next/image";
import styles from "@components/home/image-component/image-component.module.scss";

export default function ImageComponent() {
    return (
        <div className={styles.imageContainer}>
            <Image src="/man-holding-laptop.png" alt="man holding laptop" width={692} height={674} />
        </div>
    );
}
