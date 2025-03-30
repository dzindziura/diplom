import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Логотип" className="w-10 h-10 object-contain rounded-md shadow-sm" />
                </Link>

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1">
                        <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </div>
                </button>

                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <NavLinks />
                </nav>
            </div>

            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="px-4 pb-4 pt-2 space-y-3 text-sm font-medium">
                    <NavLinks mobile />
                </nav>
            </div>
        </header>
    );
}

function NavLinks({ mobile = false }) {
    const [dropdownOpen, setDropdownOpen] = useState({ kafedra: false, navchannia: false });

    const toggleDropdown = (menu) => {
        setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const baseStyle = mobile
        ? 'block px-3 py-2 rounded-lg hover:bg-white/20 transition'
        : 'relative group transition';

    return (
        <>
            <Link href="/" className={mobile ? baseStyle : 'hover:text-blue-800 transition'}>Головна</Link>

            {/* Кафедра */}
            <div className={baseStyle}>
                <button
                    onClick={() => mobile && toggleDropdown('kafedra')}
                    className={`flex items-center ${mobile ? 'w-full' : 'hover:text-blue-800'} transition`}
                >
                    Кафедра
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`${mobile
                    ? `${dropdownOpen.kafedra ? 'block' : 'hidden'} pl-4 mt-2 space-y-1`
                    : 'absolute left-0 mt-2 w-56 bg-white dark:bg-gray-700 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'
                }`}>
                    <Link href="/history" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Історія</Link>
                    <Link href="/leadership" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Керівництво</Link>
                    <Link href="/staff" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Колектив</Link>
                    <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Галерея</Link>
                </div>
            </div>

            {/* Навчання */}
            <div className={baseStyle}>
                <button
                    onClick={() => mobile && toggleDropdown('navchannia')}
                    className={`flex items-center ${mobile ? 'w-full' : 'hover:text-blue-800'} transition`}
                >
                    Навчання
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`${mobile
                    ? `${dropdownOpen.navchannia ? 'block' : 'hidden'} pl-4 mt-2 space-y-1`
                    : 'absolute left-0 mt-2 w-56 bg-white dark:bg-gray-700 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'
                }`}>
                    <Link href="/education/programs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Освітні програми</Link>
                    <Link href="/education/map" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Карта курсів</Link>
                    <Link href="/education/practice" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">База практик</Link>
                    <Link href="/education/international" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Міжнародні зв’язки</Link>
                </div>
            </div>

            {/* Інші сторінки */}
            <Link href="/science" className={mobile ? baseStyle : 'hover:text-blue-800 transition'}>Наука</Link>
            <Link href="/accreditation" className={mobile ? baseStyle : 'hover:text-blue-800 transition'}>Акредитація</Link>
            <Link href="/contacts" className={mobile ? baseStyle : 'hover:text-blue-800 transition'}>Контакти</Link>
        </>
    );
}

