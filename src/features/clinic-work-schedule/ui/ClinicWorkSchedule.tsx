"use client";

import { useState } from "react";

import { WORK_DAYS } from "@/entities/Clinic-form/model/clinic-form.data";
import type { WorkSchedule } from "@/entities/Clinic-form/model/types";

const ClinicWorkSchedule = () => {
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

  const handleChange = (
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
      <h2 className="text-[14px] font-bold text-[#092C56] sm:text-[18px]">
        График работы
        <span className="ml-1 text-red-500">*</span>
      </h2>

      <p className="mt-2 text-[11px] leading-relaxed text-[#092C56] sm:text-[13px]">
        Укажите ваше рабочее время. Если в какой-то день вы не работаете, оставьте поле пустым.
      </p>

      <div className="mt-5 space-y-2">
        {WORK_DAYS.map((day) => (
          <div
            key={day.id}
            className="flex items-center justify-between gap-2"
          >
            {/* День */}
            <span className="w-[31px] shrink-0 text-[18px] font-medium text-[#092C56]">
              {day.label}:
            </span>

            {/* Время от */}
            <input
              type="time"
              value={workSchedule[day.id].from}
              onChange={(event) =>
                handleChange(
                  day.id,
                  "from",
                  event.target.value
                )
              }
              className="h-[32px] min-w-0 flex-1 rounded-[9px] border border-[#D5DDE5] bg-white px-2 text-[16px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
            />

            {/* До */}
            <span className="w-[24px] shrink-0 text-center text-[18px] text-[#092C56]">
              до
            </span>

            {/* Время до */}
            <input
              type="time"
              value={workSchedule[day.id].to}
              onChange={(event) =>
                handleChange(
                  day.id,
                  "to",
                  event.target.value
                )
              }
              className="h-[32px] min-w-0 flex-1 rounded-[9px] border border-[#D5DDE5] bg-white px-2 text-[16px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicWorkSchedule;