import StandardLayout from "@/layouts/standard-layout";

export default function CourseShow({ course }) {
    return (
        <StandardLayout>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    {course.title}
                </h1>

                <div className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                    <p><strong>Семестр:</strong> {course.semester}</p>
                    <p><strong>Освітня програма:</strong> {course.program}</p>
                    <p><strong>Викладач:</strong> {course.professor || '—'}</p>

                    {course.link && (
                        <p>
                            <strong>Силлабус:</strong>{' '}
                            <a
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Переглянути PDF
                            </a>
                        </p>
                    )}
                </div>

                {course.documents && course.documents.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Документи курсу</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {course.documents.map((doc, index) => (
                                <li key={index}>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {doc.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </StandardLayout>
    );
}
