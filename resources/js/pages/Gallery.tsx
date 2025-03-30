import StandardLayout from "@/layouts/standard-layout";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination]);

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <StandardLayout>
            <section className="max-w-5xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    Галерея кафедри
                </h1>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="rounded-lg relative px-12" // додай padding для відступу від країв
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="relative cursor-pointer group overflow-hidden rounded-lg shadow hover:shadow-xl transition"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title || `Фото ${i + 1}`}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                                />
                                {img.title && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2">
                                        {img.title}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>



                {/* Simple Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="max-h-[90vh] max-w-[90vw] object-contain"
                        />
                        <button
                            className="absolute top-5 right-5 text-white text-3xl font-bold"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </div>
                )}
            </section>
        </StandardLayout>
    );
}

