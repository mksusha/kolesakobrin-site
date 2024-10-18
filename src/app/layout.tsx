import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistRegular = localFont({
    src: "./fonts/Roboto-Regular.woff2",
    variable: "--font-geist-regular",
    weight: "100 900",
});
const geistBold = localFont({
    src: "./fonts/Roboto-Bold.woff2",
    variable: "--font-geist-bold",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Все шины",
    description:
        "Все шины — это интернет-магазин шин и дисков с широким выбором продукции для всех типов автомобилей. Удобный поиск по параметрам, фильтры и подробные карточки товаров помогут легко найти и заказать нужную продукцию. Мы предлагаем конкурентные цены, качественные товары от ведущих производителей и быструю доставку. Подберите идеальные шины для вашего автомобиля прямо сейчас!",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Все шины — интернет-магазин",
        description:
            "Широкий выбор шин и дисков для всех типов автомобилей. Удобный поиск, фильтры, подробные карточки товаров.",
        url: "https://kolesakobrin.by",
        type: "website",
        locale: "ru_RU",
    },
    keywords: [
        "шины",
        "диски",
        "интернет-магазин",
        "автомобильные шины",
        "автошины",
        "диски для авто",
    ],
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body className={`${geistRegular.variable} ${geistBold.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
