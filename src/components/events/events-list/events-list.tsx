"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@components/events/events-list/events-list.module.scss";
import { eventsData, EventItem, EventCategory } from "@/data/events-data";
import SectionReveal from "@ui/section-reveal/section-reveal";
import CalendarClockIcon from "@icons/calendar-clock";

type FilterType = "tous" | EventCategory;

const FILTERS: { label: string; value: FilterType }[] = [
    { label: "Tous", value: "tous" },
    { label: "Événements", value: "événement" },
    { label: "Formations", value: "formation" },
];

function EventCard({ event, index }: { event: EventItem; index: number }) {
    return (
        <SectionReveal variant="fadeUp" delay={index * 0.08} className="h-full">
            <article className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={220}
                        className={styles.cardImage}
                    />
                    {event.status === "à venir" && (
                        <span className={styles.statusBadge}>À venir</span>
                    )}
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.metaRow}>
                        <span
                            className={`${styles.categoryBadge} ${
                                event.category === "formation" ? styles.formation : styles.evenement
                            }`}
                        >
                            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </span>
                        <span className={styles.date}>
                            <CalendarClockIcon className={styles.dateIcon} />
                            {event.date}
                        </span>
                    </div>
                    <h3 className={styles.cardTitle}>{event.title}</h3>
                    <p className={styles.cardDescription}>{event.description}</p>
                    <p className={styles.location}>
                        <svg className={styles.locationIcon} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        {event.location}
                    </p>
                </div>
            </article>
        </SectionReveal>
    );
}

export default function EventsList() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("tous");

    const filtered =
        activeFilter === "tous" ? eventsData : eventsData.filter((e) => e.category === activeFilter);

    return (
        <section className={styles.section} aria-label="Liste des événements">
            <div className={styles.container}>
                <nav className={styles.filterNav} aria-label="Filtres des événements">
                    <ul className={styles.filterList}>
                        {FILTERS.map((f) => (
                            <li key={f.value}>
                                <button
                                    type="button"
                                    className={`${styles.filterBtn} ${activeFilter === f.value ? styles.active : ""}`}
                                    onClick={() => setActiveFilter(f.value)}
                                    aria-pressed={activeFilter === f.value}
                                >
                                    {f.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ul className={styles.cardsGrid}>
                    {filtered.map((event, i) => (
                        <li key={event.id} className={styles.cardItem}>
                            <EventCard event={event} index={i} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
