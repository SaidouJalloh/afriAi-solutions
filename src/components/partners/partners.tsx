// import styles from "@components/partners/partners.module.scss";
// import Image from "next/image";
// import Link from "next/link";

// export interface Logo {
//     name: string;
//     src: string;
//     alt: string;
//     width: number;
//     height: number;
//     ratio: number;
//     href: string;
// }

// export const logos: Logo[] = [
//     {
//         name: "Amazon",
//         src: "/icons/amazon.png",
//         alt: "Logo de Amazon",
//         width: 153,
//         height: 36,
//         ratio: 153 / 36,
//         href: "",
//     },
//     {
//         name: "nestle",
//         src: "/icons/nestle.png",
//         alt: "Logo de nestle",
//         width: 153,
//         height: 36,
//         ratio: 153 / 36,
//         href: "",
//     },
//     {
//         name: "google",
//         src: "/icons/google.svg",
//         alt: "Logo de google",
//         width: 153,
//         height: 36,
//         ratio: 153 / 36,
//         href: "",
//     },
//     {
//         name: "aibd",
//         src: "/icons/samsung.svg",
//         alt: "Logo de samsung",
//         width: 153,
//         height: 36,
//         ratio: 153 / 36,
//         href: "",
//     },
//     {
//         name: "tesla",
//         src: "/icons/tesla.svg",
//         alt: "Logo de tesla",
//         width: 153,
//         height: 36,
//         ratio: 153 / 36,
//         href: "",
//     },
//     {
//         name: "youtube",
//         src: "/icons/youtube.svg",
//         alt: "Logo de youtube",
//         width: 153,
//         height: 36,
//         ratio: 153 / 36,
//         href: "",
//     },
// ];

// function LogoList() {
//     return (
//         <div className={styles.logosContainer}>
//             <ul className={styles.logosRow}>
//                 {logos.map((logo) => {
//                     const aspectClass = `aspect-[${logo.width}/${logo.height}]`;

//                     return (
//                         <li key={logo.name} className={`w-32 md:w-40 ${aspectClass}`}>
//                             <Link href={logo.href} className={styles.link}>
//                                 <Image
//                                     className={styles.image}
//                                     src={logo.src}
//                                     alt={logo.alt}
//                                     width={logo.width}
//                                     height={logo.height}
//                                 />
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//             <ul className={styles.logosRow}>
//                 {logos.map((logo) => {
//                     const aspectClass = `aspect-[${logo.width}/${logo.height}]`;

//                     return (
//                         <li key={logo.name} className={`w-32 md:w-40 ${aspectClass}`}>
//                             <Link href={logo.href} className={styles.link}>
//                                 <Image
//                                     className={styles.image}
//                                     src={logo.src}
//                                     alt={logo.alt}
//                                     width={logo.width}
//                                     height={logo.height}
//                                 />
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//             <ul className={styles.logosRow}>
//                 {logos.map((logo) => {
//                     const aspectClass = `aspect-[${logo.width}/${logo.height}]`;

//                     return (
//                         <li key={logo.name} className={`w-32 md:w-40 ${aspectClass}`}>
//                             <Link href={logo.href} className={styles.link}>
//                                 <Image
//                                     className={styles.image}
//                                     src={logo.src}
//                                     alt={logo.alt}
//                                     width={logo.width}
//                                     height={logo.height}
//                                 />
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }

// export default function Partners() {
//     return (
//         <section aria-labelledby="partners" className={styles.section}>
//             <h2 className="sr-only" id="partners">
//                 La liste de nos partenaires
//             </h2>
//             <div className={styles.content}>
//                 <LogoList />

//                 {/* overlay container */}
//                 <div className={styles.overlayContainer}>
//                     <div className={styles.overlayLeft}></div>
//                     <div className={styles.overlayRight}></div>
//                 </div>
//             </div>
//         </section>
//     );
// }




// new code avec juste les quelques partenaires
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
    ratio: number;
    href: string;
}

export const logos: Logo[] = [
    {
        name: "Google",
        src: "/icons/google.svg",
        alt: "Logo de Google",
        width: 153,
        height: 36,
        ratio: 153 / 36,
        href: "",
    },
    {
        name: "AIBD",
        src: "/icons/aibd.png",
        alt: "Logo de AIBD",
        width: 40,
        height: 40,
        ratio: 1,
        href: "",
    },
    {
        name: "Educonnect",
        src: "/icons/Educonnect.jpeg",
        alt: "Logo de Educonnect",
        width: 40,
        height: 40,
        ratio: 1,
        href: "",
    },
    {
        name: "SAAL",
        src: "/icons/SAAL_Multi_Services.jpeg",
        alt: "Logo de SAAL Multi Services",
        width: 100, // On augmente la taille initiale pour mieux cadrer
        height: 100,
        ratio: 1,
        href: "",
    },
    // {
    //     name: "Concree",
    //     src: "/icons/Concree.svg",
    //     alt: "Logo de Concree",
    //     width: 153,
    //     height: 36,
    //     ratio: 153 / 36,
    //     href: "",
    // },
];

function LogoList() {
    return (
        <div className={styles.logosContainer}>
            {[1, 2, 3].map((index) => (
                <ul key={index} className={styles.logosRow}>
                    {logos.map((logo) => {
                        // Partenaires nécessitant un titre textuel + icône en badge
                        const showTextTitle = logo.name === "AIBD" || logo.name === "Educonnect" || logo.name === "SAAL";
                        // On étend la détection à SAAL qui peut être un PNG
                        const isPngOrJpg = logo.src.endsWith('.png') || logo.src.endsWith('.jpeg') || logo.src.endsWith('.jpg');
                        const logoClass = isPngOrJpg ? styles.pngLogo : styles.brightLogo;

                        return (
                            <li key={`${index}-${logo.name}`} className="mx-8">
                                <Link href={logo.href} className={styles.link}>
                                    <div className="flex items-center gap-3">
                                        {showTextTitle && (
                                            <span className={styles.partnerTitle}>
                                                {logo.name}
                                            </span>
                                        )}

                                        <div className={showTextTitle ? styles.iconBadgeWrapper : ""}>
                                            <Image
                                                className={`${styles.image} ${logoClass}`}
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={logo.width}
                                                height={logo.height}
                                                priority={index === 1}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
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