import React, {FC, Suspense, useState, useRef, useEffect} from "react";
import "./index.scss";
import Loader from "../../components/common/loader/Loader.tsx";

const About = React.lazy(() => import("../../components/share/about/About.tsx"));
const ContactMe = React.lazy(() => import("../../components/share/contact-me/ContactMe.tsx"));
const IntroSection = React.lazy(() => import("../../components/share/intro-section/IntroSection.tsx"));
const Skills = React.lazy(() => import("../../components/share/skills/Skills.tsx"));
const Portfolio = React.lazy(() => import("../../components/share/portfolio/Portfolio.tsx"));

const Main: FC = () => {
    const [loadedSections, setLoadedSections] = useState<string[]>([]);
    const observeRefs = useRef({
        intro: null,
        about: null,
        skills: null,
        portfolio: null,
        contact: null,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const section = entry.target.getAttribute("data-section");
                    if (entry.isIntersecting && section) {
                        setLoadedSections((prev) =>
                            prev.includes(section) ? prev : [...prev, section]
                        );
                    }
                });
            },
            { rootMargin: "400px" }
        );

        Object.values(observeRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <div
                ref={(el:null) => {observeRefs.current.intro = el;}}
                data-section="intro"
                style={{ minHeight: "100vh" }}
            >
                <Suspense fallback={<Loader/>}>
                    {loadedSections.includes("intro") && <IntroSection />}
                </Suspense>
            </div>

            <div
                ref={(el:null) => {(observeRefs.current.about = el)}}
                data-section="about"
            >
                <Suspense fallback={<Loader/>}>
                    {loadedSections.includes("about") && <About />}
                </Suspense>
            </div>

            <div
                ref={(el:null) => {(observeRefs.current.skills = el)}}
                data-section="skills"
                style={{ minHeight: "100vh" }}
            >
                <Suspense fallback={<Loader/>}>
                    {loadedSections.includes("skills") && <Skills />}
                </Suspense>
            </div>

            <div
                ref={(el:null) => {(observeRefs.current.portfolio = el)}}
                data-section="portfolio"
            >
                <Suspense fallback={<Loader/>}>
                    {loadedSections.includes("portfolio") && <Portfolio />}
                </Suspense>
            </div>

            <div
                ref={(el:null) => {(observeRefs.current.contact = el)}}
                data-section="contact"
                style={{ minHeight: "100vh" }}
            >
                <Suspense fallback={<Loader/>}>
                    {loadedSections.includes("contact") && <ContactMe />}
                </Suspense>
            </div>
        </main>
    );
};

export default Main;
