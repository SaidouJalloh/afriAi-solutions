import { Metadata } from "next";
import LegalPage from "@components/legal/legal-page";
import { conditionsGeneralesData } from "@/data/conditions-generales-data";

export const metadata: Metadata = {
    title: "AfriAi Solutions | Conditions Générales d'Utilisation",
    description:
        "Consultez les Conditions Générales d'Utilisation des services AfriAI Solutions. Découvrez les droits et obligations régissant l'accès à nos solutions d'intelligence artificielle.",
    robots: { index: false, follow: false },
};

export default function ConditionsGeneralesPage() {
    return (
        <LegalPage
            title="Conditions Générales d'Utilisation"
            subtitle="Ces conditions régissent l'accès et l'utilisation des services proposés par AfriAI Solutions."
            lastUpdated="24 juillet 2026"
            sections={conditionsGeneralesData}
        />
    );
}
