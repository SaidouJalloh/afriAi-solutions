import { Metadata } from "next";
import EventsPageComponent from "@components/events/events-page/events-page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://afriaisolutions.com";

export const metadata: Metadata = {
    title: "Événements & Formations | afriAI Solutions",
    description:
        "Découvrez les événements, formations et webinaires d'afriAI Solutions sur l'intelligence artificielle en Afrique. Enrichissez votre parcours professionnel.",
    alternates: {
        canonical: `${siteUrl}/events`,
    },
};

export default function EventsPage() {
    return <EventsPageComponent />;
}