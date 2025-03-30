import StandardLayout from "@/layouts/standard-layout";

export default function PracticeBase({ bases }) {
    return (
        <StandardLayout>
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    База проходження практики
                </h1>

                <div className="grid gap-6 md:grid-cols-2">
                    {bases.map((base, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                                {base.name}
                            </h2>

                            {base.location && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    📍 {base.location}
                                </p>
                            )}

                            {base.website && (
                                <p className="text-sm mb-2">
                                    🌐 <a href={base.website} target="_blank" className="text-blue-600 hover:underline">
                                    Вебсайт
                                </a>
                                </p>
                            )}

                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                {base.description}
                            </p>

                            {base.documents?.length > 0 && (
                                <div>
                                    <h3 className="font-semibold mb-1">Документи:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {base.documents.map((doc, index) => (
                                            <li key={index}>
                                                <a
                                                    href={doc.url}
                                                    target="_blank"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {doc.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </StandardLayout>
    );
}
