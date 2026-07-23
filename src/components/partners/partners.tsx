"use client";
import styles from "@components/partners/partners.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface Logo {
    name: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
}

export const logos: Logo[] = [
    {
        name: "AIBD",
        src: "/icons/aibd.png",
        alt: "Logo de AIBD",
        width: 153,
        height: 36,
        href: "",
    },
    {
        name: "Educonnect",
        src: "/icons/Educonnect.jpeg",
        alt: "Logo de Educonnect",
        width: 153,
        height: 36,
        href: "",
    },
    {
        name: "SAAL",
        src: "/icons/SAAL_Multi_Services.jpeg",
        alt: "Logo de SAAL Multi Services",
        width: 153,
        height: 36,
        href: "",
    },
];

function LogoItem({ logo }: { logo: Logo }) {
    return (
        <li className={styles.logoItem}>
            <Link href={logo.href} className={styles.link}>
                <div className={styles.partnerWithIcon}>
                    <span className={styles.partnerName}>{logo.name}</span>
                    <div className={styles.imgBadge}>
                        <Image
                            className={styles.image}
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            priority
                        />
                    </div>
                </div>
            </Link>
        </li>
    );
}

function LogoList() {
    return (
        <div className={styles.logosContainer}>
            {[1, 2, 3].map((index) => (
                <ul key={index} className={styles.logosRow}>
                    {logos.map((logo) => (
                        <LogoItem key={`${index}-${logo.name}`} logo={logo} />
                    ))}
                </ul>
            ))}
        </div>
    );
}

export default function Partners() {
    return (
        <section aria-labelledby="partners" className={styles.section}>
            <h2 className="sr-only" id="partners">
                La liste de nos partenaires
            </h2>
            <div className={styles.content}>
                <LogoList />
                <div className={styles.overlayContainer}>
                    <div className={styles.overlayLeft}></div>
                    <div className={styles.overlayRight}></div>
                </div>
            </div>
        </section>
    );
}
