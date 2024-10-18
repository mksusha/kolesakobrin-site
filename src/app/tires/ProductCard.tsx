'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Snowflake, Sun, SunSnow } from "lucide-react";
import OrderForm from '../components/OrderForm';
import { supabase } from '@/lib/supabaseClient';
import {useState} from "react";
export interface Tire {
    id: number;
    name: string;
    manufacturer: string;
    image_url: string;
    price: number;
    quantity: number;
    season: string;
    width?: number;
    height?: number;
    radius?: number;
}

const ProductCard = ({ tire }: { tire: Tire }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dimensions = tire.width && tire.height ?
        `${tire.width}/${tire.height}${tire.radius ? '/' + tire.radius : ''}` :
        'Не указано';

    const formattedPrice = `${tire.price} BYN`;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="relative border rounded-lg shadow-md bg-white rounded-xl cursor-pointer hover:shadow-lg transition duration-300 flex flex-col justify-between h-full p-4 w-full">
                <Link href={`/tires/${tire.id}`} className="block">
                    <div>
                        <div className="absolute top-3 left-3">
                            {tire.season === 'Зима' ? (
                                <Snowflake className="w-10 h-10 text-blue-500"/>
                            ) : tire.season === 'Лето' ? (
                                <Sun className="w-10 h-10 text-yellow-500"/>
                            ) : (
                                <div className="relative w-10 h-10">
                                    <SunSnow className="absolute w-10 h-10 text-yellow-500"
                                             style={{clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)'}}/>
                                    <SunSnow className="absolute w-10 h-10 text-blue-500"
                                             style={{clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'}}/>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center mb-4">
                            <Image
                                src={tire.image_url || '/placeholder.png'}
                                alt={tire.name}
                                width={150}
                                height={150}
                                className="object-cover-tires"
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-2">{tire.name}</h2>
                            <p className="text-gray-500">{tire.manufacturer}</p>
                            <p className="text-red-600 text-lg font-semibold mt-2">{formattedPrice}</p>
                            <p className="text-gray-600 mt-2">Размеры: {dimensions}</p>

                        </div>
                    </div>
                </Link>

                <div className="flex justify-center mt-2">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-auto mt-2"
                        onClick={openModal}
                    >
                        Заказать
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
                    onClick={e => e.currentTarget === e.target && closeModal()}
                    style={{height: '100vh', width: '100vw'}}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg relative z-60">
                        <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Оформить заказ</h2>
                        <OrderForm tire={tire} onClose={closeModal}/>
                    </div>
                </div>
            )}
        </>
    );
};

export async function getServerSideProps() {
        const { data: products, error } = await supabase
        .from('tires')
        .select('id, name, manufacturer, image_url, price, quantity, width, height, radius');

        if (error) {
                return { props: { products: [] } };     }

        return {
        props: {
            products: products || [],         },
    };
}
const ProductSection = ({ products }: { products: Tire[] }) => {
    return (
        <section className="my-12">
            <div className="container max-w-[1370px] mx-auto">
                {}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Наш ассортимент шин</h2>
                    <p className="text-lg text-gray-700 max-w-[800px] mx-auto leading-relaxed">
                        Мы предлагаем широкий выбор шин для различных автомобилей. От зимних и летних шин до всесезонных — вы найдете подходящий вариант для любых условий вождения. Наши шины гарантируют качество и долговечность.
                    </p>
                </div>

                {}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <ProductCard key={index} tire={product} />
                        ))
                    ) : (
                        <p className="text-gray-700 text-lg text-center col-span-full">
                            В данный момент товары отсутствуют.
                        </p>
                    )}
                </div>

                {}
                <div className="text-center">
                    <a
                        href="/tires"                          className="inline-block bg-transparent border border-blue-500 text-blue-500 py-3 px-8 rounded-full text-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Посмотреть все шины
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
