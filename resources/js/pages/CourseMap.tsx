import StandardLayout from "@/layouts/standard-layout";
import { Link } from '@inertiajs/react';

export default function CourseMap({ courses }) {
    return (
        <StandardLayout>
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    Карта курсів кафедри
                </h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
                        >
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-1">
                                    {course.title}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Семестр: <strong>{course.semester}</strong>
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Програма: <strong>{course.program}</strong>
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Викладач: <strong>{course.professor.name || '—'}</strong>
                                </p>
                            </div>

                            <div>
                                <Link
                                    href={`/education/courses/${course.id}`}
                                    className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                                >
                                    Дізнатись більше
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </StandardLayout>
    );
}
