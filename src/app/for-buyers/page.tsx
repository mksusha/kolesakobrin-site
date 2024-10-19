
import { Truck, ShieldCheck, PhoneCall } from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ForBuyers() {
    return (
        <div>
            <Header />
            <main className="bg-blue-50 py-20">
                <div className="container mx-auto max-w-5xl px-8">

                    <section className="mb-24 text-center">
                        <div className="bg-white p-10 rounded-xl shadow-lg">
                            <div className="flex justify-center items-center gap-4 mb-6">

                                <Truck className="text-blue-600" size={40} />

                                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Условия доставки</h2>
                            </div>
                            <p className="text-lg text-gray-700 mb-6">
                                Мы осуществляем доставку шин и дисков по всей Беларуси. При заказе на сумму от 100 BYN доставка осуществляется бесплатно. Наши сроки доставки составляют от 3 до 5 рабочих дней в зависимости от региона.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Заказы обрабатываются в течение 1-2 дней. В случае необходимости уточнения деталей заказа или вопросов по доставке, свяжитесь с нашим менеджером.
                            </p>
                            <p className="text-lg text-gray-700">
                                Свяжитесь с нашим менеджером по телефону: <a href="tel:+375297885891" className="text-blue-700 font-semibold underline">+375 29 788 5891</a>.
                            </p>
                        </div>
                    </section>

                    <section className="mb-24 text-center">
                        <div className="bg-white p-10 rounded-xl shadow-lg">
                            <div className="flex justify-center items-center gap-4 mb-6">

                                <ShieldCheck className="text-blue-600" size={40} />
                                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Гарантия</h2>
                            </div>
                            <p className="text-lg text-gray-700 mb-6">
                                Мы предоставляем гарантию на все товары, купленные в нашем интернет-магазине. Гарантия действует на протяжении всего срока эксплуатации товаров при соблюдении правил использования.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Гарантия не распространяется на шины и диски, которые утратили свои потребительские свойства вследствие:
                            </p>
                            <ul className="list-disc pl-8 text-lg text-gray-700 mb-6 text-left max-w-2xl mx-auto">
                                <li>Применения неподходящего размера или типа колесного диска;</li>
                                <li>Превышения установленного скоростного режима;</li>
                                <li>Повреждений, вызванных аварией или неправильной установкой;</li>
                                <li>Неправильного хранения шин и дисков.</li>
                            </ul>
                            <p className="text-lg text-gray-700">
                                Если у вас возникли вопросы по гарантии, свяжитесь с нашим менеджером по телефону:
                                <a href="tel:+375297885891" className="text-blue-700 font-semibold underline">+375 29 788 5891</a>.
                            </p>
                        </div>
                    </section>

                    <section className="text-center">
                        <div className="bg-white p-10 rounded-xl shadow-lg">
                            <div className="flex justify-center items-center gap-4 mb-6">

                                <PhoneCall className="text-blue-600" size={40} />
                                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Свяжитесь с нами</h2>
                            </div>
                            <p className="text-lg text-gray-700">
                                Если у вас возникли вопросы по поводу заказа, оплаты или доставки, наш менеджер всегда готов помочь вам. Свяжитесь с нами по телефону:
                                <a href="tel:+375297885891" className="text-blue-700 font-semibold underline">+375 29 788 5891</a>.
                            </p>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
}
