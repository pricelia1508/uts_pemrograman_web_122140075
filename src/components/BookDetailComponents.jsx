import { useState } from 'react';
import Dialogue from './Dialogue';

export default function BookDetail({ book }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
            <img
                src={book.image}
                alt={book.title}
                className="h-[400px] w-full md:w-[300px] object-cover"
            />

            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h1>

                    <p className="text-gray-600 mb-2">
                        <span className="font-semibold">Author:</span> {book.author}
                    </p>

                    <p className="text-gray-600 mb-4">
                        <span className="font-semibold">Price:</span> Rp.{' '}
                        {new Intl.NumberFormat('id-ID').format(book.price * 1000)}
                    </p>

                    <p className="text-gray-700">
                        {book.description || <i>Tidak ada deskripsi.</i>}
                    </p>
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleClick}
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        📚 Pinjam Buku Ini
                    </button>
                </div>
            </div>

            <Dialogue open={open} setOpen={setOpen} book={book} />
        </div>
    );
}
