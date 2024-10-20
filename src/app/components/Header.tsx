'use client';

import Logo from '@/app/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full bg-white shadow-md">
            <div className="container flex justify-between items-center py-4 px-8">

                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <Image src={Logo} alt="Логотип" width={80} height={80} priority />
                    </Link>
                </div>


                <nav className="hidden md:flex space-x-8">
                    <a href="/tires" className="text-gray-600 hover:text-blue-500 font-semibold">
                        Шины
                    </a>
                    <a href="/rims" className="text-gray-600 hover:text-blue-500 font-semibold">
                        Диски
                    </a>
                    <a href="/for-buyers" className="text-gray-600 hover:text-blue-500 font-semibold">
                        Покупателю
                    </a>
                    <a href="/about" className="text-gray-600 hover:text-blue-500 font-semibold">
                        О нас
                    </a>
                </nav>


                <div className="hidden md:flex items-center space-x-2 text-gray-600">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <a href="tel:+375297885891" className="text-blue-500 hover:underline">
                        +375 29 788 5891
                    </a>
                </div>


                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-500 focus:outline-none">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="md:hidden bg-white py-4 px-8 flex flex-col items-center">
                    <a href="/tires" className="block mb-4 text-gray-600 hover:text-blue-500 font-semibold">
                        Шины
                    </a>
                    <a href="/rims" className="block mb-4 text-gray-600 hover:text-blue-500 font-semibold">
                        Диски
                    </a>
                    <a href="/for-buyers" className="block mb-4 text-gray-600 hover:text-blue-500 font-semibold">
                        Покупателю
                    </a>
                    <a href="/about" className="block mb-4 text-gray-600 hover:text-blue-500 font-semibold">
                        О нас
                    </a>
                    <div className="flex items-center space-x-2 text-gray-600 mt-4">
                        <Phone className="w-5 h-5 text-blue-500" />
                        <a href="tel:+375297885891" className="text-blue-500 hover:underline">
                            +375 29 788 5891
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}
