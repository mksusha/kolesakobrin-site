import { useState } from 'react';

interface FiltersProps {
    onFilterChange: (filters: { width: string | null, height: string | null, season: string | null, manufacturer: string | null }) => void;
}

const Filters = ({ onFilterChange }: FiltersProps) => {
    const [width, setWidth] = useState<string | null>(null);
    const [height, setHeight] = useState<string | null>(null);
    const [season, setSeason] = useState<string | null>(null);
    const [manufacturer, setManufacturer] = useState<string | null>(null);

        const handleApplyFilters = () => {
        console.log({ width, height, season, manufacturer });         onFilterChange({ width, height, season, manufacturer });
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div>
                    <label htmlFor="width" className="block text-sm font-medium text-gray-600">Ширина</label>
                    <select
                        id="width"
                        name="width"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={width || ''}
                        onChange={(e) => setWidth(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="35">35</option>
                        <option value="135">135</option>
                        <option value="145">145</option>
                        <option value="155">155</option>
                        <option value="165">165</option>
                        <option value="175">175</option>
                        <option value="185">185</option>
                        <option value="195">195</option>
                        <option value="205">205</option>
                        <option value="215">215</option>
                        <option value="225">225</option>
                        <option value="235">235</option>
                        <option value="245">245</option>
                        <option value="255">255</option>
                        <option value="265">265</option>
                        <option value="275">275</option>
                        <option value="285">285</option>
                        <option value="295">295</option>
                        <option value="305">305</option>
                        <option value="315">315</option>
                        <option value="325">325</option>
                        <option value="335">335</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-600">Высота</label>
                    <select
                        id="height"
                        name="height"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={height || ''}
                        onChange={(e) => setHeight(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                        <option value="60">60</option>
                        <option value="65">65</option>
                        <option value="70">70</option>
                        <option value="75">75</option>
                        <option value="80">80</option>
                        <option value="85">85</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="season" className="block text-sm font-medium text-gray-600">Сезон</label>
                    <select
                        id="season"
                        name="season"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={season || ''}
                        onChange={(e) => setSeason(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="Лето">Лето</option>
                        <option value="Зима">Зима</option>
                        <option value="Межсезонье">Межсезонье</option>

                    </select>
                </div>


                <div>
                    <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-600">Бренд</label>
                    <select
                        id="manufacturer"
                        name="manufacturer"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={manufacturer || ''}
                        onChange={(e) => setManufacturer(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="Austone">Austone</option>
                        <option value="Belshina">Белшина</option>
                        <option value="Bridgestone">Bridgestone</option>
                        <option value="Continental">Continental</option>
                        <option value="Delinte">Delinte</option>
                        <option value="Double Star">Double Star</option>
                        <option value="Falken">Falken</option>
                        <option value="Formula">Formula</option>
                        <option value="Gislaved">Gislaved</option>
                        <option value="GoodYear">GoodYear</option>
                        <option value="Hankook">Hankook</option>
                        <option value="Ikon">Ikon</option>
                        <option value="Imperial">Imperial</option>
                        <option value="Kama">Кама</option>
                        <option value="Kleber">Kleber</option>
                        <option value="Lassa">Lassa</option>
                        <option value="Laufenn">Laufenn</option>
                        <option value="Leao">Leao</option>
                        <option value="Matador">Matador</option>
                        <option value="Maxxis">Maxxis</option>
                        <option value="Michelin">Michelin</option>
                        <option value="Mirage">Mirage</option>
                        <option value="Nokian">Nokian</option>
                        <option value="Pirelli">Pirelli</option>
                        <option value="Roadstone">Roadstone</option>
                        <option value="Sailun">Sailun</option>
                        <option value="Superia">Superia</option>
                        <option value="Torero">Torero</option>
                        <option value="Toyo">Toyo</option>
                        <option value="Triangle">Triangle</option>
                        <option value="Viatti">Viatti</option>
                        <option value="WestLake">WestLake</option>
                        <option value="Yokohama">Yokohama</option>

                    </select>
                </div>
            </div>


            <div className="mt-6 flex justify-center">
                <button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform "
                    onClick={handleApplyFilters}
                >
                    Применить фильтры
                </button>
            </div>
        </div>
    );
};

export default Filters;
