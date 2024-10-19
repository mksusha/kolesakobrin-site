/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';
import { Rim } from '@/app/components/RimCard';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/app/components/Header';
import RimCard from '@/app/rims/RimCard';  import Footer from '@/app/components/Footer';
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from "lucide-react";
import RimFilters from '@/app/components/RimFilters';
const RimsPage = ({ searchParams }: { searchParams: { page?: string } }) => {
    const router = useRouter();
    const [rims, setRims] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);     const [loading, setLoading] = useState(true);
    const [noResults, setNoResults] = useState(false);
        const [filters, setFilters] = useState<{ height: string | null, color: string | null, manufacturer: string | null,diameter: string | null, color_name: string | null,name: string | null, }>({
        height: null,
        color: null,
        manufacturer: null,
        diameter: null,
        color_name: null,
        name: null,
    });

    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const limit = 8;

    const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
    const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(2);


    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 480) {
                setPageRangeDisplayed(1);
                setMarginPagesDisplayed(1);
            } else if (screenWidth <= 768) {
                setPageRangeDisplayed(3);
                setMarginPagesDisplayed(1);
            } else {
                setPageRangeDisplayed(5);
                setMarginPagesDisplayed(2);
            }
        };

                handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


        const fetchRims = async (updatedFilters = filters, page = currentPage) => {
        setLoading(true);

        let query = supabase.from('rims').select('*', { count: 'exact' });

                if (updatedFilters.height) {
            query = query.eq('height', updatedFilters.height);
        }
        if (updatedFilters.color) {
            query = query.eq('color', updatedFilters.color);
        }
        if (updatedFilters.manufacturer) {
            query = query.eq('manufacturer', updatedFilters.manufacturer);
        }
        if (updatedFilters.diameter) {
            query = query.eq('diameter', updatedFilters.diameter);
        }
        if (updatedFilters.color_name) {
            query = query.eq('color_name', updatedFilters.color_name);
        }
        if (updatedFilters.name) {
            query = query.eq('name', updatedFilters.name);
        }

                const { count: totalCount, data: rimsData, error: rimsError } = await query;

        if (rimsError) {

            setLoading(false);
            return;
        }



        setTotalCount(totalCount ?? 0);
        const totalAvailablePages = Math.ceil((totalCount ?? 0) / limit);          setTotalPages(totalAvailablePages);
        const offset = (page - 1) * limit;
        const { data: paginatedRimsData, error: paginatedRimsError } = await query.range(offset, offset + limit - 1);

        if (paginatedRimsError) {

            setLoading(false);
            return;
        }

        setRims(paginatedRimsData || []);
                if (paginatedRimsData.length === 0) {
            setNoResults(true);

        } else {
            setNoResults(false);

        }

        setLoading(false);
    };

        useEffect(() => {
        fetchRims(filters, currentPage);
    }, [currentPage]);

        const handleFilterChange = (newFilters: { height: string | null, color: string | null, manufacturer: string | null, diameter: string | null,color_name: string | null, name: string | null}) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        setRims([]);          router.push(`/rims?page=1`);
        fetchRims(updatedFilters, 1);      };

    const handlePageClick = (event: { selected: number }) => {
        const newPage = event.selected + 1;
        if (newPage <= totalPages) {
            router.push(`/rims?page=${newPage}`);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="py-10 bg-blue-50"> {}
                <div className="container max-w-[1370px] mx-auto text-center py-10">
                    <h1 className="text-5xl font-bold mb-4">Все диски</h1>
                    <p className="text-lg text-gray-600 mb-8">Интернет-магазин дисков. Найдите идеальные диски для вашего автомобиля, выбрав параметры ниже.</p>

                    {}
                    <RimFilters onFilterChange={handleFilterChange} />
                </div>
            </section>

            {}
            <section className="py-20 bg-white">
                <div className="container max-w-[1370px] mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 text-black">Большой ассортимент качественных дисков</h2>
                    <p className="text-lg text-gray-600 mb-8">Мы предлагаем широкий ассортимент дисков для любых автомобилей. Найдите идеальные диски прямо сейчас.</p>

                    {loading ? (
                        <p>Загрузка...</p>
                    ) : noResults ? (
                        <p className="text-gray-500 text-2xl mt-8">Диски по заданным фильтрам не найдены. Попробуйте изменить фильтры или сбросить их.</p>
                    ) : (
                        <>
                            {rims.length > 0 && (                                  <div
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                                    {rims.length > 0 ? (
                                        rims.map((rim: Rim, index: number) => (
                                            <RimCard key={index} rim={rim}/>
                                        ))
                                    ) : (
                                        <p className="text-gray-700 text-lg text-center col-span-full">
                                            В данный момент товары отсутствуют.
                                        </p>
                                    )}
                                </div>

                            )}
                            {rims.length > 0 && (
                                <div className="pagination-container overflow-x-auto">
                                    <ReactPaginate
                                        previousLabel={<ChevronLeft/>}
                                        nextLabel={<ChevronRight/>}
                                        breakLabel={'...'}
                                        pageCount={totalPages}
                                        marginPagesDisplayed={marginPagesDisplayed}
                                        pageRangeDisplayed={pageRangeDisplayed}
                                        initialPage={currentPage - 1}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination flex'}
                                        activeClassName={'active'}
                                    />
                                </div>

                            )}
                        </>
                    )}
                </div>
            </section>
            <Footer/>
        </main>
    );
};

export default RimsPage;
