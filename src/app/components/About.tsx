import { CheckCircle, Award, Globe } from 'lucide-react';
const AboutUsSection = () => {
    return (
        <section className="mt-16 py-16 bg-blue-50 w-full">
            <div className="container max-w-[1370px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">О нас</h2>
                    <p className="text-lg text-gray-700 max-w-[800px] mx-auto leading-relaxed">
                        Интернет-магазин «Все шины» предлагает клиентам большой ассортимент качественных шин и дисков от ведущих мировых производителей. Мы стремимся предоставлять только проверенные и надежные товары для всех типов автомобилей.
                    </p>
                </div>

                {}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div
                        className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300">
                        <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Надежные товары</h3>
                        <p className="text-gray-700">Только проверенные производители с гарантией качества.</p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300">
                        <Award className="w-12 h-12 text-blue-500 mx-auto mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Многолетний опыт</h3>
                        <p className="text-gray-700">Наши специалисты имеют многолетний опыт работы с шинами и
                            дисками.</p>
                    </div>

                    <div
                        className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300">
                        <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Доставка по всей стране</h3>
                        <p className="text-gray-700">Мы доставляем шины и диски по всей Беларуси бесплатно.</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/about"                          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition duration-300"
                    >
                        Узнать больше
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
