import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 text-gray-900 dark:text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Логотип" className="w-10 h-10 object-contain rounded-md shadow-sm" />
                </Link>

                {/* Hamburger button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1">
                        <span
                            className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                        />
                    </div>
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <NavLinks />
                </nav>
            </div>

            {/* Mobile nav dropdown */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
    const baseStyle = mobile
        ? 'block px-3 py-2 rounded-lg hover:bg-white/20 transition'
        : 'hover:text-blue-800 transition';

    return (
        <>
            <Link href="/" className={baseStyle}>Головна</Link>
            <Link href="/professors" className={baseStyle}>Викладачі</Link>
        </>
    );
}
