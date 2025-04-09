import Politech from "@/images/image2.jpg";

export default function HeroSection() {
    return (
        <div
            className="relative w-full h-screen bg-fixed bg-cover flex flex-col items-center justify-center text-center px-6 overflow-hidden"
            style={{
                backgroundImage: `url(${Politech})`,
                backgroundPosition: "center top",
            }}
        >
            <div className="absolute inset-0 bg-black/50 z-0" />

            <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mb-6 animate-fade-in-up">
                    Кафедра вищої математики
                </h1>

                <div className="flex justify-center">
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl animate-fade-in delay-200">
                        Формуємо фундамент математичних знань для інженерів, аналітиків та дослідників у Львівській політехніці.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-30 animate-bounce">
                <a href="#about" className="text-yellow-300 hover:underline text-sm">
                    ↓ Дізнатись більше
                </a>
            </div>
        </div>
    );
}
