"use client";
import Link from "next/link";
import React from "react";
import Footer from "@components/footer/footer";
interface FAQItemProps {
    title: string;
    href: string;
    answer: string;
}

const faqData: FAQItemProps[] = [
    {
        title: "Comment savoir si l'IA peut vraiment m'aider dans mon activité ?",
        href: "/faq#ia-activite",
        answer: "L'intelligence artificielle peut automatiser des tâches répétitives, améliorer votre relation client, optimiser vos processus internes et vous faire gagner du temps. Nous analysons votre activité, vos objectifs et vos contraintes afin d’identifier les opportunités concrètes où l’IA peut créer de la valeur mesurable.",
    },
    {
        title: "Comment faire un diagnostic rapide de mon activité ?",
        href: "/faq#diagnostic-rapide",
        answer: "Nous proposons un diagnostic rapide qui permet d’identifier les tâches chronophages, les processus inefficaces et les opportunités d’automatisation. En quelques échanges, vous obtenez une vision claire des solutions IA adaptées à votre structure.",
    },
    {
        title: "Proposez-vous des cas d’usage adaptés à mon métier ?",
        href: "/faq#cas-usage",
        answer: "Oui. Chaque secteur a ses spécificités. Nous analysons votre métier pour vous proposer des cas d’usage concrets : automatisation du service client, génération de contenus, analyse de données, assistants intelligents, optimisation des ventes, et bien plus encore.",
    },
    {
        title: "Puis-je me former à l’utilisation de l’intelligence artificielle ?",
        href: "/faq#formation-ia",
        answer: "Absolument. Nous proposons des formations pratiques adaptées à votre niveau afin de vous rendre autonome dans l’utilisation des outils d’intelligence artificielle. L’objectif est de vous permettre d’intégrer l’IA efficacement dans votre quotidien professionnel.",
    },
    {
        title: "Proposez-vous un accompagnement pour intégrer des solutions IA ?",
        href: "/faq#accompagnement-ia",
        answer: "Oui, nous vous accompagnons de l’analyse à l’implémentation. Cela inclut le choix des outils, l’intégration technique, les tests, ainsi que le suivi et l’optimisation continue pour garantir un retour sur investissement durable.",
    },
];

const FAQItem: React.FC<{ item: FAQItemProps }> = ({ item }) => {
    const id = item.href.split("#")[1];

    return (
        <article id={id} className="scroll-mt-24 mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3 md:mb-4">{item.title}</h2>
            <p className="text-sm md:text-base text-foreground leading-relaxed">{item.answer}</p>
        </article>
    );
};

export default function FAQ() {
    return (
        <div className="min-h-screen mt-24">
            <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-4xl">
                <header className="text-center mb-10 md:mb-16">
                    <h1 className="text-xl md:text-2xl font-bold text-wakilih-text-default mb-4">
                        Questions Fréquentes
                    </h1>
                    <p className="text-base md:text-lg text-wakilih-text-default max-w-2xl mx-auto">
                        Trouvez les réponses aux questions les plus courantes sur notre plateforme de contribution
                        vocale
                    </p>
                </header>

                <section
                    className="bg-white rounded-lg md:rounded-xl shadow-lg p-6 md:p-8 lg:p-10"
                    aria-label="Liste des questions fréquentes"
                >
                    {faqData.map((item) => (
                        <FAQItem key={item.href} item={item} />
                    ))}
                </section>

                <div className="mt-8 md:mt-12 text-center flex gap-3 items-center justify-center mb-8">
                    <p className="text-sm md:text-base text-foreground">
                        Vous ne trouvez pas la réponse à votre question ?
                    </p>
                    <Link
                        href="/#contact"
                        className="px-6 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-primary-foreground font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Contactez-nous
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
