'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import OrderForm from '@/app/components/OrderForm';
import TireCard from "@/app/tires/TireCard";

const TireDetails = () => {
    const { id } = useParams();
    const [tire, setTire] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [similarTires, setSimilarTires] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchTireDetails = async () => {
            const { data, error } = await supabase
                .from('tires')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                            } else {
                setTire(data);
            }

            setLoading(false);
        };

        const fetchSimilarTires = async () => {
            const { data: tires, error } = await supabase
                .from('tires')
                .select('*')
                .neq('id', id)
                .limit(4);
            if (error) {
                            } else {
                setSimilarTires(tires || []);
            }
        };

        if (id) {
            fetchTireDetails();
            fetchSimilarTires();
        }
    }, [id]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (loading) {
        return <p className="text-center py-10">Загрузка...</p>;
    }

    if (!tire) {
        return <p className="text-center py-10">Шина не найдена</p>;
    }

    return (
        <div>
            <Header />
            <main className="w-full bg-blue-50 py-16">
                <div className="container mx-auto">
                    <div className="bg-white p-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-center">
                        <div className="w-64 h-64 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                            <img
                                src={tire.image_url}
                                alt={tire.name}
                                className="w-full h-full object-contain border border-gray-300 rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="flex-1 text-center">
                            <h1 className="text-4xl font-bold mb-6 text-gray-900">{tire.name}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pl-10 pr-10">
                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li>
                                        <strong>Производитель:</strong> {tire.manufacturer}
                                    </li>
                                    <li>
                                        <strong>Категория:</strong> Легковые шины
                                    </li>
                                    <li>
                                        <strong>Размеры:</strong> {tire.width}/{tire.height}/{tire.radius || ''}
                                    </li>
                                    <li>
                                        <strong>Сезон:</strong> {tire.season}
                                    </li>
                                </ul>

                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li>
                                        <strong>Цена:</strong> {tire.price} BYN
                                    </li>
                                    <li>
                                        <strong>Гарантия:</strong>
                                        <Link href="/for-buyers" className="text-blue-600 underline ml-2">
                                            Гарантийные обязательства
                                        </Link>
                                    </li>
                                    <li>
                                        <strong>Доставка:</strong>
                                        <Link href="/for-buyers" className="text-blue-600 underline ml-2">
                                            Читать про доставку
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <button
                                className="bg-blue-600 text-white font-bold py-3 px-8 mt-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
                                onClick={openModal}
                            >
                                Заказать
                            </button>
                        </div>
                    </div>
                </div>
            </main>


            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
                    onClick={e => e.currentTarget === e.target && closeModal()}
                    style={{ height: '100vh', width: '100vw' }}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg relative z-60">
                        <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Оформить заказ</h2>
                        <OrderForm tire={tire} onClose={closeModal} />
                    </div>
                </div>
            )}



{}
            <section className="mt-12 bg-white py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Другие шины</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {similarTires.map((tire) => (
                            <TireCard key={tire.id} tire={tire} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TireDetails;
