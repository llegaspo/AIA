import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const FullGuideViewer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 141;
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const pageParam = parseInt(params.get('page') || '', 10);
        if (!Number.isNaN(pageParam) && pageParam >= 1 && pageParam <= totalPages) {
            setCurrentPage(pageParam);
        }
    }, [location.search]);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-aia-grey p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-condensed font-bold text-aia-red uppercase mb-8">
                    Complete Brand Guide
                </h1>

                {/* PDF Viewer */}
                <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
                    <div className="flex items-center justify-center bg-aia-grey/30 rounded min-h-[600px]">
                        <iframe
                            src={`/assets/pages/page_${currentPage}.pdf`}
                            className="w-full h-[800px] rounded"
                            title={`Brand Guide Page ${currentPage}`}
                        />
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between bg-white rounded-lg shadow p-6">
                    <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2 px-6 py-3 bg-aia-red text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-aia-red/90 transition-colors"
                    >
                        <ChevronLeft size={20} />
                        Previous
                    </button>

                    <div className="flex items-center gap-4">
                        <span className="text-sm text-aia-charcoal">
                            Page
                        </span>
                        <input
                            type="number"
                            min="1"
                            max={totalPages}
                            value={currentPage}
                            onChange={(e) => {
                                const page = parseInt(e.target.value);
                                if (page >= 1 && page <= totalPages) {
                                    setCurrentPage(page);
                                }
                            }}
                            className="w-20 px-3 py-2 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-aia-red"
                        />
                        <span className="text-sm text-aia-charcoal">
                            of {totalPages}
                        </span>
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2 px-6 py-3 bg-aia-red text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-aia-red/90 transition-colors"
                    >
                        Next
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Page Thumbnails Grid */}
                <div className="mt-8 bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-bold text-aia-charcoal mb-4">Jump to Page</h2>
                    <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-15 gap-2 max-h-96 overflow-y-auto">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`aspect-square flex items-center justify-center text-xs font-medium rounded transition-all ${currentPage === page
                                    ? 'bg-aia-red text-white scale-110 shadow-lg'
                                    : 'bg-aia-grey text-aia-charcoal hover:bg-aia-red/10 hover:scale-105'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullGuideViewer;
