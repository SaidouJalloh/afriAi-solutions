import About from "@components/about/about-section/about-section";
import Projects from "@components/project/project";
import Services from "@components/service/service";
import Stats from "@components/stats/stats";
import Header from "@components/header/header";
import Home from "@components/home/home/home";
import Testimonials from "@/components/testimonials/testimonials-section/testimonials";
import Team from "@/components/team/team-section/team";

export default function LandingPage() {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Services />
            <Projects />
            <Stats />
            <Testimonials />
            <Team />
        </div>
    );
}
