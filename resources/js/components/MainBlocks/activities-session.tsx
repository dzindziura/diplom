import { FaChalkboardTeacher, FaFlask, FaUserGraduate, FaGlobeEurope } from "react-icons/fa";
import Politech from "@/images/image2.jpg";

export default function ActivitiesSection() {
    const activities = [
        {
            title: "Викладання курсів",
            description: "Вища математика для інженерних та ІТ-спеціальностей.",
            icon: <FaChalkboardTeacher size={40} className="text-blue-600 dark:text-yellow-300 mb-4" />,
        },
        {
            title: "Наукові дослідження",
            description: "Прикладна математика, моделювання, аналітика даних.",
            icon: <FaFlask size={40} className="text-blue-600 dark:text-yellow-300 mb-4" />,
        },
        {
            title: "Підготовка кадрів",
            description: "Аспірантура, розвиток молодих науковців.",
            icon: <FaUserGraduate size={40} className="text-blue-600 dark:text-yellow-300 mb-4" />,
        },
        {
            title: "Міжнародна співпраця",
            description: "Конференції, гранти, академічна мобільність.",
            icon: <FaGlobeEurope size={40} className="text-blue-600 dark:text-yellow-300 mb-4" />,
        },
    ];

    return (
        <div
            className="relative w-full h-screen bg-fixed bg-cover flex flex-col items-center justify-center text-center px-6 overflow-hidden"
            style={{
                backgroundImage: `url(${Politech})`,
                backgroundPosition: "center top",
            }}
        >
            <div className="absolute inset-0 bg-black/50 z-0" />
        <div
            id="activities"
            className="w-full h-full dark:bg-gray-950 flex items-center justify-center px-6"
        >
            <div className="relative z-10">
                <h2 className=" md:text-4xl font-extrabold text-white drop-shadow-md mb-6 animate-fade-in-up">
                    Основні напрямки діяльності
                </h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 px-4">
                    {activities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-left p-6"
                        >
                            <div className="flex flex-col items-start">
                                {item.icon}
                                <h3 className="text-xl font-semibold text-blue-900 dark:text-yellow-300 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}
