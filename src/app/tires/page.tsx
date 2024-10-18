'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/app/components/Header';
import TireCard from '@/app/tires/TireCard';
import Footer from '@/app/components/Footer';
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Filters from '@/app/components/Filters';

const TiresPage = ({ searchParams }: { searchParams: { page?: string } }) => {
    const router = useRouter();
    const [tires, setTires] = useState<any[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [noResults, setNoResults] = useState(false);

    const [filters, setFilters] = useState<{ width: string | null, height: string | null, season: string | null, manufacturer: string | null, }>({
        width: null,
        height: null,
        season: null,
        manufacturer: null
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

    const fetchTires = async (updatedFilters = filters, page = currentPage) => {
        setLoading(true);

        let query = supabase.from('tires').select('*', { count: 'exact' });

        if (updatedFilters.width) {
            query = query.eq('width', updatedFilters.width);
        }
        if (updatedFilters.height) {
            query = query.eq('height', updatedFilters.height);
        }
        if (updatedFilters.season) {
            query = query.eq('season', updatedFilters.season);
        }
        if (updatedFilters.manufacturer) {
            query = query.eq('manufacturer', updatedFilters.manufacturer);
        }

        const { count: totalCount, data: tiresData, error: tiresError } = await query;

        if (tiresError) {
                        setLoading(false);
            return;
        }

        setTotalCount(totalCount ?? 0);

        const totalAvailablePages = Math.ceil((totalCount ?? 0) / limit);
        setTotalPages(totalAvailablePages);

        const offset = (page - 1) * limit;
        const { data: paginatedTiresData, error: paginatedTiresError } = await query.range(offset, offset + limit - 1);

        if (paginatedTiresError) {
                        setLoading(false);
            return;
        }

        setTires(paginatedTiresData || []);
        setNoResults(paginatedTiresData.length === 0);

        setLoading(false);
    };

    useEffect(() => {
        fetchTires(filters, currentPage);
    }, [currentPage]);

    const handleFilterChange = (newFilters: { width: string | null, height: string | null, season: string | null, manufacturer: string | null, }) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        setTires([]);
        router.push(`/tires?page=1`);
        fetchTires(updatedFilters, 1);
    };

    const handlePageClick = (event: { selected: number }) => {
        const newPage = event.selected + 1;
        if (newPage <= totalPages) {
            router.push(`/tires?page=${newPage}`);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="py-10 bg-blue-50">
                <div className="container max-w-[1370px] mx-auto text-center py-10">
                    <h1 className="text-5xl font-bold mb-4">Все шины</h1>
                    <p className="text-lg text-gray-600 mb-8">Интернет-магазин шин. Найдите идеальные шины для вашего автомобиля, выбрав параметры ниже.</p>

                    <Filters onFilterChange={handleFilterChange} />
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container max-w-[1370px] mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 text-black">Большой ассортимент качественных шин</h2>
                    <p className="text-lg text-gray-600 mb-8">Мы предлагаем широкий ассортимент шин для любых условий и автомобилей. Найдите идеальные шины для вашего автомобиля прямо сейчас.</p>

                    {loading ? (
                        <p>Загрузка...</p>
                    ) : noResults ? (
                        <p className="text-gray-500 text-2xl mt-8">Шины по заданным фильтрам не найдены. Попробуйте изменить фильтры или сбросить их.</p>
                    ) : (
                        <>
                            {tires.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {tires.map((tire) => <TireCard key={tire.id} tire={tire} />)}
                                </div>
                            )}
                            {tires.length > 0 && (
                                <div className="pagination-container overflow-x-auto">
                                    <ReactPaginate
                                        previousLabel={<ChevronLeft />}
                                        nextLabel={<ChevronRight />}
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
            <Footer />
        </main>
    );
};

export default TiresPage;
