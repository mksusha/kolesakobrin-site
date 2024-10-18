import {useState} from 'react';

interface FiltersProps {
    onFilterChange: (filters: {
        height: string | null,
        color: string | null,
        manufacturer: string | null,
        diameter: string | null,
        color_name: string | null,
        name: string | null,
    }) => void;
}

const RimFilters = ({onFilterChange}: FiltersProps) => {
    const [height, setHeight] = useState<string | null>(null);
    const [color, setColor] = useState<string | null>(null);
    const [manufacturer, setManufacturer] = useState<string | null>(null);
    const [diameter, setDiameter] = useState<string | null>(null);
    const [color_name, setColorName] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);


    const handleApplyFilters = () => {
    };


    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {}
                <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-600">Диаметр</label>
                    <select
                        id="height"
                        name="height"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={height || ''}
                        onChange={(e) => setHeight(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>

                    </select>
                </div>

                {}
                <div>
                    <label htmlFor="color" className="block text-sm font-medium text-gray-600">Цвет</label>
                    <select
                        id="color"
                        name="color"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={color || ''}
                        onChange={(e) => setColor(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="Черный">Черный</option>
                        <option value="Белый">Белый</option>
                        <option value="Графитовый">Графитовый</option>
                        <option value="Серебристый">Серебристый</option>
                    </select>
                </div>

                {}
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
                        <option value="Alcasta">Alcasta</option>
                        <option value="Alutec">Alutec</option>
                        <option value="Anzio">Anzio</option>
                        <option value="Arrivo">Arrivo</option>
                        <option value="ASTERRO">ASTERRO</option>
                        <option value="Carwel">Carwel</option>
                        <option value="CROSS STREET">CROSS STREET</option>
                        <option value="EURODISK">EURODISK</option>
                        <option value="iFree">iFree</option>
                        <option value="Jantsa">Jantsa</option>
                        <option value="K&K">K&K</option>
                        <option value="k7">k7</option>
                        <option value="LegeArtis">LegeArtis</option>
                        <option value="MAK">MAK</option>
                        <option value="Magnetto Wheels">Magnetto Wheels</option>
                        <option value="MEGAMI">MEGAMI</option>
                        <option value="NZ">NZ</option>
                        <option value="Remain">Remain</option>
                        <option value="Replay">Replay</option>
                        <option value="Rial">Rial</option>
                        <option value="SDT">SDT</option>
                        <option value="SKAD">SKAD</option>
                        <option value="Steger">Steger</option>
                        <option value="Top Driver">Top Driver</option>
                        <option value="Trebl">Trebl</option>
                        <option value="ТЗСК">ТЗСК</option>
                        <option value="Вектор">Вектор</option>
                        <option value="Wheels UP">Wheels UP</option>
                        <option value="X-Race">X-Race</option>
                        <option value="YST">YST</option>
                        <option value="Yokatta">Yokatta</option>

                    </select>
                </div>

                {}
                <div>
                    <label htmlFor="diameter" className="block text-sm font-medium text-gray-600">Диаметр ЦО</label>
                    <select
                        id="diameter"
                        name="diameter"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={diameter || ''}
                        onChange={(e) => setDiameter(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="54,1">54,1</option>
                        <option value="56,1">56,1</option>
                        <option value="56,6">56,6</option>
                        <option value="57,1">57,1</option>
                        <option value="58,5">58,5</option>
                        <option value="58,6">58,6</option>
                        <option value="60,1">60,1</option>
                        <option value="60,3">60,3</option>
                        <option value="63,3">63,3</option>
                        <option value="63,35">63,35</option>
                        <option value="63,4">63,4</option>
                        <option value="65,0">65,0</option>
                        <option value="65,1">65,1</option>
                        <option value="66,1">66,1</option>
                        <option value="67,1">67,1</option>
                        <option value="69,1">69,1</option>
                        <option value="70,2">70,2</option>
                        <option value="72,6">72,6</option>
                        <option value="78,5">78,5</option>
                        <option value="84,1">84,1</option>
                        <option value="89,1">89,1</option>
                        <option value="95,1">95,1</option>
                        <option value="98,0">98,0</option>
                        <option value="98,5">98,5</option>
                        <option value="100,1">100,1</option>
                        <option value="106,1">106,1</option>
                        <option value="106,2">106,2</option>
                        <option value="108,5">108,5</option>
                        <option value="108,6">108,6</option>
                        <option value="109,0">109,0</option>
                        <option value="130,1">130,1</option>
                        <option value="130,5">130,5</option>
                        <option value="138,8">138,8</option>
                        <option value="139">139</option>
                        <option value="161">161</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="color_name" className="block text-sm font-medium text-gray-600">Тип</label>
                    <select
                        id="color_name"
                        name="color_name"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={color_name || ''}
                        onChange={(e) => setColorName(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="Литой">Литой</option>
                        <option value="Штампованный">Штампованный</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">Разболтовка(PCD)</label>
                    <select
                        id="name"
                        name="name"
                        className="mt-1 block w-full pl-4 pr-10 py-3 border border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm shadow-sm"
                        value={name || ''}
                        onChange={(e) => setName(e.target.value || null)}
                    >
                        <option value="">Все</option>
                        <option value="4/98">4/98</option>
                        <option value="4/100">4/100</option>
                        <option value="4/108">4/108</option>
                        <option value="4/114,3">4/114,3</option>
                        <option value="5/100">5/100</option>
                        <option value="5/105">5/105</option>
                        <option value="5/108">5/108</option>
                        <option value="5/110">5/110</option>
                        <option value="5/112">5/112</option>
                        <option value="5/114,3">5/114,3</option>
                        <option value="5/115">5/115</option>
                        <option value="5/118">5/118</option>
                        <option value="5/120">5/120</option>
                        <option value="5/127">5/127</option>
                        <option value="5/130">5/130</option>
                        <option value="5/139,7">5/139,7</option>
                        <option value="5/150">5/150</option>
                        <option value="5/160">5/160</option>
                        <option value="6/114,3">6/114,3</option>
                        <option value="6/127">6/127</option>
                        <option value="6/130">6/130</option>
                        <option value="6/139,7">6/139,7</option>
                        <option value="6/170">6/170</option>
                        <option value="6/180">6/180</option>
                        <option value="6/205">6/205</option>

                    </select>
                </div>

            </div>

            {}
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

export default RimFilters;
