import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/MainBlocks/hero-section";
import AboutSection from "@/components/MainBlocks/about-section";
import ActivitiesSection from "@/components/MainBlocks/activities-session";
import ContactSection from "@/components/MainBlocks/contact-session";

const sections = [
    { id: "hero", label: "Головна" },
    { id: "about", label: "Про кафедру" },
    { id: "activities", label: "Діяльність" },
    { id: "contact", label: "Контакти" },
];

export default function MainLayout() {
    const [activeSection, setActiveSection] = useState("hero");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const middleY = container.scrollTop + container.clientHeight / 2;

            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const elTop = el.offsetTop;
                    const elBottom = elTop + el.offsetHeight;

                    if (middleY >= elTop && middleY < elBottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        container.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const container = scrollRef.current;
        const el = document.getElementById(id);
        if (container && el) {
            container.scrollTo({
                top: el.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 relative">
            {/* Навігаційні крапочки */}
            <div className="fixed left-5 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-3">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                            activeSection === section.id
                                ? "bg-yellow-300 dark:bg-yellow-400 scale-125 shadow-md"
                                : "bg-blue-300 dark:bg-gray-500 opacity-50 hover:opacity-100"
                        }`}
                        title={section.label}
                        aria-label={section.label}
                    />
                ))}
            </div>

            {/* Header */}
            <Header />

            {/* Контейнер з прокруткою */}
            <div
                ref={scrollRef}
                className="flex-grow h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
            >
                <section id="hero" className="snap-start h-screen">
                    <HeroSection />
                </section>
                <section id="about" className="snap-start h-screen">
                    <AboutSection />
                </section>
                <section id="activities" className="snap-start h-screen">
                    <ActivitiesSection />
                </section>
                <section id="contact" className="snap-start h-screen">
                    <ContactSection />
                </section>
            </div>
        </div>
    );
}
