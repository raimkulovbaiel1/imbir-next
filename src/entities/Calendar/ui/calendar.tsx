"use client";

import { useState } from "react";

type TimeItem = {
  time: string;
  status: "busy" | "free";
};

export default function Calendar() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  // Выбранный день справа
  const [selectedDay, setSelectedDay] = useState(new Date(2024, 10, 1));
  // Месяц, который показывается в календаре слева
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1));

  const times: TimeItem[] = [
    { time: "10:00 - 10:30", status: "busy" },
    { time: "10:30 - 11:00", status: "free" },
    { time: "11:00 - 11:30", status: "free" },
    { time: "11:30 - 12:00", status: "busy" },
    { time: "12:00 - 12:30", status: "free" },
    { time: "12:30 - 13:00", status: "free" },
    { time: "13:00 - 13:30", status: "free" },
    { time: "13:30 - 14:00", status: "busy" },
    { time: "14:00 - 14:30", status: "free" },
  ];

  const months = [
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

  const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Переход на предыдущий выбранный день
  const prevDay = () => {
    setSelectedDay((prev) => {
      // Создаём копию текущей даты
      const newDay = new Date(prev);

      // Уменьшаем дату на 1 день
      newDay.setDate(prev.getDate() - 1);

      // Если перешли в другой месяц — обновляем календарь слева
      setCurrentDate(
        new Date(newDay.getFullYear(), newDay.getMonth(), 1)
      );

      // Сохраняем новый выбранный день
      return newDay;
    });

    // Очищаем выбранное время, потому что день изменился
    setSelectedTime(null);
  };

  // Переход на следующий выбранный день
  const nextDay = () => {
    setSelectedDay((prev) => {
      // Создаём копию текущей даты
      const newDay = new Date(prev);

      // Увеличиваем дату на 1 день
      newDay.setDate(prev.getDate() + 1);

      // Если перешли в другой месяц — обновляем календарь слева
      setCurrentDate(
        new Date(newDay.getFullYear(), newDay.getMonth(), 1)
      );

      // Сохраняем новый выбранный день
      return newDay;
    });

    // Очищаем выбранное время, потому что день изменился
    setSelectedTime(null);
  };

  const selectCalendarDay = (day: number) => {
    setSelectedDay(new Date(year, month, day));
    setSelectedTime(null);
  };

  // Формирует текст выбранной даты для заголовка справа.
  // Например: "Пт. 1 ноя"
  const formatSelectedDay = () => {
    // Получаем название дня недели по номеру дня
    // getDay(): Вс = 0, Пн = 1, ... Сб = 6
    const dayName = weekDays[selectedDay.getDay()];
    // Получаем число месяца
    const dayNumber = selectedDay.getDate();
    // Получаем название месяца, сокращаем до 3 букв
    //"Ноябрь" → "ноя"
    const monthName = months[selectedDay.getMonth()]
      .slice(0, 3)
      .toLowerCase();
    // Возвращаем готовую строку для отображения
    return `${dayName}. ${dayNumber} ${monthName}`;
  };

  const getBgColor = (time: string, status: "busy" | "free") => {
    if (selectedTime === time) {
      return "bg-gradient-to-b from-[#FF7A21] to-[#FFB800] text-white";
    }

    if (status === "busy") {
      return "bg-[#D8EEFF] text-[#8CA4B8] cursor-not-allowed";
    }

    return "bg-[#68C7E8] text-white hover:bg-[#4EB9DE]";
  };

  return (
    <div className="w-full">
      <div className="flex flex-col xl:flex-row gap-8">
        {/* КАЛЕНДАРЬ */}
        <div className="w-full xl:w-[330px]">
          <div className="flex items-center justify-center gap-6 mb-4">
            <button
              onClick={prevMonth}
              className="text-xl hover:text-orange-500 transition"
            >
              ◀
            </button>

            <h3 className="font-bold text-[24px]">
              {months[month]} {year}
            </h3>

            <button
              onClick={nextMonth}
              className="text-xl hover:text-orange-500 transition"
            >
              ▶
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;

              const isSelected =
                selectedDay.getDate() === day &&
                selectedDay.getMonth() === month &&
                selectedDay.getFullYear() === year;

              return (
                <button
                  key={day}
                  onClick={() => selectCalendarDay(day)}
                  className={`
                    w-8 h-8 rounded-full transition
                    hover:bg-orange-400 hover:text-white
                    ${isSelected ? "bg-orange-400 text-white" : ""}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* ВРЕМЯ */}
        <div className="flex-1">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={prevDay}
              className="font-bold text-[22px] hover:text-orange-500 transition"
            >
              ◀
            </button>

            <h3 className="font-bold text-[22px]">
              {formatSelectedDay()}
            </h3>

            <button
              onClick={nextDay}
              className="font-bold text-[22px] hover:text-orange-500 transition"
            >
              ▶
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {times.map((item) => (
              <button
                key={item.time}
                onClick={() => {
                  if (item.status === "free") {
                    setSelectedTime(item.time);
                  }
                }}
                disabled={item.status === "busy"}
                className={`
                  h-[34px]
                  rounded-[6px]
                  text-[14px]
                  transition
                  ${getBgColor(item.time, item.status)}
                `}
              >
                {item.time}
              </button>
            ))}
          </div>

          {/* ОБОЗНАЧЕНИЯ */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-[92px] h-[25px] rounded bg-[#D8EEFF]" />
              <span>Занято</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-[92px] h-[25px] rounded bg-[#68C7E8]" />
              <span>Свободно</span>
            </div>

            {selectedTime && (
              <div className="flex items-center gap-3">
                <div className="w-[92px] h-[25px] rounded bg-gradient-to-b from-[#FF7A21] to-[#FFB800] flex items-center justify-center">
                  <span className="text-[14px] font-medium text-white">
                    {selectedTime}
                  </span>
                </div>

                <span className="text-[17px] font-medium text-[#0C2647]">
                  - Занято вами
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}