import { useState } from 'react';
import Modal from './Modal';

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

interface OrderFormProps {
    tire: Tire;
    onClose: () => void;
}

const OrderForm = ({ tire, onClose }: OrderFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',

        comment: '',
        quantity: 1,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    tire_name: tire.name,
                    tire_price: tire.price,
                    tire_size: `${tire.width}/${tire.height}/${tire.radius}`,
                }),
            });

            if (response.ok) {
                alert('Ваш заказ успешно отправлен!');
            } else {
                alert('Произошла ошибка при отправке заказа.');
            }
        } catch (error) {
                        alert('Произошла ошибка при отправке заказа.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal title="Заказ шины"  onClose={onClose}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center a"> {}
                    <h2 className="text-xl font-semibold mb-2">Информация о шине:</h2>
                    <p><strong>Название:</strong> {tire.name}</p>
                    <p><strong>Цена:</strong> {tire.price} BYN</p>
                    <p><strong>Размеры:</strong> {tire.width}/{tire.height}/{tire.radius}</p>
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

export default OrderForm;
