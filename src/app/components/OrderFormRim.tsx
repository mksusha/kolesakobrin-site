import {useState} from 'react';
import Modal from './Modal';

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
    hub_diameter?: string;
}

interface OrderFormProps {
    rim: Rim;
    onClose: () => void;
}

const OrderFormRim = ({rim, onClose}: OrderFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',

        comment: '',
        quantity: 1,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const rimModel = rim.rim_model || rim.model;
        const rimPrice = rim.price || 0;
        const rimSize = rim.width && rim.height && rim.diameter ? `${rim.width}x${rim.height}, ${rim.diameter}` : 'Не указано';
        const rimName = rim.name || 'Не указано';
        const hubDiameter = rim.hub_diameter || 'Не указано';
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    rim_model: rimModel,
                    rim_price: rimPrice,
                    rim_size: rimSize,
                    rim_name: rimName,
                    hub_diameter: hubDiameter,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Ваш заказ успешно отправлен!');
            } else {
                alert(`Произошла ошибка при отправке заказа: ${data.message || 'неизвестная ошибка'}`);
            }
        } catch (error) {
            alert('Произошла ошибка при отправке заказа.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal title="Заказ диска" onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-2">Информация о диске:</h2>
                    <p><strong>Название:</strong> {rim.model}</p>
                    <p><strong>Производитель:</strong> {rim.manufacturer}</p>
                    <p><strong>Цена:</strong> {rim.price} BYN</p>
                    <p><strong>Размер:</strong> {rim.width}x{rim.height}</p>
                    <p><strong>Разболтовка:</strong> {rim.name}</p>
                    <p><strong>Диаметр:</strong> {rim.diameter}</p>

                </div>

                <input
                    type="text"
                    name="name"
                    placeholder="ФИО"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                />


                <textarea
                    name="comment"
                    placeholder="Комментарий"
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                />

                <input
                    type="number"
                    name="quantity"
                    placeholder="Количество"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    min="1"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
            </form>
        </Modal>
    );
};

export default OrderFormRim;
