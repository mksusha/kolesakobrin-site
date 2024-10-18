import {supabase} from '@/lib/supabaseClient';

export async function POST(req: Request) {
    try {

        const {
            name,
            email,
            phone,

            comment,
            quantity,
            tire_name,
            tire_price,
            tire_size,
            rim_name,
            rim_price,
            rim_size,
            bolt_pattern,
            et,
            hub_diameter,
            rim_model

        } = await req.json();


        console.log("Received data:", {
            name,
            email,
            phone,

            comment,
            quantity,
            tire_name,
            tire_price,
            tire_size,
            rim_name,
            rim_price,
            rim_size,
            bolt_pattern,
            et,
            hub_diameter
        });


        if (!name || !email || !phone || !quantity) {
            return new Response(JSON.stringify({message: 'Заполните все обязательные поля'}), {status: 400});
        }

        let insertData: any = {
            buyer_name: name,
            buyer_email: email,
            buyer_phone: phone,

            comment,
            quantity,
            order_type: tire_name ? 'tire' : 'rim',
        };


        if (tire_name && tire_price && tire_size) {
            insertData = {
                ...insertData,
                tire_name,
                tire_price,
                tire_size,
            };
        }


        if (rim_name && rim_price && rim_size && rim_model) {
            insertData = {
                ...insertData,
                rim_name,
                rim_price,
                rim_size,
                rim_model
            };
        }


        const {error} = await supabase.from('orders').insert([insertData]);

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify({message: 'Заказ успешно отправлен'}), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify({message: 'Ошибка при сохранении заказа'}), {status: 500});
    }
}
