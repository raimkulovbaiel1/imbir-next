"use client";
import { useState } from "react";
export default function Calendar() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const times = [
    {
      time: "10:00 - 10:30",
      status: "busy",
    },
    {
      time: "10:30 - 11:00",
      status: "free",
    },
    {
      time: "11:00 - 11:30",
      status: "free",
    },
    {
      time: "11:30 - 12:00",
      status: "busy",
    },
    {
      time: "12:00 - 12:30",
      status: "free",
    },
    {
      time: "12:30 - 13:00",
      status: "free",
    },
    {
      time: "13:00 - 13:30",
      status: "free",
    },
    {
      time: "13:30 - 14:00",
      status: "busy",
    },
    {
      time: "14:00 - 14:30",
      status: "free",
    },
  ];
  const getBgColor = (
    time: string,
    status: string
  ) => {
    if (selectedTime === time) {
      return "bg-[#FFA726]";
    }

    if (status === "busy") {
      return "bg-[#D8EEFF] text-[#8CA4B8]";
    }

    return "bg-[#68C7E8] text-white";
  };
  const [currentDate, setCurrentDate] = useState(new Date());
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
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col xl:flex-row gap-8">

        {/* НЕ ТРОЛГАЙТ CALENDAR */}
        <div>
          <div className="flex items-center justify-center gap-6 mb-4">
            <button onClick={prevMonth}>◀</button>

            <h3 className="font-bold text-[24px]">
              {months[month]} {year}
            </h3>

            <button onClick={nextMonth}>▶</button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => (
              <button
                key={i}
                className="
              w-8
              h-8
              rounded-full
              hover:bg-orange-400
              hover:text-white
            "
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* ПЕРЕДЕЛАЙТЬ ЧТО БЫ ПРИ НАЖВТИ ДНИ И ВРЕМЯ, ПОКАЗАЛИ КАКИЕ ДНИ СВОБОДНЫ ВРАЧИ.*/}
        <div className="flex-1">
          <h3 className="font-bold flex justify-center text-[22px] mb-4">
            ◀ Пт. 1 ноя ▶
          </h3>

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

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-14 h-5 rounded bg-[#D8EEFF]" />
              <span>Занято</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-14 h-5 rounded bg-[#68C7E8]" /> 
              
              <span>Свободно</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-14 h-5 rounded bg-[#FFA726]" />

              <span>Занято вами</span>
            </div>
          </div>

          {selectedTime && (
            <p className="mt-4 font-semibold text-[#0C2647]">
              Вы выбрали: {selectedTime}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}