"use client";

import { useState } from "react";

import {
  MONTHS,
  WEEK_DAYS,
} from "@/entities/doctor-form/model/doctor-form.data";

const DoctorCalendar = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date(2024, 10, 1)
  );

  const [selectedDate, setSelectedDate] = useState(
    new Date(2024, 10, 1)
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const firstDayOfMonth =
    (new Date(year, month, 1).getDay() + 6) % 7;

  const days = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth() - 1,
          1
        )
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth() + 1,
          1
        )
    );
  };

  const handleSelectDay = (day: number) => {
    setSelectedDate(
      new Date(year, month, day)
    );
  };

  const isSelectedDay = (day: number) => {
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded-[20px] bg-white p-4 text-[#092C56] shadow-sm sm:p-5 md:h-[361px] md:w-[352px] md:shrink-0 md:gap-[40px] md:p-[30px]">
      {/* ВЕРХ КАЛЕНДАРЯ */}
      <div className="flex items-center justify-between text-[14px] font-bold sm:text-[16px]">
        <button
          type="button"
          onClick={handlePrevMonth}
          aria-label="Предыдущий месяц"
          className="flex h-8 w-8 items-center justify-center text-[24px] transition hover:opacity-60"
        >
          ‹
        </button>

        <span className="whitespace-nowrap">
          {MONTHS[month]} {year}
        </span>

        <button
          type="button"
          onClick={handleNextMonth}
          aria-label="Следующий месяц"
          className="flex h-8 w-8 items-center justify-center text-[24px] transition hover:opacity-60"
        >
          ›
        </button>
      </div>

      {/* ДНИ КАЛЕНДАРЯ */}
      <div className="grid flex-1 grid-cols-7 content-between text-center text-[12px] sm:text-[14px] md:text-[16px]">
        {/* ДНИ НЕДЕЛИ */}
        {WEEK_DAYS.map((day) => (
          <span
            key={day}
            className="flex h-7 items-center justify-center font-bold"
          >
            {day}
          </span>
        ))}

        {/* ПУСТЫЕ ЯЧЕЙКИ */}
        {Array.from(
          { length: firstDayOfMonth },
          (_, index) => (
            <span
              key={`empty-${index}`}
              className="h-7"
            />
          )
        )}

        {/* ЧИСЛА МЕСЯЦА */}
        {days.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => handleSelectDay(day)}
            className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full transition ${isSelectedDay(day)
                ? "bg-[#FFA500] text-white"
                : "hover:bg-[#FFE4B8]"
              }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorCalendar;