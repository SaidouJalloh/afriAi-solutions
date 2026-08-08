export interface FAQItem {
    title: string;
    href: string;
    answer: string;
}

export const faqData: FAQItem[] = [
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
