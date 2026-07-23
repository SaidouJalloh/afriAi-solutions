"use client";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import EventsHero from "@components/events/events-hero/events-hero";
import EventsList from "@components/events/events-list/events-list";
import CTASection from "@/components/CTA/cta-section";


export default function EventsPageComponent() {
    return (
        <>
            <Header />
            <main>
                <EventsHero />
                <EventsList />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
