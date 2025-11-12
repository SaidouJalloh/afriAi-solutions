import About from "@/components/about/about-section/about-section";
import Service from "@/components/service/service";
import Header from "@components/header/header";
import Home from "@components/home/home/home";
import IntroFeatures from "@components/home/intro-features/intro-features";

export default function LandingPage() {
    return (
        <div>
            <Header />
            <Home />
            <IntroFeatures />
            <About />
            <Service />
        </div>
    );
}
