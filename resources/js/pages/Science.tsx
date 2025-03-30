import StandardLayout from "@/layouts/standard-layout";

export default function Science() {
    return (
        <StandardLayout>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Наукова діяльність кафедри
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Викладачі кафедри проводять дослідження у галузях прикладної математики, статистики, обчислювальної математики.
                    Регулярно публікуються в українських та міжнародних наукових журналах, керують студентськими науковими гуртками.
                </p>
            </section>
        </StandardLayout>
    );
}
