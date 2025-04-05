export default function About() {
    return (
        <section class="py-24 relative">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1 mt-6">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                About Perpustakaan <span className="text-blue-500">Pricelia</span>
                            </h2>
                            <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Perpustakaan Pricelia adalah ruang baca digital yang didedikasikan
                                untuk menumbuhkan minat baca masyarakat dari berbagai kalangan.
                                Dengan koleksi buku yang terus berkembang dan akses yang mudah, kami
                                hadir untuk menjadi teman setia dalam perjalanan belajar,
                                menjelajah, dan memahami dunia lewat literasi. Di sini, setiap
                                halaman adalah jendela pengetahuan. Mari temukan inspirasi, perluas
                                wawasan, dan bangun kebiasaan membaca bersama Pricelia.
                            </p>
                        </div>
                        <a href="/katalog">
                            <button class="sm:w-fit w-full px-3.5 py-2 bg-blue-500 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span class="px-1.5 text-white text-sm font-medium leading-6">
                                    Lihat Katalog
                                </span>
                            </button>
                        </a>
                    </div>
                    <img
                        class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                        src="https://pagedone.io/asset/uploads/1717751272.png"
                        alt="about Us image"
                    />
                </div>
            </div>
        </section>
    );
}
