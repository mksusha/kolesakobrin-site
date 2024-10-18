import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import {CheckCircle, Award, Globe, ThumbsUp} from 'lucide-react'; 
export default function AboutUs() {
    return (
        <div>
            <Header />
            <main className="bg-blue-50 py-16">
                <div className="container mx-auto max-w-screen-lg px-4">
                    <h1 className="text-center text-4xl font-bold mb-12 text-gray-900">О нас</h1>

                    <section className="text-center mb-16">
                        <p className="text-lg leading-relaxed text-gray-700">
                            Интернет-магазин «Все шины» предлагает широкий ассортимент шин и дисков от ведущих
                            производителей. Мы предоставляем только проверенные и надежные товары, которые помогут
                            обеспечить максимальную безопасность и комфорт вашего автомобиля.
                        </p>
                        <p className="mt-6 text-lg leading-relaxed text-gray-700">
                            Сотрудничая с нами, вы можете быть уверены в качестве продукции и доступности цен. Наша
                            компания стремится сделать процесс покупки удобным и быстрым, предлагая бесплатную доставку
                            по всей Беларуси для заказов свыше 100 BYN.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <CheckCircle name="check-circle" className="mx-auto text-blue-500 mb-4" size={48}/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Надежные товары</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Мы предлагаем только проверенные товары от лучших производителей с гарантией качества.
                                Наши товары проходят тщательную проверку перед отправкой покупателю.
                            </p>
                        </div>

                        {}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <Award name="award" className="mx-auto text-blue-500 mb-4" size={48}/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Многолетний опыт</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Наша компания имеет многолетний опыт работы на рынке шин и дисков. Мы знаем, что нужно
                                нашим клиентам, и готовы предложить только лучшее.
                            </p>
                        </div>

                        {}
                        <div className="bg-white p-8 rounded-2xl  shadow-md">
                            <Globe name="globe" className="mx-auto text-blue-500 mb-4" size={48}/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Доставка по всей стране</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Мы доставляем заказы по всей Беларуси. Быстрая и бесплатная доставка при заказе от 100
                                BYN гарантирует, что ваши товары прибудут вовремя.
                            </p>
                        </div>
                    </section>


                    <section className="mt-12 py-12">
                        <div className="max-w-[1370px] mx-auto text-center">
                            <div
                                className="bg-white p-8 rounded-2xl shadow-md mx-auto"> {}
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Почему выбирают нас?</h2>
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                                    {}
                                    <div className="relative mb-8 lg:mb-0">
                                        <div
                                            className="bg-white p-6 rounded-full shadow-lg transition transform hover:scale-105 duration-300">
                                            <ThumbsUp size={64} className="text-blue-600"/>
                                        </div>
                                    </div>
                                    {}
                                    <div className="text-center max-w-3xl px-6 mb-4">
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Выбирая нас, вы выбираете качество, надёжность и высокий уровень сервиса. Мы
                                            предлагаем только проверенные товары от лучших производителей, гарантируя,
                                            что каждый товар проходит строгий контроль перед отправкой. Мы заботимся о
                                            каждом клиенте, делая процесс покупки лёгким и удобным. Желаем вам приятных
                                            покупок!
                                        </p>
                                    </div>


                                </div>

                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md mx-auto mt-16">
                                {}
                                <div className="text-center max-w-3xl mx-auto px-6 mb-4">
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        ИП Жуковец Мария Александровна зарегистрирована решением Берёзовского районного
                                        исполнительного комитета №0362932 от 10 сентября 2013 года. УНП 291182652,
                                        Брестская обл., Березовский район, аг. Стригинь, ул. Новская, 19. Сайт «Шина М1
                                        Бай» зарегистрирован в Торговом реестре 30 мая 2023 года.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                        <strong>Режим работы:</strong> Брестская обл., Березовский район, аг. Стригинь,
                                        ул. Новская, 19. Понедельник-суббота: с 10:00 до 20:00, воскресенье — выходной.
                                        г. Дрогичин, ул. Мира 1. Вторник-суббота: с 10:00 до 17:30, воскресенье и
                                        понедельник — выходные.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </section>


                </div>
            </main>
            <Footer/>
        </div>
    );
}
