"use client";

import { useState } from "react";

import { WORK_DAYS } from "@/entities/doctor-form/model/doctor-form.data";
import type { WorkSchedule } from "@/entities/doctor-form/model/types";

const DoctorWorkSchedule = () => {
  const [workSchedule, setWorkSchedule] = useState<
    Record<string, WorkSchedule>
  >({
    mon: { from: "00:00", to: "00:00" },
    tue: { from: "00:00", to: "00:00" },
    wed: { from: "00:00", to: "00:00" },
    thu: { from: "00:00", to: "00:00" },
    fri: { from: "00:00", to: "00:00" },
    sat: { from: "00:00", to: "00:00" },
    sun: { from: "00:00", to: "00:00" },
  });

  const [lunchFrom, setLunchFrom] = useState("00:00");
  const [lunchTo, setLunchTo] = useState("00:00");

  const handleScheduleChange = (
    dayId: string,
    field: keyof WorkSchedule,
    value: string
  ) => {
    setWorkSchedule((prev) => ({
      ...prev,
      [dayId]: {
        ...prev[dayId],
        [field]: value,
      },
    }));
  };

  return (
    <div className="w-full">
      {/* ЗАГОЛОВОК */}
      <h2 className="text-[14px] font-bold text-[#092C56] sm:text-[18px]">
        График работы
        <span className="ml-1 text-red-500">*</span>
      </h2>

      {/* ОПИСАНИЕ */}
      <p className="mt-2 max-w-[650px] text-[11px] leading-relaxed text-[#092C56] sm:text-[12px]">
        Укажите ваше рабочее время. Если в какой-то день вы не работаете,
        оставьте поле пустым.
      </p>

      {/* ДНИ НЕДЕЛИ */}
      <div className="mt-5 space-y-2">
        {WORK_DAYS.map((day) => (
          <div
            key={day.id}
            className="grid grid-cols-[28px_minmax(0,1fr)_20px_minmax(0,1fr)] items-center gap-2"
          >
            {/* ДЕНЬ */}
            <span className="text-[18px] font-medium text-[#092C56]">
              {day.label}:
            </span>

            {/* ОТ */}
            <input
              type="time"
              value={workSchedule[day.id].from}
              onChange={(event) =>
                handleScheduleChange(
                  day.id,
                  "from",
                  event.target.value
                )
              }
              className="h-[32px] min-w-0 rounded-[9px] border border-[#D5DDE5] bg-white px-1 text-[18px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
            />

            {/* ДО */}
            <span className="text-center text-[18px] text-[#092C56]">
              до
            </span>

            {/* ВРЕМЯ ДО */}
            <input
              type="time"
              value={workSchedule[day.id].to}
              onChange={(event) =>
                handleScheduleChange(
                  day.id,
                  "to",
                  event.target.value
                )
              }
              className="h-[32px] min-w-0 rounded-[9px] border border-[#D5DDE5] bg-white px-1 text-[18px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
            />
          </div>
        ))}
      </div>

      {/* ВРЕМЯ ОБЕДА */}
      <div className="mt-20 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
        <p className="shrink-0 whitespace-nowrap text-[14px] font-bold text-[#092C56] sm:text-[18px]">
          Время обеда (или перерыв):
          <span className="ml-1 text-red-500">*</span>
        </p>

        <div className="flex items-center gap-3">
          <input
            type="time"
            value={lunchFrom}
            onChange={(event) => setLunchFrom(event.target.value)}
            className="h-[32px] min-w-0 shrink-0 rounded-[9px] border border-[#D5DDE5] bg-white px-2 text-[18px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
          />

          <span className="shrink-0 text-[18px] font-medium text-[#092C56]">
            до
          </span>

          <input
            type="time"
            value={lunchTo}
            onChange={(event) => setLunchTo(event.target.value)}
            className="h-[32px] min-w-0 shrink-0 rounded-[9px] border border-[#D5DDE5] bg-white px-2 text-[18px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorWorkSchedule;