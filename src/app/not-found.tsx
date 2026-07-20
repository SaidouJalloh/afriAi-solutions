import { Metadata } from "next";
import NotFound from "@/components/not-found/not-found";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFoundPage() {
    return <NotFound />;
}
