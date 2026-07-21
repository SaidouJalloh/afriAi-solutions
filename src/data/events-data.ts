export type EventCategory = "événement" | "formation";
export type EventStatus = "à venir" | "passé";

export type EventItem = {
    id: number;
    title: string;
    description: string;
    category: EventCategory;
    date: string;
    location: string;
    status: EventStatus;
    image: string;
};

export const eventsData: EventItem[] = [
    {
        id: 1,
        title: "Introduction au développement web",
        description: "Cette formation propose une introduction structurée aux fondamentaux du web, notamment HTML, CSS et JavaScript.",
        category: "événement",
        date: "Mer, 10 Jan 2026",
        location: "En ligne",
        status: "à venir",
        image: "/people-talking-together.jpg",
    },
    {
        id: 2,
        title: "Introduction à l'Intelligence Artificielle",
        description: "Une rencontre avec des professionnels du secteur pour échanger sur les parcours, les compétences recherchées et les opportunités.",
        category: "formation",
        date: "Mer, 10 Jan 2026",
        location: "En ligne",
        status: "à venir",
        image: "/man-at-work.jpg",
    },
    {
        id: 3,
        title: "Introduction au développement web",
        description: "Cette formation propose une introduction structurée aux fondamentaux du web, notamment HTML, CSS et JavaScript.",
        category: "événement",
        date: "Mer, 10 Jan 2026",
        location: "En ligne",
        status: "passé",
        image: "/black-man-with-costum.jpg",
    },
    {
        id: 4,
        title: "Introduction au développement web",
        description: "Cette formation propose une introduction structurée aux fondamentaux du web, notamment HTML, CSS et JavaScript.",
        category: "formation",
        date: "Mer, 10 Jan 2026",
        location: "En ligne",
        status: "passé",
        image: "/man-with-laptop.jpg",
    },
    {
        id: 5,
        title: "Introduction au développement web",
        description: "Cette formation propose une introduction structurée aux fondamentaux du web, notamment HTML, CSS et JavaScript.",
        category: "événement",
        date: "Mer, 10 Jan 2026",
        location: "En ligne",
        status: "passé",
        image: "/woman-with-laptop-at-work.jpg",
    },
    {
        id: 6,
        title: "Introduction au développement web",
        description: "Cette formation propose une introduction structurée aux fondamentaux du web, notamment HTML, CSS et JavaScript.",
        category: "formation",
        date: "Mer, 10 Jan 2026",
        location: "En ligne",
        status: "passé",
        image: "/man-at-airport.jpg",
    },
];
