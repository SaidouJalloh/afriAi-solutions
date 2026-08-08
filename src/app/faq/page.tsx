import FAQ from "@/components/faq/faq";
import { faqData } from "@/data/faq-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AfriAi Solutions | FAQ",
    description:
        "Retrouvez les réponses aux questions fréquentes sur l'intégration de l'intelligence artificielle dans votre activité avec AfriAi Solutions. Découvrez comment l'IA peut transformer votre entreprise, les étapes pour un diagnostic rapide, des cas d'usage adaptés à votre métier, nos formations et notre accompagnement personnalisé.",
};

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqData.map((item) => ({
                            "@type": "Question",
                            name: item.title,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: item.answer,
                            },
                        })),
                    }),
                }}
            />
            <FAQ />
        </>
    );
}
