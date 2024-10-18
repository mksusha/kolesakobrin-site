import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/app/components/Modal';
import OrderFormRim from '@/app/components/OrderFormRim';

export interface Rim {
    id: number;
    name: string;
    manufacturer: string;
    image_url: string;
    width?: number;
    height?: string;
    bolts?: string;
    depth?: string;
    price?: number;
    color?: string;
    rim_model?: string;
    model?: string;
    size?: string;
    color_name?: string;
    diameter?: number;
    quantity?: number;
    bolt_pattern?: string;
    et?: string;
    hub_diameter?: string;
}

interface RimCardProps {
    rim: Rim;
}

const RimCard = ({rim}: RimCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'order' | 'notify' | null>(null);
    const formattedPrice = rim.price !== undefined
        ? `${rim.price} BYN`
        : 'Нет в наличии';

    const colorStyles: { [key: string]: string } = {
        'Чёрный': 'bg-black',
        'Черный': 'bg-black',
        'Белый': 'bg-white border border-gray-300',
        'Графитовый': 'bg-gray-600',
        'Серебристый': 'bg-gray-300',
    };

    const colorClass = rim.color && typeof rim.color === 'string'
        ? colorStyles[rim.color] || 'bg-transparent'
        : 'bg-transparent';

    const handleOrderClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModalType('order');
        setIsModalOpen(true);
    };

    const handleNotifyClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModalType('notify');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType(null);
    };

    return (
        <div
            className="relative border rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition duration-300 flex flex-col justify-between h-full p-4 w-full">
            {}
            <Link href={`/rims/${rim.id}`} className="block">
                <div>
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-2">{`ET${rim.depth || ''} ${rim.name}`}</h2>
                    </div>

                    <div className="flex justify-center mb-4">
                        <Image
                            src={rim.image_url || '/placeholder.png'}
                            alt={rim.name}
                            width={150}
                            height={150}
                            className="object-cover"
                        />
                    </div>

                    <div className="text-center">
                        <p className="text-gray-500">{rim.manufacturer || 'Производитель неизвестен'}</p>
                        <p className={`text-xl font-semibold mt-2 ${rim.price ? 'text-red-600' : 'text-gray-600'}`}>
                            {formattedPrice}
                        </p>
                        <p className="text-gray-600 mt-1">Модель: {rim.model || 'Не указано'}</p>

                        <div className="flex items-center justify-center mt-1">
                            <div className={`w-4 h-4 rounded-sm mr-2 ${colorClass}`}/>
                            <p className="text-gray-600">{rim.color_name || 'Не указано'}</p>
                        </div>
                        <p className="text-gray-600 mt-2">Размер: {rim.width}x{rim.height}</p>
                        {rim.diameter && (
                            <p className="text-gray-600 mt-1">D{rim.diameter}</p>
                        )}
                    </div>
                </div>
            </Link>

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

            {isModalOpen && modalType === 'order' && (
                <Modal title="Заказ диска" onClose={handleCloseModal}>
                    <OrderFormRim
                        rim={{
                            ...rim,
                            price: rim.price ?? 0,
                            diameter: rim.diameter ?? 0
                        }}
                        onClose={handleCloseModal}

                    />
                </Modal>
            )}

            {isModalOpen && modalType === 'notify' && (
                <Modal title="Уведомление о поступлении" onClose={handleCloseModal}>
                    <OrderFormRim
                        rim={{
                            ...rim,
                            price: 0,
                            diameter: rim.diameter ?? 0
                        }}
                        onClose={handleCloseModal}

                    />
                </Modal>
            )}

        </div>
    );
};

export default RimCard;
