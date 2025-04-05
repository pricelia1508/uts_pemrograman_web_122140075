import { useState } from 'react';
import BookCatalogue from '../components/BookCatalogue';

export default function Katalog() {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const limit = 10;
    const dataCount = 50; // Karna data dummynya Saya set 50
    const pageLimit = Math.ceil(dataCount / limit);

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1); // reset ke halaman 1 saat search baru
        setSearchQuery(inputValue);
    };

    const handleNext = () => setPage((prev) => (prev < pageLimit ? prev + 1 : prev));
    const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <form onSubmit={handleSearch} className="flex justify-center mb-6 gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Cari buku..."
                    className="border border-gray-300 px-4 py-2 rounded w-1/2"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Cari
                </button>
            </form>

            <BookCatalogue pageNow={page} limitNeed={limit} searchQuery={searchQuery} />

            <div className="flex justify-center mt-6 gap-4">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
                    Prev
                </button>
                <span className="text-lg font-semibold">Page {page}</span>
                <button
                    onClick={handleNext}
                    disabled={page === pageLimit}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
                    Next
                </button>
            </div>
        </div>
    );
}
