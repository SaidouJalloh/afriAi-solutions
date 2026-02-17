import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "@app/globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://afriai-solutions.com"),

    title: {
        default: "afriAI Solutions",
        template: "%s | afriAI Solutions",
    },

    description:
        "afriAI Solutions accompagne les entreprises dans l’intégration de l’intelligence artificielle pour automatiser leurs processus et optimiser leur performance.",

    keywords: [
        "Intelligence artificielle Afrique",
        "Automatisation IA",
        "Solutions IA entreprise",
        "Transformation digitale",
    ],

    openGraph: {
        title: "Donnez à votre entreprise la puissance de l’IA",
        description:
            "Nous simplifions vos processus grâce à l’intelligence artificielle afin que vous puissiez vous concentrer sur l’essentiel.",
        url: "https://afriai-solutions.com",
        siteName: "afriAI Solutions",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "afriAI Solutions - Intelligence artificielle pour entreprises",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "afriAI Solutions",
        description: "Automatisez et optimisez votre entreprise grâce à l’intelligence artificielle.",
        images: ["/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className={`${poppins.variable} ${raleway.variable} antialiased bg-background text-gray-900`}>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": "https://afriaisolutions.com/#business",
                            name: "afriAI Solutions",
                            url: "https://afriaisolutions.com",
                            logo: "https://afriaisolutions.com/logo.png",
                            image: "https://afriaisolutions.com/og-image.jpg",
                            description:
                                "afriAI Solutions accompagne les entreprises à Dakar et en Afrique dans l’intégration de solutions d’intelligence artificielle pour automatiser et optimiser leurs processus.",

                            telephone: "+221781557373",
                            email: "contact@afriaisolutions.com",

                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Yeumbeul Asecna, Immeuble 14",
                                addressLocality: "Dakar",
                                addressRegion: "Dakar",
                                postalCode: "11500",
                                addressCountry: "SN",
                            },

                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 14.78532898572319,
                                longitude: -17.365283924890264,
                            },

                            areaServed: {
                                "@type": "Place",
                                name: "Afrique",
                            },

                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+221781557373",
                                contactType: "customer service",
                                availableLanguage: ["French"],
                            },

                            sameAs: [
                                "https://www.linkedin.com/company/afriai-solutions/",
                                "https://www.facebook.com/afriaisolutions",
                            ],
                        }),
                    }}
                />
            </body>
        </html>
    );
}
