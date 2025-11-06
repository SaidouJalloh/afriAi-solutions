import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
    title: "AfriAi Solutions",
    description:
        "AfriAi Solutions — Innovation et intelligence artificielle au service du développement durable en Afrique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className={`${poppins.variable} ${raleway.variable} antialiased bg-white text-gray-900`}>
                {children}
            </body>
        </html>
    );
}
