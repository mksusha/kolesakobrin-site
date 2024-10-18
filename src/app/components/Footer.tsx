const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 py-8 border-t border-gray-300">
            <div className="container max-w-[1370px] mx-auto px-4">
                <div
                    className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between text-center md:text-left">
                    {}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">О компании</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Интернет-магазин «Все шины» предлагает клиентам широкий ассортимент шин и дисков по
                            доступным ценам с доставкой по всей Беларуси.
                        </p>
                    </div>

                    {}
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
                        <h3 className="text-xl font-semibold mb-4">Навигация</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-blue-500 transition-colors">Главная</a>
                            </li>
                            <li>
                                <a href="/tires" className="hover:text-blue-500 transition-colors">Шины</a>
                            </li>
                            <li>
                                <a href="/rims" className="hover:text-blue-500 transition-colors">Диски</a>
                            </li>
                            <li>
                                <a href="/for-buyers" className="hover:text-blue-500 transition-colors">Покупателю</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-blue-500 transition-colors">О нас</a>
                            </li>

                        </ul>
                    </div>

                    {}
                    <div className="w-full md:w-1/3 text-center md:text-right">
                        <h3 className="text-xl font-semibold mb-4">Контакты</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="tel:+375297885891" className="hover:text-blue-500 transition-colors">+375 29
                                    788 5891</a>
                            </li>
                            <li>
                                <a href="mailto:info@vse-shiny.by"
                                   className="hover:text-blue-500 transition-colors">info@vse-shiny.by</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-8 pt-4 text-center">
                    <p className="text-gray-700">&copy; 2024 Все шины. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
