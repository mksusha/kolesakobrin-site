import Header from "@/app/components/Header";
import ProductSection from "@/app/tires/ProductCard";
import { supabase } from '@/lib/supabaseClient';

import AboutUsSection from "@/app/components/About";
import Footer from "@/app/components/Footer";

import RimSection from "@/app/components/RimCard";

async function fetchProducts() {
    const randomProductIds = [44, 1050, 3402, 5121]; 
    const { data: products, error } = await supabase
        .from("tires")         .select("*")
        .in("id", randomProductIds); 
    if (error) {
                return [];
    }

    return products || [];
}
async function fetchRims() {
    const { data: rims, error } = await supabase
        .from('rims')
        .select('id, name, manufacturer, image_url, price, width, height, diameter, bolts, depth, color, color_name, model')
        .limit(4);  
    if (error) {
                return [];
    }

    return rims || [];
}

export default async function Home() {
    const products = await fetchProducts();     const rims = await fetchRims(); 
    return (
        <main className="min-h-screen bg-white">
            {}
            <Header/>

            {}
            <section className="w-full bg-blue-50 py-20">
                <div className="container max-w-[1370px] mx-auto text-center">
                    <h1 className="text-4xl font-bold text-black mb-4">
                        Интернет-магазин «Все шины» — шины по низким ценам
                    </h1>
                    <p className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed mb-8">
                        Интернет-магазин «Все шины» решит вашу проблему. Благодаря прямым поставкам шин
                        с оптовых складов предприятий-изготовителей вы имеете возможность купить шины
                        и диски по низким ценам и с бесплатной доставкой.
                    </p>

                    {}
                    <a
                        href="/about"
                        className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition duration-300"
                    >
                        Подробнее
                    </a>
                </div>
            </section>

            {}
            <section className="my-12">
                <div className="container max-w-[1370px] mx-auto">
                    <ProductSection products={products}/>
                </div>
            </section>

            <section className="my-12">
                <div className="container max-w-[1370px] mx-auto">
                    <RimSection rims={rims}/>
                </div>
            </section>

            <AboutUsSection></AboutUsSection>
            <Footer/>

        </main>
    );
}
