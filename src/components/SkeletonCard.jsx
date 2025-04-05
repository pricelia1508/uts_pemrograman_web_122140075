export default function SkeletonCard() {
    return (
        <div className="w-full max-w-[300px] animate-pulse pt-16">
            {' '}
            {/* kompensasi untuk -mt-16 */}
            <div className="relative">
                {/* Gambar */}
                <div className="w-full h-[400px] bg-gray-300 rounded-lg shadow-md"></div>

                {/* Card Konten */}
                <div className="absolute inset-x-0 top-[75%] px-4">
                    {' '}
                    {/* posisikan secara absolut */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                        <div className="h-8 bg-gray-300 rounded w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
