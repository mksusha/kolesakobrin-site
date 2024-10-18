'use client';

import {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import {supabase} from '@/lib/supabaseClient';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import OrderFormRim from '@/app/components/OrderFormRim';
import RimCard from "@/app/rims/RimCard";

const RimDetails = () => {
    const {id} = useParams();
    const [rim, setRim] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [similarRims, setSimilarRims] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'order' | 'notify' | null>(null);

    useEffect(() => {
        const fetchRimDetails = async () => {
            const {data, error} = await supabase
                .from('rims')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
            } else {
                setRim(data);
            }

            setLoading(false);
        };

        const fetchSimilarRims = async () => {
            const {data: rims, error} = await supabase
                .from('rims')
                .select('*')
                .neq('id', id)
                .limit(4);
            if (error) {
            } else {
                setSimilarRims(rims || []);
            }
        };

        if (id) {
            fetchRimDetails();
            fetchSimilarRims();
        }
    }, [id]);

    const handleOrderClick = () => {
        setModalType('order');
        setIsModalOpen(true);
    };

    const handleNotifyClick = () => {
        setModalType('notify');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    if (loading) {
        return <p className="text-center py-10">Загрузка...</p>;
    }

    if (!rim) {
        return <p className="text-center py-10">Диск не найден</p>;
    }

    return (
        <div>
            <Header/>
            <main className="w-full bg-blue-50 py-16">
                <div className="container mx-auto">
                    <div
                        className="bg-white p-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-center">
                        <div className="w-64 h-64 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                            <img
                                src={rim.image_url}
                                alt={rim.name}
                                className="w-full h-full object-contain border border-gray-300 rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="flex-1 text-center">
                            <h1 className="text-4xl font-bold mb-6 text-gray-900">{rim.model}</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pl-10 pr-10">
                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li>
                                        <strong>Производитель:</strong> {rim.manufacturer}
                                    </li>
                                    <li>
                                        <strong>Размеры:</strong> {rim.width}/{rim.height}
                                    </li>
                                    <li>
                                        <strong>Цвет:</strong> {rim.color_name}
                                    </li>
                                    <li>
                                        <strong>Разболтовка:</strong> {rim.bolts}
                                    </li>
                                </ul>

                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li>
                                        <strong>Цена:</strong> {rim.price ? `${rim.price} BYN` : 'Нет в наличии'}
                                    </li>
                                    <li>
                                        <strong>Диаметр:</strong> {rim.diameter}
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

                            <div className="text-center mt-2">
                                {rim.price ? (
                                    <button
                                        onClick={handleOrderClick}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-600"
                                    >
                                        Заказать
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleNotifyClick}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-gray-600"
                                    >
                                        Узнать о поступлении
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
                    onClick={e => e.currentTarget === e.target && handleCloseModal()}
                    style={{height: '100vh', width: '100vw'}}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg relative z-60">
                        <button className="absolute top-2 right-2 text-gray-500" onClick={handleCloseModal}>
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-4">
                            {modalType === 'order' ? 'Оформить заказ' : 'Уведомить о поступлении'}
                        </h2>
                        {modalType && (
                            <OrderFormRim
                                rim={rim}
                                onClose={handleCloseModal}

                            />
                        )}


                    </div>
                </div>
            )}


            {}
            <section className="mt-12 bg-white py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {}
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Другие диски</h2>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {}
                        {similarRims.map((rim) => (
                            <RimCard key={rim.id} rim={rim}/>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>


        </div>
    );
};

export default RimDetails;
