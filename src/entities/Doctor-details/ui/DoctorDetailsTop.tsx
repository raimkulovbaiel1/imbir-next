"use client";

import Image from "next/image";
import { useState } from "react";

import type { DoctorDetailsType } from "../model/types";

interface DoctorDetailsTopProps {
  doctor: DoctorDetailsType;
}

const WEEK_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const SHORT_MONTHS = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

const initialTimes = [
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:00 - 11:30",
  "11:30 - 12:00",
  "12:00 - 12:30",
  "12:30 - 13:00",
  "14:00 - 14:30",
  "14:30 - 15:00",
  "15:00 - 15:30",
];

const DoctorDetailsTop = ({ doctor }: DoctorDetailsTopProps) => {
  const [currentDate, setCurrentDate] = useState(
    new Date(2024, 10, 1)
  );

  const [selectedDate, setSelectedDate] = useState(
    new Date(2024, 10, 1)
  );

  const [selectedTime, setSelectedTime] = useState<number | null>(
    null
  );

  const [times, setTimes] = useState<string[]>(initialTimes);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

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
    const newDate = new Date(year, month, day);

    setSelectedDate(newDate);
    setSelectedTime(null);
  };

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);

    newDate.setDate(newDate.getDate() - 1);

    setSelectedDate(newDate);

    setCurrentDate(
      new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        1
      )
    );

    setSelectedTime(null);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);

    newDate.setDate(newDate.getDate() + 1);

    setSelectedDate(newDate);

    setCurrentDate(
      new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        1
      )
    );

    setSelectedTime(null);
  };

  const handleAddTime = () => {
    setTimes((prevTimes) => {
      const lastTime = prevTimes[prevTimes.length - 1];

      if (!lastTime) {
        return ["10:00 - 10:30"];
      }

      const endTime = lastTime.split(" - ")[1];

      if (!endTime) {
        return prevTimes;
      }

      const [hours, minutes] = endTime.split(":").map(Number);

      const startMinutes = hours * 60 + minutes;
      const endMinutes = startMinutes + 30;

      const formatTime = (totalMinutes: number) => {
        const normalizedMinutes = totalMinutes % (24 * 60);

        const h = Math.floor(normalizedMinutes / 60);
        const m = normalizedMinutes % 60;

        return `${String(h).padStart(2, "0")}:${String(m).padStart(
          2,
          "0"
        )}`;
      };

      const newTime = `${formatTime(
        startMinutes
      )} - ${formatTime(endMinutes)}`;

      return [...prevTimes, newTime];
    });
  };

  const selectedDay = selectedDate.getDate();
  const selectedMonth = selectedDate.getMonth();

  const selectedWeekDay =
    WEEK_DAYS[(selectedDate.getDay() + 6) % 7];

  const isSelectedDay = (day: number) => {
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-[210px_352px_456px] md:items-start md:gap-5">
      {/* ФОТО ВРАЧА */}
      <div className="mx-auto w-full max-w-[180px] md:mx-0 md:w-[207px] md:max-w-none md:shrink-0">
        <div className="relative aspect-[140/158] w-full overflow-hidden rounded-[14px] bg-[#111111] md:h-[233px] md:w-[207px] md:aspect-auto md:rounded-[20px]">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            priority
            className="object-cover"
          />

          <span className="absolute bottom-4 left-4 rounded-[7px] bg-white px-3 py-1 text-[13px] font-bold text-[#092C56]">
            ⭐ {doctor.rating}
          </span>
        </div>

        <button
          type="button"
          className="mt-3 w-full whitespace-nowrap rounded-[6px] border border-[#CAE9FF] px-2 py-2 text-[11px] text-[#CAE9FF] transition hover:bg-white/10"
        >
          Редактировать данные
        </button>
      </div>

      {/* КАЛЕНДАРЬ */}
      <div className="flex w-full flex-col gap-6 rounded-[20px] bg-white p-4 text-[#092C56] sm:p-5 md:h-[361px] md:w-[352px] md:shrink-0 md:gap-[40px] md:p-[30px]">
        {/* Верх календаря */}
        <div className="flex items-center justify-between text-[14px] font-bold sm:text-[16px]">
          <button
            type="button"
            onClick={handlePrevMonth}
            aria-label="Предыдущий месяц"
            className="flex h-8 w-8 items-center justify-center text-[27px] transition hover:opacity-60"
          >
            ‹
          </button>

          <span>
            {MONTHS[month]} {year}
          </span>

          <button
            type="button"
            onClick={handleNextMonth}
            aria-label="Следующий месяц"
            className="flex h-8 w-8 items-center justify-center text-[27px] transition hover:opacity-60"
          >
            ›
          </button>
        </div>

        {/* Дни и числа */}
        <div className="grid grid-cols-7 gap-y-3 text-center text-[11px] sm:text-[16px] md:flex-1 md:content-between md:gap-y-0">
          {WEEK_DAYS.map((day) => (
            <span
              key={day}
              className="flex items-center justify-center font-bold"
            >
              {day}
            </span>
          ))}

          {Array.from(
            { length: firstDayOfMonth },
            (_, index) => (
              <span key={`empty-${index}`} />
            )
          )}

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

      {/* ВРЕМЯ */}
      <div className="flex w-full flex-col gap-4 rounded-[19px] bg-white p-4 sm:p-5 md:h-[381px] md:w-[456px] md:shrink-0 md:gap-5 md:p-[30px]">
        {/* Верхняя часть */}
        <div className="flex items-center justify-between text-[13px] font-bold text-[#092C56] sm:text-[16px]">
          <button
            type="button"
            onClick={handlePrevDay}
            aria-label="Предыдущий день"
            className="flex h-8 w-8 items-center justify-center text-[27px] transition hover:opacity-60"
          >
            ‹
          </button>

          <span>
            {selectedWeekDay}. {selectedDay}{" "}
            {SHORT_MONTHS[selectedMonth]}
          </span>

          <button
            type="button"
            onClick={handleNextDay}
            aria-label="Следующий день"
            className="flex h-8 w-8 items-center justify-center text-[27px] transition hover:opacity-60"
          >
            ›
          </button>
        </div>

        {/* Временные слоты */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:max-h-[165px] md:overflow-y-auto md:pr-1">
          {times.map((time, index) => (
            <button
              key={`${time}-${index}`}
              type="button"
              onClick={() => setSelectedTime(index)}
              className={`whitespace-nowrap rounded-[4px] px-1 py-1 text-[10px] transition sm:text-[16px] ${selectedTime === index
                  ? "bg-[#48B5D0] text-white"
                  : "bg-[#CDEEFF] text-[#42ADD0]"
                }`}
            >
              {time}
            </button>
          ))}

          <button
            type="button"
            onClick={handleAddTime}
            className="whitespace-nowrap rounded-[4px] border border-[#56C9E8] px-1 py-1 text-[10px] text-[#42ADD0] transition hover:bg-[#EAF8FF] sm:text-[13px]"
          >
            Добавить +
          </button>
        </div>

        {/* Обозначения */}
        <div className="mt-1 space-y-2 text-[11px] text-[#092C56] sm:text-[12px] md:mt-0">
          <div className="flex items-center gap-2">
            <span className="shrink-0 rounded bg-[#48B5D0] px-2 py-1 text-[11.9px] text-white">
              10:00 - 10:30
            </span>

            <span>— Занято пациентом</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="shrink-0 rounded bg-[#CDEEFF] px-2 py-1 text-[11.9px] text-[#42ADD0]">
              10:00 - 10:30
            </span>

            <span>— Свободное окно</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsTop;