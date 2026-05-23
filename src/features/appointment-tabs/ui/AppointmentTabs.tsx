"use client";
import Link from "next/link";
import AppointmentCard from "@/entities/appointment/ui/AppointmentCard";
const data = [1, 2, 3];

export default function AppointmentTabs() {
  return (
    <div className="w-full">
      {/* 🔥 ОСНОВНОЙ БЛОК */}
      <div className="bg-gradient-to-b from-[#0C2647] to-[#2AA7B8] rounded-[20px] rounded-tl-none p-5 -mt-1">
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
              name="Сеитбекова"
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