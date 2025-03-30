import StandardLayout from "@/layouts/standard-layout";

export default function Contacts() {
    return (
        <StandardLayout>
            <section className="max-w-3xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Контакти
                </h1>

                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
                    <p><strong>Кафедра вищої математики</strong></p>
                    <p>Національний університет “Львівська політехніка”</p>
                    <p>вул. С. Бандери, 12, корпус №3, ауд. 314</p>
                    <p>Телефон: (032) 258-25-35</p>
                    <p>Email: math@lpnu.ua</p>
                </div>
            </section>
        </StandardLayout>
    );
}
