"use client";

import { useState } from "react";

const allDoctors = [
  "Абдрахманова Айгерим Алтыбайкызы",
  "Абдраев Аскар Жусупович",
  "Бекназарова Гулназ Кулматовна",
  "Бекмухамедов Азамат Жанышович",
  "Джуманова Нургуль Нурлановна",
  "Raimkulov Baiel Urustanbekovich",
];

const selectedDoctors = [
  "Мамбетова Назгуль Бакытовна",
  "Мухамедова Мухаббат Рыскуловна",
  "Нурбаев Данияр Кадырбаевич",
  "Суюмбаев Арсен Акимович",
  "Токтогулова Жаркынай Маматкуловна",
  "Чолпонкулова Мейрамкан Бекешовна",
  "Чолпонкулова Мейрамкан Бекешовна",
];

const ProcedureDoctors = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = allDoctors.filter((doctor) =>
    doctor.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="w-full">
      <h2 className="text-[16px] font-bold text-white sm:text-[22px] md:text-[22px]">
        Врачи, выполняющие процедуру
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start md:gap-7">
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="min-w-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по имени"
            className="block h-[42px] w-full rounded-t-[8px] rounded-b-none border border-[#0B2D57] bg-white px-4 text-[14px] text-[#092C56] outline-none placeholder:text-[#7F95AD] sm:h-[48px] sm:text-[17px] md:text-[20px]"
          />

          <div className="min-h-[210px] max-h-[255px] overflow-y-auto rounded-b-[24px] bg-white px-4 py-4 sm:px-6 sm:py-5 md:min-h-[255px] md:max-h-[255px]">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <label
                  key={doctor}
                  className="flex min-w-0 cursor-pointer items-center gap-3 py-2 text-[12px] text-[#092C56] sm:text-[15px] md:text-[16px]"
                >
                  <input
                    type="checkbox"
                    className="h-[18px] w-[18px] shrink-0 accent-[#FFD600] md:h-[21px] md:w-[21px]"
                  />

                  <span className="min-w-0">{doctor}</span>
                </label>
              ))
            ) : (
              <p className="py-2 text-[14px] text-[#092C56] md:text-[18px]">
                Врач не найден
              </p>
            )}
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className="min-w-0">
          <h3 className="mb-2 text-[16px] font-normal text-[#CAE9FF] sm:text-[20px] md:-mt-[38px] md:text-[22px]">
            Врачи, которых вы отметили
          </h3>

          <div className="min-h-[210px] max-h-[300px] overflow-y-auto rounded-[24px] bg-white px-4 py-4 sm:px-6 sm:py-5 md:min-h-[255px]">
            {selectedDoctors.map((doctor, index) => (
              <label
                key={`${doctor}-${index}`}
                className="flex min-w-0 cursor-pointer items-center gap-3 py-2 text-[12px] text-[#092C56] sm:text-[15px] md:text-[16px]"
              >
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-[18px] w-[18px] shrink-0 accent-[#FFD600] md:h-[21px] md:w-[21px]"
                />

                <span className="min-w-0">{doctor}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureDoctors;