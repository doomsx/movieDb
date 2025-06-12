"use client"
import { PaginationProps } from "@/lib/types"
import { useRouter } from "next/navigation"


const Pagination = ({ totalPages, currentPage, baseUrl }: PaginationProps) => {
    const router = useRouter()

    const handlePageChange = (page: number) => {
        router.push(`${baseUrl}/${page}`)
    }

    const maxVisiblePage = 7;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePage / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePage - 1);

    const pages = []
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            <div className="flex gap-1">
                <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                >
                    ««
                </button>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                >
                    Previous
                </button>
            </div>

            <div className="flex gap-1">
                {startPage > 1 && <span className="px-2 py-2 text-gray-500">...</span>}

                {pages.map(page => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-lg transition-colors min-w-[2.5rem] ${page === currentPage
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                {endPage < totalPages && <span className="px-2 py-2 text-gray-500">...</span>}
            </div>

            <div className="flex gap-1">
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                >
                    Next
                </button>
                <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                >
                    »»
                </button>
            </div>
        </div>
    );
}

export default Pagination;
