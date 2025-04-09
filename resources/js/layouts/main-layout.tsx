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
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 relative">


            {/* Header */}
            <Header />

            <div
                ref={scrollRef}
                className="flex-grow h-screen"
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
