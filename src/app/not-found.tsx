import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-blue-50">
            <div className="bg-white p-10 rounded-xl shadow-lg text-center transition-all hover:shadow-xl duration-300 ease-in-out"> {}
                <AlertTriangle size={64} className="text-blue-600 mx-auto mb-6 animate-bounce" />
                <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-700 mb-6">Извините, страница не найдена.</p>
                <Link href="/">
                    <span className="text-blue-600 no-underline text-lg font-semibold bg-blue-100 px-4 py-2 rounded-lg transition hover:bg-blue-600 hover:text-white duration-200"> {}
                        Вернуться на главную
                    </span>
                </Link>
            </div>
        </div>
    );
}
