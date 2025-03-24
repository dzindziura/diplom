import { Link } from '@inertiajs/react';

type Professor = {
    name: string;
    title: string;
    degree: string;
    email: string;
    image: string;
    slug: string;
};



export default function ProfessorCard({ name, title, degree, email, image, slug }: Professor) {

    return (
        <Link
            href={`/professors/${slug}`}
            className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition hover:shadow-lg hover:ring-2 hover:ring-blue-300 dark:hover:ring-yellow-400"
        >
            <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                    src={image || "/images/professors/default.png"}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-yellow-300">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{degree}</p>
                <a
                    href={`mailto:${email}`}
                    className="text-sm text-blue-600 dark:text-yellow-400 hover:underline"
                    onClick={(e) => e.stopPropagation()} // Щоб не зловив клік лінк
                >
                    {email}
                </a>
            </div>
        </Link>
    );
}
