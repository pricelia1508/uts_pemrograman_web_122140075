export default function BookCard({ book }) {
    return (
        <div>
            <img
                src={book.image}
                alt="random img"
                className="w-full max-w-[300px] h-[400px] object-cover object-center rounded-lg shadow-md"
            />

            <div className="relative px-4 -mt-16 max-w-[300px]">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="mt-1 text-l font-semibold uppercase leading-tight truncate">
                        {book.title}
                    </h4>
                    <div className="mt-1">
                        Rp. {book.price * 1000}
                        <span className="text-gray-600 text-sm"> /pcs</span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm text-gray-600 line-clamp-1">
                            Karya Penulis {book.author}
                        </span>
                    </div>
                    <div className="mt-2">
                        <a
                            href=""
                            className="flex justify-center w-fit px-2 py-1 text-base leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue  ">
                            Pinjam Disini
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
