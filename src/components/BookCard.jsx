import { useState } from 'react';
import Dialogue from './Dialogue';
import { useFavorites } from '../contexts/FavoritesContext';

export default function BookCard({ book }) {
    const [open, setOpen] = useState(false);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(book.id);

    const handleFavorite = () => {
        favorite ? removeFavorite(book.id) : addFavorite(book);
    };

    return (
        <div>
            <div className="relative">
                <img
                    src={book.image}
                    alt="random img"
                    className="w-full max-w-[300px] h-[400px] object-cover object-center rounded-lg shadow-md"
                />
                <button
                    onClick={handleFavorite}
                    className="absolute top-2 right-2 bg-white/80 rounded-full p-1 shadow-md hover:scale-105 transition">
                    {favorite ? '💖' : '🤍'}
                </button>
            </div>

            <div className="relative px-4 -mt-16 max-w-[300px]">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="mt-1 text-l font-semibold uppercase leading-tight truncate">
                        {book.title}
                    </h4>
                    <div className="mt-1">
                        Rp. {new Intl.NumberFormat('id-ID').format(book.price * 1000)}
                        <span className="text-gray-600 text-sm"> /pcs</span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm text-gray-600 line-clamp-1">
                            Karya Penulis {book.author}
                        </span>
                    </div>
                    <div className="mt-2 flex gap-2">
                        <a
                            href={`/book/${book.id}`}
                            className="flex justify-center cursor-pointer w-fit px-2 py-1 text-sm leading-6 text-white transition duration-150 ease-in-out bg-gray-500 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue">
                            Lihat Detail
                        </a>
                        <button
                            onClick={() => setOpen(true)}
                            className="flex justify-center cursor-pointer w-fit px-2 py-1 text-sm leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                            Pinjam Disini
                        </button>
                    </div>
                </div>
            </div>

            <Dialogue open={open} setOpen={setOpen} book={book} />
        </div>
    );
}
