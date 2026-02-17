import FAQ from "@/components/faq/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AfriAi Solutions | FAQ",
    description:
        "Retrouvez les réponses aux questions fréquentes sur l'intégration de l'intelligence artificielle dans votre activité avec AfriAi Solutions. Découvrez comment l'IA peut transformer votre entreprise, les étapes pour un diagnostic rapide, des cas d'usage adaptés à votre métier, nos formations et notre accompagnement personnalisé.",
};
export default function FAQPage() {
    return <FAQ />;
}
