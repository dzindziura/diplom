export default function HeroSection() {
    return (
        <div className="w-full h-full  dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
            {/* Decorative circles */}

            {/* Content */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-white drop-shadow-md mb-6 animate-fade-in-up">
                Кафедра вищої математики
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl animate-fade-in delay-200">
                Формуємо фундамент математичних знань для інженерів, аналітиків та дослідників у Львівській політехніці.
            </p>

            {/* Scroll Down CTA */}
            <div className="absolute bottom-30 animate-bounce">
                <a href="#about" className="text-blue-700 dark:text-yellow-300 hover:underline text-sm">
                    ↓ Дізнатись більше
                </a>
            </div>
        </div>
    );
}
