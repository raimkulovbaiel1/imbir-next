"use client";

import { FormEvent, useState } from "react";

import ClinicFormField from "@/entities/Clinic-form/ui/ClinicFormField";
import ClinicCalendar from "@/features/clinic-calendar/ui/ClinicCalendar";
import ClinicPhotoUpload from "@/features/clinic-photo-upload/ui/ClinicPhotoUpload";
import ClinicWorkSchedule from "@/features/clinic-work-schedule/ui/ClinicWorkSchedule";

const ClinicCreateForm = () => {
  const [, setClinicImages] = useState<string[]>([]);

  const handleImagesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files) return;

    const urls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setClinicImages(urls);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log("Процедура сохранена");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[1050px]"
    >
      <h1 className="text-[18px] font-bold text-[#092C56] sm:text-[22px] lg:text-[30px]">
        Форма для заполнения процедуры
      </h1>

      {/* ВЕРХ */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[150px_minmax(0,1fr)] md:items-start md:gap-x-[40px] lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-x-[50px]">

        <div className="mx-auto md:mx-0">
          <ClinicPhotoUpload />
        </div>

        <div className="min-w-0 w-full md:max-w-[650px]">

          <ClinicFormField
            label="Название процедуры"
            required
          >
            <input
              type="text"
              className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[20px] text-[#092C56] outline-none focus:border-[#37B9DF]"
            />
          </ClinicFormField>

          <div className="mt-5">
            <ClinicFormField
              label="Специализация процедуры"
              required
            >
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[20px] text-[#092C56] outline-none focus:border-[#37B9DF]"
              />
            </ClinicFormField>
          </div>

          {/* СТОИМОСТЬ */}
          <div className="mt-5">
            <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">

              <label className="text-[18px] font-bold text-[#092C56]">
                Стоимость процедуры:
              </label>

              <input
                type="number"
                placeholder="0000"
                className="h-[40px] w-[140px] rounded-[12px] border border-[#D5DDE5] bg-white px-3 text-center text-[18px] text-[#092C56] outline-none placeholder:text-[#D7D7D7] focus:border-[#37B9DF]"
              />

              <span className="text-[18px] text-[#092C56]">
                сом
              </span>

              <span className="text-[18px] text-red-500">
                *
              </span>

            </div>
          </div>

          <div className="mt-5">
            <ClinicFormField
              label="Название клиники, проводящей процедуру"
              required
            >
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none focus:border-[#37B9DF]"
              />
            </ClinicFormField>
          </div>

          <div className="mt-8">
            <ClinicFormField
              label="Адрес клиники, проводящей процедуру"
              required
            >
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none focus:border-[#37B9DF]"
              />
            </ClinicFormField>
          </div>

          {/* ГРАФИК + КАЛЕНДАРЬ */}
          <div className="mt-9 flex flex-col gap-6 md:flex-row md:items-start md:gap-[40px]">

            <div className="w-full md:w-[300px] md:shrink-0">
              <ClinicWorkSchedule />
            </div>

            <div className="w-full md:mt-[58px] md:w-[352px] md:shrink-0">
              <ClinicCalendar />
            </div>

          </div>

          {/* КНОПКА */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="w-full rounded-[9px] bg-[#FFA500] px-10 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#E89500] sm:w-auto sm:min-w-[190px]"
            >
              Готово
            </button>
          </div>

        </div>

      </div>
    </form>
  );
};

export default ClinicCreateForm;