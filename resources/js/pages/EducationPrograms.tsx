import StandardLayout from "@/layouts/standard-layout";

export default function EducationPrograms({educationPrograms}) {


    return (
        <StandardLayout>
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    Освітні програми кафедри
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {educationPrograms.map((program, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 bg-white dark:bg-gray-800 hover:shadow-md transition"
                        >
                            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                                {program.title}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                Рівень: <strong>{program.level}</strong> | Форма: <strong>{program.form}</strong>
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {program.description}
                            </p>
                            <a
                                href={program.file_path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-auto px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Детальніше (PDF)
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </StandardLayout>
    );
}
