"use client";

import { useState } from "react";

import AppointmentCard from "@/entities/appointment/ui/AppointmentCard";
import  PastEntry  from "@/entities/PastEntry/ui/PastEntry";

const data = [1, 2, 3];

export default function AppointmentTabs() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="w-full">

      <div
        className=" bg-gradient-to-b   from-[#0C2647]  to-[#2AA7B8]  rounded-[20px] rounded-tl-none  p-5 -mt-1">
       
        <div
          className=" flex flex-row items-center justify-around  text-white font-semibold  mb-6">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`text-[14px] md:text-[30px]  text-center  transition
              ${
                activeTab === "upcoming"
                  ? "text-white"
                  : "text-white/50"
              }
            `}
          >
            Предстоящая запись
          </button>

          <div className="w-[1px] md:w-[2px] h-[24px] md:h-[40px] bg-white/50 mx-3 md:mx-6" />

          <button
            onClick={() => setActiveTab("past")}
            className={` text-[14px] md:text-[30px] text-center transition
              ${
                activeTab === "past"
                  ? "text-white"
                  : "text-white/50"
              }
            `}
          >
            Прошедшая запись
          </button>

        </div>

        {activeTab === "upcoming" && (
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
        )}

        {activeTab === "past" && (
          <div className="flex flex-col gap-3">
            {data.map((_, i) => (
              <PastEntry
                key={i}
                name="Сеитбекова"
                service="Чистка лица"
                date="12 января 10:30"
                price="1700 сом"
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}