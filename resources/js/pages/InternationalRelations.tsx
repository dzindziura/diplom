import StandardLayout from "@/layouts/standard-layout";

export default function InternationalRelations() {
    return (
        <StandardLayout>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Міжнародні зв’язки
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Кафедра активно співпрацює з університетами Європи в межах програм Erasmus+, Horizon 2020 та інших.
                    Студенти та викладачі беруть участь в академічних обмінах, спільних дослідженнях та міжнародних конференціях.
                </p>
            </section>
        </StandardLayout>
    );
}
