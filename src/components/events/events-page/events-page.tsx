"use client";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import ScrollToTopButton from "@components/scroll-to-top-button/scroll-to-top-button";
import EventsHero from "@components/events/events-hero/events-hero";
import EventsList from "@components/events/events-list/events-list";
import EventsCTA from "@components/events/events-cta/events-cta";


export default function EventsPageComponent() {
    return (
        <>
            <Header />
            <main>
                <EventsHero />
                <EventsList />
                <EventsCTA />
            </main>
            <Footer />
        </>
    );
}
