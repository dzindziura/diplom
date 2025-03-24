export default function AboutSection() {
    return (
        <div
            id="about"
            className="w-full h-full dark:bg-gray-900 flex items-center justify-center px-6 text-center"
        >
            <div className="max-w-3xl">
                <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-6">Про кафедру</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Кафедра вищої математики є однією з провідних фундаментальних кафедр Львівської політехніки. Вона
                    забезпечує математичну підготовку студентів усіх спеціальностей, формує аналітичне мислення,
                    культуру точності та логіки.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Наші викладачі — це кандидати й доктори наук, які поєднують викладання з активною науковою діяльністю,
                    впроваджують інноваційні методи навчання та міждисциплінарний підхід.
                </p>
            </div>
        </div>
    );
}
