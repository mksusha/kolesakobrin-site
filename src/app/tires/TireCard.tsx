import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Snowflake, Sun, SunSnow } from "lucide-react";
import OrderForm from '../components/OrderForm';

interface Tire {
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

const TireCard = ({ tire }: { tire: Tire }) => {
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
                        className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-full hover:bg-blue-600 w-auto"
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


export default TireCard;
