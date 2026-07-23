import { Metadata } from "next";
import LegalPage from "@components/legal/legal-page";
import { politiqueUtilisationData } from "@/data/politique-utilisation-data";

export const metadata: Metadata = {
    title: "AfriAi Solutions | Politique d'Utilisation",
    description:
        "Consultez la Politique d'Utilisation des services AfriAI Solutions. Découvrez les règles de bon usage, les usages acceptables et interdits de nos solutions d'intelligence artificielle.",
    robots: { index: false, follow: false },
};

export default function PolitiqueUtilisationPage() {
    return (
        <LegalPage
            title="Politique d'Utilisation"
            subtitle="Ces règles définissent le cadre d'usage éthique et sécurisé des solutions AfriAI Solutions."
            lastUpdated="24 juillet 2026"
            sections={politiqueUtilisationData}
        />
    );
}
