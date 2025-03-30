import StandardLayout from "@/layouts/standard-layout";

export default function Accreditation() {
    return (
        <StandardLayout>
            <section className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Акредитація освітніх програм
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Усі освітні програми кафедри проходять державну акредитацію відповідно до вимог Міністерства освіти і науки України.
                    Доступні документи, звіти, експертні висновки та плани поліпшення якості навчання.
                </p>
            </section>
        </StandardLayout>
    );
}
