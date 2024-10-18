'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            localStorage.setItem('isAdmin', 'true');
            router.push('/admin/orders');
        } else {
            setError('Неправильный email или пароль.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Админ логин</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full p-2 mb-4 border"
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full p-2 mb-4 border"
                />
                {error && <p className="text-red-600 mb-4">{error}</p>}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Войти</button>
            </form>
        </div>
    );
};

export default AdminLogin;
