import About from "@/components/about/about-section/about-section";
import Projects from "@/components/project/project";
import Services from "@/components/service/service";
import Header from "@components/header/header";
import Home from "@components/home/home/home";

export default function LandingPage() {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Services />
            <Projects />
        </div>
    );
}
