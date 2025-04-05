import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookDetailComponents from '../components/BookDetailComponents';

export default function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const numericId = parseInt(id, 10); // konversi ke number
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`https://67f0a0cc2a80b06b88983bc5.mockapi.io/api/v1/Book/${numericId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Data not found');
                }
                return res.json();
            })
            .then((data) => {
                setBook(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                navigate('/katalog');
            });
    }, [numericId, navigate]);

    if (loading) return <SkeletonBookDetail />;

    return (
        <div className="bg-gray-100 px-6 py-10 flex flex-col items-center">
            {book ? (
                <>
                    <BookDetailComponents book={book} />
                    <div className="mt-10 flex gap-4">
                        <button
                            onClick={() => navigate(`/book/${numericId - 1}`)}
                            disabled={numericId <= 1}
                            className={`px-4 py-2 rounded ${
                                numericId <= 1
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}>
                            ⬅️ Sebelumnya
                        </button>
                        <button
                            onClick={() => navigate(`/book/${numericId + 1}`)}
                            disabled={numericId >= 50}
                            className={`px-4 py-2 rounded ${
                                numericId >= 50
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}>
                            Selanjutnya ➡️
                        </button>
                    </div>
                </>
            ) : (
                <p className="text-red-500 font-semibold">Buku tidak ditemukan</p>
            )}
        </div>
    );
}

function SkeletonBookDetail() {
    return (
        <div className="bg-gray-100 px-6 py-10 flex justify-center">
            <div className="animate-pulse bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
                <div className="h-[400px] w-full md:w-[300px] bg-gray-300" />

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                        <div className="h-6 bg-gray-300 w-3/4 rounded mb-4"></div>
                        <div className="h-4 bg-gray-200 w-1/3 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 w-1/4 rounded mb-4"></div>
                        <div className="h-24 bg-gray-200 w-full rounded"></div>
                    </div>
                    <div className="h-10 w-[160px] bg-blue-300 rounded"></div>
                </div>
            </div>
        </div>
    );
}
