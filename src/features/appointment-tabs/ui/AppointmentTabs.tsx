"use client";

import { useState } from "react";
import Link from "next/link";
import AppointmentCard from "@/entities/appointment/ui/AppointmentCard";

const data = [1, 2, 3];

export default function AppointmentTabs() {
  const [tab, setTab] = useState("history");

  return (
    <div className="w-full">

      {/* 🔥 TABS */}
      <div className="flex gap-2 mb-1 overflow-x-auto scrollbar-hide">

        <button
          onClick={() => setTab("history")}
          className={`
      min-w-[180px] md:w-[300px]
      h-[48px] md:h-[65px]
      rounded-t-[16px]
      font-semibold
      text-[14px] md:text-[22px]
      transition
      flex-shrink-0
      ${tab === "history"
              ? "bg-[#0C2647] text-white z-10"
              : "bg-[#BFE0F5] text-[#0C2647]"
            }
    `}
        >
          История записей
        </button>

        <Link
          href="/ProfileTabs"
          className={`
    min-w-[160px] md:w-[270px]
    h-[48px] md:h-[65px]
    rounded-t-[16px]
    font-semibold
    text-[14px] md:text-[22px]
    transition
    flex-shrink-0
    flex items-center justify-center
    ${tab === "saved"
              ? "bg-[#0C2647] text-white z-10"
              : "bg-[#BFE0F5] text-[#0C2647]"
            }
  `}
        >
          Сохраненное
        </Link>

        <button
          onClick={() => setTab("reviews")}
          className={`
      min-w-[140px] md:w-[270px]
      h-[48px] md:h-[65px]
      rounded-t-[16px]
      font-semibold
      text-[14px] md:text-[22px]
      transition
      flex-shrink-0
      ${tab === "reviews"
              ? "bg-[#0C2647] text-white z-10"
              : "bg-[#BFE0F5] text-[#0C2647]"
            }
    `}
        >
          Отзывы
        </button>

      </div>

      {/* 🔥 ОСНОВНОЙ БЛОК */}
      <div className="bg-gradient-to-b from-[#0C2647] to-[#2AA7B8] rounded-[20px] rounded-tl-none p-5 -mt-1">

        {/* SEARCH */}
        <div className="relative mb-4">
          <input
            placeholder="Введите свой запрос"
            className="w-full h-[40px] md:h-[44px] rounded-full bg-[#F4F6F9] px-4 md:px-5 pr-12 outline-none text-sm md:text-base"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            🔍
          </span>
        </div>

        {/* HEAD */}
        <div className="flex items-center flex justify-around  text-white font-semibold mb-4">

          <span className="text-[14px] md:text-[30px] text-center">
            Предстоящая запись
          </span>

          <div className="w-[1px] md:w-[2px] h-[24px] md:h-[40px] bg-white/50 mx-3 md:mx-6" />

          <span className="text-[14px] md:text-[30px] text-center">
            Прошедшая запись
          </span>

        </div>

        {/* LIST */}
        <div className="flex flex-col gap-3">
          {data.map((_, i) => (
            <AppointmentCard
              key={i}
              name="Сеитбекова Айнагул"
              service="Чистка лица"
              date="12 января 10:30"
              price="1700 сом"
            />
          ))}
        </div>

      </div>
    </div>
  );
}