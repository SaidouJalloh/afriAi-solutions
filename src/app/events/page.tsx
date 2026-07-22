import { Metadata } from "next";
import EventsPageComponent from "@components/events/events-page/events-page";
import { eventsData } from "@/data/events-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://afriaisolutions.com";

const title = "Événements & Formations | afriAI Solutions";
const description =
    "Découvrez les événements, formations et webinaires d'afriAI Solutions sur l'intelligence artificielle en Afrique. Enrichissez votre parcours professionnel.";

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${siteUrl}/events`,
    },
    openGraph: {
        title,
        description,
        url: `${siteUrl}/events`,
        type: "website",
        images: [{ url: `${siteUrl}/afriai-events-pictures.png`, width: 1200, height: 630, alt: "Événements afriAI Solutions" }],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "AfriAI Solutions", item: `${siteUrl}` },
        { "@type": "ListItem", position: 2, name: "Événements", item: `${siteUrl}/events` },
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: eventsData.map((e, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "Event",
            name: e.title,
            description: e.description,
            eventStatus:
                e.status === "à venir"
                    ? "https://schema.org/EventScheduled"
                    : "https://schema.org/EventPostponed",
            location: {
                "@type": "Place",
                name: e.location,
            },
        },
    })),
};

export default function EventsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <EventsPageComponent />
        </>
    );
}