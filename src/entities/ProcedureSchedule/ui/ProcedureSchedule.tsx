"use client";

import { useMemo, useState } from "react";

type TimeSlot = {
  id: number;
  time: string;
  status: "busy" | "free";
};

const initialTimes: TimeSlot[] = [
  { id: 1, time: "10:00 - 10:30", status: "busy" },
  { id: 2, time: "10:00 - 10:30", status: "free" },
  { id: 3, time: "10:00 - 10:30", status: "free" },
  { id: 4, time: "10:00 - 10:30", status: "busy" },
  { id: 5, time: "10:00 - 10:30", status: "busy" },
  { id: 6, time: "10:00 - 10:30", status: "free" },
  { id: 7, time: "10:00 - 10:30", status: "free" },
  { id: 8, time: "10:00 - 10:30", status: "busy" },
  { id: 9, time: "10:00 - 10:30", status: "free" },
  { id: 10, time: "10:00 - 10:30", status: "busy" },
  { id: 11, time: "10:00 - 10:30", status: "busy" },
  { id: 12, time: "10:00 - 10:30", status: "busy" },
  { id: 13, time: "10:00 - 10:30", status: "free" },
  { id: 14, time: "10:00 - 10:30", status: "free" },
];

const monthNames = [
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

const shortMonthNames = [
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

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const fullWeekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const ProcedureSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 1));

  const [selectedDate, setSelectedDate] = useState(
    new Date(2024, 10, 1),
  );

  const [times, setTimes] = useState<TimeSlot[]>(initialTimes);

  const [showTimeForm, setShowTimeForm] = useState(false);

  const [startTime, setStartTime] = useState("10:00");

  const [endTime, setEndTime] = useState("10:30");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [year, month]);

  const firstDayOffset = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();

    return firstDay === 0 ? 6 : firstDay - 1;
  }, [year, month]);

  const handlePreviousMonth = () => {
    setCurrentDate((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
    });
  };

  const handleSelectDay = (day: number) => {
    setSelectedDate(new Date(year, month, day));
  };

  const handlePreviousDay = () => {
    const newDate = new Date(selectedDate);

    newDate.setDate(newDate.getDate() - 1);

    setSelectedDate(newDate);

    setCurrentDate(
      new Date(newDate.getFullYear(), newDate.getMonth(), 1),
    );
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);

    newDate.setDate(newDate.getDate() + 1);

    setSelectedDate(newDate);

    setCurrentDate(
      new Date(newDate.getFullYear(), newDate.getMonth(), 1),
    );
  };

  const handleAddTime = () => {
    if (!startTime || !endTime) {
      return;
    }

    if (startTime >= endTime) {
      alert("Время окончания должно быть позже времени начала");
      return;
    }

    const newTime: TimeSlot = {
      id: Date.now(),
      time: `${startTime} - ${endTime}`,
      status: "free",
    };

    setTimes((prev) => [...prev, newTime]);

    setStartTime("10:00");
    setEndTime("10:30");
    setShowTimeForm(false);
  };

  const handleCancelTime = () => {
    setStartTime("10:00");
    setEndTime("10:30");
    setShowTimeForm(false);
  };

  const isSelectedDay = (day: number) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const selectedDateTitle = `${fullWeekDays[selectedDate.getDay()]}. ${selectedDate.getDate()} ${
    shortMonthNames[selectedDate.getMonth()]
  }`;

  return (
    <div className="w-full">
      {/* Заголовок */}
      <h2 className="text-[16px] font-bold text-white sm:text-[22px]">
        График процедуры
      </h2>

      {/* Кнопка редактирования */}
      <button
        type="button"
        className="mt-2 cursor-pointer rounded-[6px] border border-[#A9DDF7] px-5 py-1 text-[14px] text-[#CAE9FF] transition hover:bg-white/10 sm:text-[18px]"
      >
        Редактировать график
      </button>

      {/* Две карточки */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[437px_395px] md:items-start md:gap-[45px]">
        {/* ================= ВРЕМЯ ================= */}
        <div className="rounded-[18px] bg-white px-4 py-6 sm:px-8 sm:py-8 md:min-h-[300px] md:px-9">
          {/* Переключатель дня */}
          <div className="flex items-center justify-between text-[16px] font-bold text-[#092C56] sm:text-[18px]">
            <button
              type="button"
              onClick={handlePreviousDay}
              className="flex h-9 w-9 cursor-pointer items-center justify-center text-[38px] font-normal transition hover:opacity-60"
              aria-label="Предыдущий день"
            >
              ‹
            </button>

            <span>{selectedDateTitle}</span>

            <button
              type="button"
              onClick={handleNextDay}
              className="flex h-9 w-9 cursor-pointer items-center justify-center text-[38px] font-normal transition hover:opacity-60"
              aria-label="Следующий день"
            >
              ›
            </button>
          </div>

          {/* Сетка времени */}
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {times.map((slot) => (
              <button
                key={slot.id}
                type="button"
                className={`whitespace-nowrap rounded-[4px] px-2 py-1 text-[12px] transition sm:text-[14px] ${
                  slot.status === "busy"
                    ? "bg-[#48B5D0] text-white"
                    : "bg-[#CDEEFF] text-[#42ADD0]"
                }`}
              >
                {slot.time}
              </button>
            ))}

            {/* Кнопка добавить */}
            {!showTimeForm && (
              <button
                type="button"
                onClick={() => setShowTimeForm(true)}
                className="cursor-pointer whitespace-nowrap rounded-[4px] border border-[#56C9E8] px-2 py-1 text-[12px] text-[#42ADD0] transition hover:bg-[#EAF9FF] sm:text-[14px]"
              >
                Добавить +
              </button>
            )}

            {/* Форма выбора времени */}
            {showTimeForm && (
              <div className="col-span-2 rounded-[10px] border border-[#56C9E8] bg-[#F5FCFF] p-3 sm:col-span-3">
                <p className="mb-3 text-[14px] font-bold text-[#092C56]">
                  Выберите время
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                  {/* Начало */}
                  <label className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-[12px] text-[#45627D]">
                      Начало
                    </span>

                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="h-[38px] w-full rounded-[6px] border border-[#A9DDF7] bg-white px-2 text-[14px] text-[#092C56] outline-none focus:border-[#24B5D6]"
                    />
                  </label>

                  {/* Конец */}
                  <label className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-[12px] text-[#45627D]">
                      Конец
                    </span>

                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="h-[38px] w-full rounded-[6px] border border-[#A9DDF7] bg-white px-2 text-[14px] text-[#092C56] outline-none focus:border-[#24B5D6]"
                    />
                  </label>
                </div>

                {/* Кнопки формы */}
                <div className="mt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleCancelTime}
                    className="cursor-pointer rounded-[6px] border border-[#A9DDF7] px-3 py-1.5 text-[13px] text-[#45627D] transition hover:bg-[#EAF9FF]"
                  >
                    Отмена
                  </button>

                  <button
                    type="button"
                    onClick={handleAddTime}
                    className="cursor-pointer rounded-[6px] bg-[#24B5D6] px-3 py-1.5 text-[13px] text-white transition hover:opacity-80"
                  >
                    Добавить
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Легенда */}
          <div className="mt-10 space-y-3 text-[13px] text-[#092C56] sm:text-[16px]">
            <div className="flex items-center gap-3">
              <span className="shrink-0 rounded-[3px] bg-[#48B5D0] px-2 py-1 text-[10px] text-white">
                10:00 - 10:30
              </span>

              <span>- Занято пациентом</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="shrink-0 rounded-[3px] bg-[#CDEEFF] px-2 py-1 text-[10px] text-[#42ADD0]">
                10:00 - 10:30
              </span>

              <span>- Свободное окно</span>
            </div>
          </div>
        </div>

        {/* ================= КАЛЕНДАРЬ ================= */}
        <div className="rounded-[18px] bg-white px-4 py-6 text-[#092C56] sm:px-8 sm:py-8 md:min-h-[430px]">
          {/* Переключатель месяца */}
          <div className="flex items-center justify-between text-[16px] font-bold sm:text-[18px]">
            <button
              type="button"
              onClick={handlePreviousMonth}
              className="flex h-9 w-9 cursor-pointer items-center justify-center text-[38px] font-normal transition hover:opacity-60"
              aria-label="Предыдущий месяц"
            >
              ‹
            </button>

            <span>
              {monthNames[month]} {year}
            </span>

            <button
              type="button"
              onClick={handleNextMonth}
              className="flex h-9 w-9 cursor-pointer items-center justify-center text-[38px] font-normal transition hover:opacity-60"
              aria-label="Следующий месяц"
            >
              ›
            </button>
          </div>

          {/* Сетка календаря */}
          <div className="mt-8 grid grid-cols-7 gap-y-4 text-center text-[13px] sm:text-[16px]">
            {/* Дни недели */}
            {weekDays.map((day) => (
              <span key={day} className="font-bold text-[#07495A]">
                {day}
              </span>
            ))}

            {/* Пустые ячейки */}
            {Array.from({ length: firstDayOffset }).map((_, index) => (
              <span key={`empty-${index}`} />
            ))}

            {/* Дни месяца */}
            {Array.from({ length: daysInMonth }, (_, index) => {
              const day = index + 1;
              const selected = isSelectedDay(day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={`mx-auto flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition hover:bg-[#FFE2B5] ${
                    selected
                      ? "bg-[#FFA500] text-white hover:bg-[#FFA500]"
                      : ""
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureSchedule;