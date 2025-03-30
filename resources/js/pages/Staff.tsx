import StandardLayout from "@/layouts/standard-layout";
import ProfessorCard from "@/components/professors-card";

export default function History({professors}) {
    return (
        <StandardLayout>
            <section className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white relative inline-block">
                        Колектив
                        <span className="block h-1 w-20 bg-blue-600 mx-auto mt-4 rounded"></span>
                    </h1>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {professors.map((prof, index) => (
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
            </section>
        </StandardLayout>
    );
}
