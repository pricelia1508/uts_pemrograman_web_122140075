import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import SkeletonCard from './SkeletonCard';

export default function BookCatalogue({ pageNow, limitNeed, searchQuery }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const url = `https://67f0a0cc2a80b06b88983bc5.mockapi.io/api/v1/Book?page=${pageNow}&limit=${limitNeed}${
            searchQuery ? `&search=${searchQuery}` : ''
        }`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBooks(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch books:', err);
                setBooks([]);
                setLoading(false);
            });
    }, [pageNow, limitNeed, searchQuery]);

    return (
        <div
            className={`px-6 flex flex-wrap justify-center gap-x-6 gap-y-8 bg-gray-400 antialiased text-gray-900 ${
                loading ? '-py-18 pb-30' : 'py-10'
            } min-h-[650px]`}>
            {loading ? (
                Array.from({ length: limitNeed }).map((_, i) => <SkeletonCard key={i} index={i} />)
            ) : books.length === 0 ? (
                <p className="text-white text-lg font-semibold text-center w-full">
                    Buku tidak ditemukan 😢
                </p>
            ) : (
                books?.map((book) => <BookCard key={book.id} book={book} />)
            )}
        </div>
    );
}
