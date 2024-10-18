'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrdersPage from '@/app/admin/orders/AdminOrders';
const AdminOrders = () => {
    const router = useRouter();

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== 'true') {
            router.push('/admin/login');         }
    }, [router]);

    return (
        <div>
            <OrdersPage /> {}
        </div>
    );
};

export default AdminOrders;
