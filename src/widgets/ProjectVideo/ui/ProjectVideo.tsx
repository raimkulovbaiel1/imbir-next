"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
    {
        id: 1,
        title: "Интервью",
        url: "https://www.youtube.com/embed/_m1kpCST9kw",
        preview: "https://img.youtube.com/vi/_m1kpCST9kw/mqdefault.jpg",
    },
    {
        id: 2,
        title: "Интервью",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        preview: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    },
    {
        id: 3,
        title: "Интервью",
        url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        preview: "https://img.youtube.com/vi/3JZ_D3ELwOQ/mqdefault.jpg",
    },
    {
        id: 4,
        title: "Интервью",
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        preview: "https://img.youtube.com/vi/tgbNymZ7vqY/mqdefault.jpg",
    },
];

export default function ProjectVideo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? videos.length - 1 : prev - 1
        );
    };

    return (
        <section className="w-full py-[70px]">
            <div className="mx-auto max-w-[1128px]">

                <h2 className="text-[30px] font-bold text-[#0C2647]">
                    Ознакомительный ролик о проекте
                </h2>

                <div className="mt-[24px] overflow-hidden rounded-[29px]">
                    <iframe
                        className="w-full h-[632px]"
                        src={videos[currentIndex].url}
                        title="YouTube video"
                        allowFullScreen
                    />
                </div>

                <div className="mt-6 flex justify-center gap-50">

                    <button
                        onClick={prev}
                        className="p-3 rounded-full "
                    >
                        <ChevronLeft size={70} />
                    </button>

                    <div className="flex gap-5 overflow-hidden">
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                onClick={() => setCurrentIndex(index)}
                                className={`cursor-pointer text-center ${index === currentIndex ? "opacity-100" : "opacity-50"
                                    }`}
                            >
                                <img
                                    src={video.preview}
                                    alt={video.title}
                                    className="w-[147px] h-[147px] object-cover  rounded-[12px]"
                                />
                                <p className="text-[16px] mt-2">{video.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Правая стрелка */}
                    <button onClick={next} className="p-2">
                        <ChevronRight size={70} />
                    </button>

                </div>

            </div>
        </section>
    );
}