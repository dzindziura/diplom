import { usePage } from '@inertiajs/react';
import StandardLayout from "@/layouts/standard-layout";
import ProfessorCard from "@/components/professors-card";

export default function ProfessorsPage() {
    const { professors } = usePage().props as {
        professors: {
            name: string;
            title: string;
            slug: string;
            degree: {
                name: string;
            } | null;
            email: string;
            image: string;
        }[];
    };

    const isProfessor = (p: any) =>
        (p.degree?.name || "").toLowerCase().includes("професор");

    const isDocent = (p: any) =>
        (p.degree?.name || "").toLowerCase().includes("доцент") &&
        !isProfessor(p);

    const isOther = (p: any) => !isProfessor(p) && !isDocent(p);

    const professorsList = professors.filter(isProfessor);
    const docents = professors.filter(isDocent);
    const others = professors.filter(isOther);

    return (
        <StandardLayout>
            <h1 className="text-4xl font-bold text-blue-900 dark:text-white mb-10 text-center">
                Викладачі кафедри
            </h1>

            {professorsList.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-yellow-300 mb-6 mt-10">
                        👨‍🏫 Професори
                    </h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {professorsList.map((prof, index) => (
                            <ProfessorCard
                                key={index}
                                name={prof.name}
                                title={prof.title}
                                degree={prof.degree?.name}
                                email={prof.email}
                                image={prof.image}
                                slug={prof.slug}
                            />
                        ))}
                    </div>
                </>
            )}

            {docents.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-yellow-300 mb-6 mt-12">
                        👩‍🏫 Доценти
                    </h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {docents.map((prof, index) => (
                            <ProfessorCard
                                key={index}
                                name={prof.name}
                                title={prof.title}
                                degree={prof.degree?.name}
                                email={prof.email}
                                image={prof.image}
                            />

                        ))}
                    </div>
                </>
            )}

            {others.length > 0 && (
                <>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-yellow-300 mb-6 mt-12">
                        👥 Інші працівники
                    </h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {others.map((prof, index) => (
                            <ProfessorCard
                                key={index}
                                name={prof.name}
                                title={prof.title}
                                degree={prof.degree?.name}
                                email={prof.email}
                                image={prof.image}
                            />

                        ))}
                    </div>
                </>
            )}
        </StandardLayout>
    );
}
