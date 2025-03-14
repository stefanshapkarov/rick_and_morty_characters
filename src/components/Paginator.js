'use client';

function Paginator({ currentPage, totalPages, onPageChange }) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center items-center mt-6 mb-4 space-x-4">
            <button 
                onClick={handlePrevious}
                disabled={currentPage <= 1}
                className={`px-4 py-2 border border-white rounded ${currentPage <= 1 ? 'cursor-not-allowed bg-gray-500' : 'hover:bg-gray-300'}`}
            >
                Previous
            </button>
            
            <p>
                Page {currentPage} of {totalPages}
            </p>
            
            <button 
                onClick={handleNext}
                disabled={currentPage >= totalPages}
                className={`px-4 py-2 border border-white rounded ${currentPage >= totalPages ? 'cursor-not-allowed bg-gray-500' : 'hover:bg-gray-300'}`}
            >
                Next
            </button>
        </div>
    );
}

export default Paginator;