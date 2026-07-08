"use client";

import { FormEvent, useState } from "react";

import DoctorFormField from "@/entities/doctor-form/ui/DoctorFormField";
import DoctorCalendar from "@/features/doctor-calendar/ui/DoctorCalendar";
import DoctorPhotoUpload from "@/features/doctor-photo-upload/ui/DoctorPhotoUpload";
import DoctorWorkSchedule from "@/features/doctor-work-schedule/ui/DoctorWorkSchedule";

const DoctorCreateForm = () => {
  const [clinicExperiences, setClinicExperiences] = useState([""]);
  const [skills, setSkills] = useState([""]);

  const handleAddClinicExperience = () => {
    setClinicExperiences((prev) => [...prev, ""]);
  };

  const handleClinicExperienceChange = (
    index: number,
    value: string
  ) => {
    setClinicExperiences((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index ? value : item
      )
    );
  };

  const handleAddSkill = () => {
    setSkills((prev) => [...prev, ""]);
  };

  const handleSkillChange = (
    index: number,
    value: string
  ) => {
    setSkills((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index ? value : item
      )
    );
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log("Форма отправлена");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[1050px] px-4 py-6 sm:px-6 sm:py-8 lg:px-0"
    >
      {/* ЗАГОЛОВОК */}
      <h1 className="text-[18px] font-bold text-[#092C56] sm:text-[22px] lg:text-[30px]">
        Форма для заполнения врача
      </h1>

      {/* ОСНОВНОЙ LAYOUT */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[150px_minmax(0,1fr)] md:items-start md:gap-x-[40px] lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-x-[50px]">
        {/* ЛЕВАЯ КОЛОНКА — ФОТО */}
        <div className="mx-auto md:mx-0">
          <DoctorPhotoUpload />
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className="min-w-0 w-full md:max-w-[650px]">
          {/* ИМЯ */}
          <DoctorFormField label="Имя врача" required>
            <input
              type="text"
              className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
            />
          </DoctorFormField>

          {/* ФАМИЛИЯ */}
          <div className="mt-4">
            <DoctorFormField label="Фамилия врача" required>
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
              />
            </DoctorFormField>
          </div>

          {/* СПЕЦИАЛИЗАЦИЯ */}
          <div className="mt-7">
            <DoctorFormField label="Специализация" required>
              <input
                type="text"
                placeholder="Кардиолог, терапевт......"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition placeholder:text-[#BCC6CF] focus:border-[#37B9DF]"
              />
            </DoctorFormField>
          </div>

          {/* СТАЖ */}
          <div className="mt-10">
            <DoctorFormField label="Стаж работы" required>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  placeholder="0000"
                  className="h-[36px] w-[90px] rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
                />

                <span className="text-[13px] font-semibold text-[#092C56]">
                  лет
                  <span className="ml-1 text-red-500">*</span>
                </span>
              </div>
            </DoctorFormField>
          </div>

          {/* КЛИНИКА + СТАЖ */}
          <div className="mt-10">
            <DoctorFormField
              label="Название клиники + стаж работы"
              required
            >
              <div className="space-y-2">
                {clinicExperiences.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={value}
                      onChange={(event) =>
                        handleClinicExperienceChange(
                          index,
                          event.target.value
                        )
                      }
                      className="h-[36px] min-w-0 flex-1 rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
                    />

                    {index === 0 && (
                      <button
                        type="button"
                        onClick={handleAddClinicExperience}
                        className="flex h-8 w-8 shrink-0 items-center justify-center text-[28px] text-[#092C56]"
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </DoctorFormField>
          </div>

          {/* ГРАФИК + КАЛЕНДАРЬ */}
          <div className="mt-9 flex flex-col gap-6 md:flex-row md:items-start md:gap-[40px]">
            {/* ГРАФИК РАБОТЫ */}
            <div className="w-full md:w-[300px] md:shrink-0">
              <DoctorWorkSchedule />
            </div>

            {/* КАЛЕНДАРЬ */}
            <div className="w-full md:mt-[58px] md:w-[352px] md:shrink-0">
              <DoctorCalendar />
            </div>
          </div>

          {/* НАЗВАНИЕ КЛИНИКИ */}
          <div className="mt-10">
            <DoctorFormField
              label="Название клиники (организации)"
              required
            >
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
              />
            </DoctorFormField>
          </div>

          {/* АДРЕС */}
          <div className="mt-5">
            <DoctorFormField
              label="Адрес клиники (организации)"
              required
            >
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
              />
            </DoctorFormField>
          </div>

          {/* НАВЫКИ */}
          <div className="mt-10">
            <DoctorFormField
              label="Профессиональные навыки"
              required
            >
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={skill}
                      onChange={(event) =>
                        handleSkillChange(
                          index,
                          event.target.value
                        )
                      }
                      className="h-[36px] min-w-0 flex-1 rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none transition focus:border-[#37B9DF]"
                    />

                    {index === 0 && (
                      <button
                        type="button"
                        onClick={handleAddSkill}
                        className="flex h-8 w-8 shrink-0 items-center justify-center text-[28px] text-[#092C56]"
                      >
                        +
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </DoctorFormField>
          </div>

          {/* ОПИСАНИЕ */}
          <div className="mt-5">
            <DoctorFormField label="Описание">
              <textarea
                placeholder="Напишите информацию о враче"
                className="min-h-[150px] w-full resize-y rounded-[9px] border border-[#D5DDE5] bg-white p-3 text-[16px] text-[#092C56] outline-none transition placeholder:text-[#BCC6CF] focus:border-[#37B9DF]"
              />
            </DoctorFormField>
          </div>

          {/* ОБРАЗОВАНИЕ */}
          <div className="mt-5">
            <DoctorFormField label="Образование" required>
              <textarea
                placeholder="Укажите образование и повышение квалификации врача"
                className="min-h-[150px] w-full resize-y rounded-[9px] border border-[#D5DDE5] bg-white p-3 text-[16px] text-[#092C56] outline-none transition placeholder:text-[#BCC6CF] focus:border-[#37B9DF]"
              />
            </DoctorFormField>
          </div>

          {/* КНОПКА */}
          <div className="mt-7 flex justify-end">
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

export default DoctorCreateForm;