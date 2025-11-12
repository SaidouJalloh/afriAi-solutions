import Image from "next/image";
import CercleDashedIcon from "@icons/cercle-dashed";
import UserGroupIcon from "@icons/user-group";
import styles from "@components/about/about-images/about-images.module.scss";

export default function AboutImages() {
    return (
        <div className={styles.container}>
            {/* images left */}
            <div className={styles.leftColumn}>
                <div className={styles.imageTopLeft}>
                    <Image
                        src={"/man-with-laptop.jpg"}
                        className={styles.imageTopLeftImg}
                        height={300}
                        width={400}
                        alt="Chercheur africain travaillant sur un ordinateur portable"
                    />
                    <span className={styles.overlay}></span>
                </div>
                <div className={styles.statsCard}>
                    <span className={styles.statsIconWrapper} aria-label="Icône de groupe d'utilisateurs">
                        <UserGroupIcon className={styles.statsIcon} />
                    </span>
                    <p className={styles.statsText}>100% de clients satisfaits</p>
                </div>
            </div>

            {/* image right */}
            <div className={styles.rightColumn}>
                {/* image circle */}
                <div className={styles.circleImageWrapper}>
                    <CercleDashedIcon className={styles.circleDashedIcon} />
                    <div className={styles.circleImageInner}>
                        <Image
                            src={"/people-talking-together.jpg"}
                            className={styles.circleImage}
                            height={300}
                            width={400}
                            alt="Équipe de professionnels africains en discussion"
                        />
                        <span className={styles.circleOverlay}></span>
                    </div>
                </div>
                <div className={styles.imageBottomRight}>
                    <Image
                        src={"/woman-with-laptop-at-work.jpg"}
                        className={styles.imageBottomRightImg}
                        height={300}
                        width={400}
                        alt="Femme africaine utilisant une tablette au bureau"
                    />
                    <span className={styles.overlay}></span>
                </div>
            </div>
        </div>
    );
}
