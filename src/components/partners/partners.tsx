import styles from "@components/partners/partners.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface Logo {
    name: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    ratio: number;
    href: string;
}

export const logos: Logo[] = [
    {
        name: "Amazon",
        src: "/icons/amazon.png",
        alt: "Logo de Amazon",
        width: 153,
        height: 36,
        ratio: 153 / 36,
        href: "",
    },
    {
        name: "nestle",
        src: "/icons/nestle.png",
        alt: "Logo de nestle",
        width: 153,
        height: 36,
        ratio: 153 / 36,
        href: "",
    },
    {
        name: "google",
        src: "/icons/google.svg",
        alt: "Logo de google",
        width: 153,
        height: 36,
        ratio: 153 / 36,
        href: "",
    },
    {
        name: "samsung",
        src: "/icons/samsung.svg",
        alt: "Logo de samsung",
        width: 153,
        height: 36,
        ratio: 153 / 36,
        href: "",
    },
    {
        name: "tesla",
        src: "/icons/tesla.svg",
        alt: "Logo de tesla",
        width: 153,
        height: 36,
        ratio: 153 / 36,
        href: "",
    },
    {
        name: "youtube",
        src: "/icons/youtube.svg",
        alt: "Logo de youtube",
        width: 153,
        height: 36,
        ratio: 153 / 36,
        href: "",
    },
];

function LogoList() {
    return (
        <div className={styles.logosContainer}>
            <ul className={styles.logosRow}>
                {logos.map((logo) => {
                    const aspectClass = `aspect-[${logo.width}/${logo.height}]`;

                    return (
                        <li key={logo.name} className={`w-32 md:w-40 ${aspectClass}`}>
                            <Link href={logo.href} className={styles.link}>
                                <Image
                                    className={styles.image}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className={styles.logosRow}>
                {logos.map((logo) => {
                    const aspectClass = `aspect-[${logo.width}/${logo.height}]`;

                    return (
                        <li key={logo.name} className={`w-32 md:w-40 ${aspectClass}`}>
                            <Link href={logo.href} className={styles.link}>
                                <Image
                                    className={styles.image}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className={styles.logosRow}>
                {logos.map((logo) => {
                    const aspectClass = `aspect-[${logo.width}/${logo.height}]`;

                    return (
                        <li key={logo.name} className={`w-32 md:w-40 ${aspectClass}`}>
                            <Link href={logo.href} className={styles.link}>
                                <Image
                                    className={styles.image}
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
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

                {/* overlay container */}
                <div className={styles.overlayContainer}>
                    <div className={styles.overlayLeft}></div>
                    <div className={styles.overlayRight}></div>
                </div>
            </div>
        </section>
    );
}
