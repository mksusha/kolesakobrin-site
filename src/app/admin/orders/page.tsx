'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  import { supabase } from '@/lib/supabaseClient';

interface Order {
    id: number;
    rim_model?: string;
    tire_name?: string;
    tire_price?: number;
    tire_size?: string;
    rim_name?: string;
    rim_price?: number;
    rim_size?: string;
    buyer_name: string;
    buyer_email: string;
    buyer_phone: string;
    comment: string;
    quantity: number;
    created_at: string;
    is_processed: boolean;
    order_type: 'tire' | 'rim';
}

const OrdersPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filterProcessed, setFilterProcessed] = useState<'all' | 'processed' | 'unprocessed'>('all');
    const [filterType, setFilterType] = useState<'all' | 'tire' | 'rim'>('all');
    const router = useRouter();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (!isAdmin || isAdmin !== 'true') {
            router.push('/admin/login');
        }
    }, [router]);

    if (!localStorage.getItem('isAdmin')) return null;

    useEffect(() => {
        fetchOrders();
    }, [filterProcessed, filterType]);

    const fetchOrders = async () => {
        let query = supabase.from('orders').select('*');
        if (filterProcessed === 'processed') {
            query = query.eq('is_processed', true);
        } else if (filterProcessed === 'unprocessed') {
            query = query.eq('is_processed', false);
        }

        if (filterType === 'tire') {
            query = query.eq('order_type', 'tire');
        } else if (filterType === 'rim') {
            query = query.eq('order_type', 'rim');
        }

        const { data, error } = await query;
        if (error) {
                    } else {
            setOrders(data || []);
        }
    };

    const toggleProcessed = async (id: number, currentStatus: boolean) => {
        const { error } = await supabase
            .from('orders')
            .update({ is_processed: !currentStatus })
            .eq('id', id);

        if (!error) {
            fetchOrders();
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Заказы</h1>

            <div className="mb-4">
                <label className="mr-4">Фильтр по обработке:</label>
                <select
                    value={filterProcessed}
                    onChange={(e) => setFilterProcessed(e.target.value as 'all' | 'processed' | 'unprocessed')}
                    className="p-2 border rounded"
                >
                    <option value="all">Все</option>
                    <option value="processed">Обработанные</option>
                    <option value="unprocessed">Необработанные</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="mr-4">Фильтр по типу заказа:</label>
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as 'all' | 'tire' | 'rim')}
                    className="p-2 border rounded"
                >
                    <option value="all">Все</option>
                    <option value="tire">Шины</option>
                    <option value="rim">Диски</option>
                </select>
            </div>

            {}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                    <tr>
                        <th className="py-3 px-4 border">Модель</th>
                        <th className="py-3 px-4 border">Цена</th>
                        <th className="py-3 px-4 border">Размер</th>
                        <th className="py-3 px-4 border">Имя покупателя</th>
                        <th className="py-3 px-4 border">Email</th>
                        <th className="py-3 px-4 border">Телефон</th>
                        <th className="py-3 px-4 border">Количество</th>
                        <th className="py-3 px-4 border">Дата создания</th>
                        <th className="py-3 px-4 border">Обработан</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-100 transition duration-150">
                            <td className="py-2 px-4 border">{order.rim_model ? `${order.rim_model} ${order.rim_name}` : order.tire_name}</td>
                            <td className="py-2 px-4 border">{order.tire_price || order.rim_price} BYN</td>
                            <td className="py-2 px-4 border">{order.tire_size || order.rim_size}</td>
                            <td className="py-2 px-4 border">{order.buyer_name}</td>
                            <td className="py-2 px-4 border">{order.buyer_email}</td>
                            <td className="py-2 px-4 border">{order.buyer_phone}</td>
                            <td className="py-2 px-4 border">{order.quantity}</td>
                            <td className="py-2 px-4 border">{new Date(order.created_at).toLocaleDateString()}</td>
                            <td className="py-2 px-4 border text-center">
                                <input
                                    type="checkbox"
                                    checked={order.is_processed}
                                    onChange={() => toggleProcessed(order.id, order.is_processed)}
                                    className="form-checkbox h-5 w-5"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersPage;
