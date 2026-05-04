"use client";

import { useState } from "react";
import avatar from "@/shared/assets/img/Reviews/img1.png";

const reviews = [
    {
        name: "Мирланова Айбийке",
        text: "Очень внимательный врач. Нурбек Садыров подробно объяснил результаты обследования и успокоил, хотя я сильно переживала. Подобрал лечение, которое реально помогло. Теперь только к нему.",
        date: "2 дня назад",
        rating: 5,
    },
    {
        name: "Мирланова Айбийке",
        text: "Редко встретишь врача, который так внимательно слушает пациента. Подход комплексный, объясняет всё простым языком. Помог найти причину аритмии — я до этого годами не мог понять, что происходит.",
        date: "2 дня назад",
        rating: 5,
    },
    {
        name: "Мирланова Айбийке",
        text: "Очень внимательный врач. Нурбек Садыров подробно объяснил результаты обследования и успокоил, хотя я сильно переживала.",
        date: "2 дня назад",
        rating: 5,
    },
    {
        name: "Мирланова Айбийке",
        text: "Редко встретишь врача, который так внимательно слушает пациента...",
        date: "2 дня назад",
        rating: 5,
    },
];

export default function ReviewsSection() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full mt-10">

            {/* 🔥 ОТЗЫВЫ СВЕРХУ */}
            {open && (
                <div className="mb-6 space-y-6">

                    {/* 🔥 СПИСОК ОТЗЫВОВ */}
                    <div className="bg-[#F4F6F9] rounded-[20px] p-4 sm:p-6 shadow-sm 
                max-h-112.5 overflow-y-auto">
                        <div className="divide-y divide-[#FF8A00]">
                            {reviews.map((review, index) => (
                                <div key={index} className="py-6 first:pt-0 last:pb-0">
                                    <div className="flex gap-4">

                                        {/* АВАТАР */}
                                        <div className="w-[65px] h-[66px] rounded-full overflow-hidden shrink-0">
                                            <img
                                                src={avatar.src}    
                                                alt={review.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* КОНТЕНТ */}
                                        <div className="flex-1">
                                            <p className="font-semibold text-[18px] text-[#0C2647]">
                                                {review.name}
                                            </p>

                                            <div className="flex items-center gap-2 mt-1 text-[14px] text-gray-500">
                                                <span className="text-yellow-400 text-[18px]">
                                                    {"★".repeat(review.rating)}
                                                </span>
                                                <span>{review.date}</span>
                                            </div>

                                            <p className="mt-3 text-[16px] text-[#0C2647] leading-relaxed">
                                                {review.text}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🔥 ФОРМА */}
                    <div className="bg-[#F4F6F9] rounded-[20px] p-6 shadow-sm">

                        {/* USER INFO */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 rounded-full bg-gray-300" />
                                <div>
                                    <p className="font-semibold text-[#0C2647]">
                                        Айжана Нурланова
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        ajjana.n@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-gray-500">
                                    Поставьте оценку
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400 text-[18px]">
                                        ★★★★☆
                                    </span>
                                    <span className="text-[#0C2647] text-sm font-medium">
                                        4.0
                                    </span>
                                </div>
                            </div>
                        </div>

                        <textarea
                            placeholder="Напишите отзыв..."
                            className="w-full rounded-[12px] border border-[#FF8A00] p-4 text-[14px] outline-none resize-none min-h-[100px]"
                        />

                        <div className="flex justify-end gap-3 mt-5">
                            <button onClick={() => setOpen(false)}
                                className="w-[158px] h-[35px] rounded-xl border cursor-pointer font-bold border-[#FF8A00] text-[#FF8A00]" >
                                Отмена
                            </button>
                            <button className="w-[158px] h-[35px] rounded-xl bg-[#FE7F30] text-white">
                                Оставить отзыв
                            </button>
                        </div>

                    </div>
                </div>
            )}

            <div className="flex items-center gap-4">
                <div className="h-[2px] flex-1 bg-[#0C2647]" />
                <button
                    onClick={() => setOpen(!open)}
                    className="text-[#0C2647] font-Montserrat font-bold text-[22px] px-6 py-1 cursor-pointer "
                >
                    {open ? "Скрыть отзывы" : "Посмотреть отзывы"}
                </button>
                <div className="h-[2px] flex-1 bg-[#0C2647]" />
            </div>

        </div>
    );
}