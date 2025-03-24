export default function ContactSection() {
    return (
        <div
            id="contact"
            className="w-full h-full  dark:bg-gray-900 flex items-center justify-center px-6"
        >
            <div className="text-center max-w-2xl">
                <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-6">Контактна інформація</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Львівська політехніка, корпус № ____, аудиторія ____
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    <strong>E-mail:</strong> math-dept@lpnu.ua
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Телефон:</strong> (032) ___-__-__
                </p>
            </div>
        </div>
    );
}
