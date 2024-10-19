
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//
//
// async function addProduct(product) {
//     const { data, error } = await supabase
//         .from('tires')          .insert([
//             {
//                 name: product.name,
//                 manufacturer: product.manufacturer,
//                 price: product.price,
//                 image_url: product.image_url,
//                 quantity: product.quantity,
//                 type: product.type,
//                 width: product.width,
//                 height: product.height,
//                 radius: product.radius,
//                 season: product.season,
//                 product_type: product.product_type,
//             },
//         ]);
//
//     if (error) {
//             } else {
//             }
// }
//
