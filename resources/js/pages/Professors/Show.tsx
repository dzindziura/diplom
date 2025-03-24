import StandardLayout from "@/layouts/standard-layout";

export default function Show({ professor }: { professor: any }) {
    return (
        <StandardLayout>
            <div className="max-w-4xl mx-auto py-12 px-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img
                        src={professor.image || "/images/default-avatar.png"}
                        alt={professor.name}
                        className="w-64 h-64 object-cover rounded-xl shadow"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-blue-900 dark:text-yellow-300">
                            {professor.name}
                        </h1>
                        <p className="text-md text-gray-700 dark:text-gray-400 mt-2">{professor.title}</p>
                        <p className="text-md text-gray-700 dark:text-gray-400 mb-4">
                            {professor.degree?.name}
                        </p>
                        <a
                            href={`mailto:${professor.email}`}
                            className="text-blue-600 dark:text-yellow-400 hover:underline"
                        >
                            {professor.email}
                        </a>
                    </div>
                </div>

                {/* Детальна інформація */}
                <div className="mt-10 space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
                    {professor.biography && (
                        <>
                            <h2 className="text-xl font-semibold">Біографія</h2>
                            <p>{professor.biography}</p>
                        </>
                    )}
                    {professor.research_interests && (
                        <>
                            <h2 className="text-xl font-semibold">Наукові інтереси</h2>
                            <p>{professor.research_interests}</p>
                        </>
                    )}
                    {professor.courses && (
                        <>
                            <h2 className="text-xl font-semibold">Навчальні курси</h2>
                            <p>{professor.courses}</p>
                        </>
                    )}
                    {professor.publications && (
                        <>
                            <h2 className="text-xl font-semibold">Публікації</h2>
                            <p>{professor.publications}</p>
                        </>
                    )}
                </div>
            </div>
        </StandardLayout>
    );
}
