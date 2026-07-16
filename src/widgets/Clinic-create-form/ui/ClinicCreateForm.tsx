"use client";
import Image from "next/image";

import { FormEvent, useState } from "react";


import ClinicFormField from "@/entities/Clinic-form/ui/ClinicFormField";
import {
  DOCTORS,
  SELECTED_DOCTORS,
} from "@/entities/Clinic-form/model/clinic-form.data";
import ClinicCalendar from "@/features/clinic-calendar/ui/ClinicCalendar";
import ClinicPhotoUpload from "@/features/clinic-photo-upload/ui/ClinicPhotoUpload";
import ClinicWorkSchedule from "@/features/clinic-work-schedule/ui/ClinicWorkSchedule";
import ClinicUploadModal from "@/features/clinic-upload-modal/ui/ClinicUploadModal";
const ClinicCreateForm = () => {
  const [search, setSearch] = useState("");
  const [clinicImages, setClinicImages] = useState<string[]>([]);
const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedDoctorIds, setSelectedDoctorIds] = useState<number[]>(
    SELECTED_DOCTORS.map((doctor) => doctor.id)
  );

  const filteredDoctors = DOCTORS.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDoctorToggle = (doctorId: number) => {
    setSelectedDoctorIds((prev) =>
      prev.includes(doctorId)
        ? prev.filter((id) => id !== doctorId)
        : [...prev, doctorId]
    );
  };
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

    setIsUploadOpen(true);
  };

   return (
  <>
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[1050px]"
    >
      <h1 className="text-[18px] font-bold text-[#092C56] sm:text-[22px] lg:text-[30px]">
        Форма для заполнения клиники
      </h1>

      {/* ВЕРХ */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[150px_minmax(0,1fr)] md:items-start md:gap-x-[40px] lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-x-[50px]">
        <div className="mx-auto md:mx-0">
          <ClinicPhotoUpload />
        </div>

        <div className="min-w-0 w-full md:max-w-[650px]">
          <ClinicFormField
            label="Название клиники"
            required
          >
            <input
              type="text"
              className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[20px] text-[#092C56] outline-none focus:border-[#37B9DF]"
            />
          </ClinicFormField>

          <div className="mt-5">
            <ClinicFormField
              label="Специализация (одна или несколько)"
              required
            >
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[20px] text-[#092C56] outline-none focus:border-[#37B9DF]"
              />
            </ClinicFormField>
          </div>

          <div className="mt-8">
            <ClinicFormField
              label="Адрес клиники"
              required
            >
              <input
                type="text"
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none focus:border-[#37B9DF]"
              />
            </ClinicFormField>
          </div>

          <div className="mt-5">
            <ClinicFormField
              label="Адрес второго филиала"
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
              label="Контакты"
              required
            >
              <input
                type="tel"
                placeholder="+996 000-000-000..."
                className="h-[36px] w-full rounded-[9px] border border-[#D5DDE5] bg-white px-3 text-[13px] text-[#092C56] outline-none placeholder:text-[#BCC6CF] focus:border-[#37B9DF]"
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

          {/* ОПИСАНИЕ */}
          <div className="mt-10">
            <ClinicFormField label="Описание">
              <textarea
                placeholder="Напишите информацию о клинике"
                className="min-h-[170px] w-full resize-y rounded-[9px] border border-[#D5DDE5] bg-white p-3 text-[18px] text-[#092C56] outline-none placeholder:text-[#BCC6CF] focus:border-[#37B9DF]"
              />
            </ClinicFormField>
          </div>

          {/* ВРАЧИ */}
          <div className="mt-10">
            <ClinicFormField
              label="Врачи"
              required
            >
              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Укажите врача, работающего в данной клинике"
                className="h-[36px] w-full rounded-t-[9px] border border-[#D5DDE5] bg-white px-3 text-[18px] text-[#092C56] outline-none placeholder:text-[#BCC6CF]"
              />

              <div className="max-h-[220px] overflow-y-auto rounded-b-[9px] border border-t-0 border-[#D5DDE5] bg-white p-3">
                {filteredDoctors.map((doctor) => (
                  <label
                    key={doctor.id}
                    className="flex cursor-pointer items-center gap-3 py-1.5 text-[12px] text-[#092C56] sm:text-[18px]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDoctorIds.includes(
                        doctor.id
                      )}
                      onChange={() =>
                        handleDoctorToggle(doctor.id)
                      }
                      className="h-4 w-4 accent-[#FFA500]"
                    />

                    <span>{doctor.name}</span>
                  </label>
                ))}
              </div>
            </ClinicFormField>
          </div>

          {/* ОТМЕЧЕННЫЕ ВРАЧИ */}
          <div className="mt-6">
            <h2 className="mb-3 text-[12px] font-bold text-[#092C56] sm:text-[20px]">
              Врачи, которых вы отметили
            </h2>

            <div className="max-h-[240px] overflow-y-auto rounded-[9px] border border-[#D5DDE5] bg-white p-3">
              {SELECTED_DOCTORS.map((doctor) => (
                <label
                  key={doctor.id}
                  className="flex cursor-pointer items-center gap-3 py-1.5 text-[12px] text-[#092C56] sm:text-[18px]"
                >
                  <input
                    type="checkbox"
                    checked={selectedDoctorIds.includes(
                      doctor.id
                    )}
                    onChange={() =>
                      handleDoctorToggle(doctor.id)
                    }
                    className="h-4 w-4 accent-[#FFA500]"
                  />

                  <span>{doctor.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ФОТОГРАФИИ */}
          <div className="mt-10">
            <ClinicFormField
              label="Фотографии клиники"
              required
            >
              <label
                className="inline-flex cursor-pointer items-center justify-center rounded-[6px] bg-[#48B5D0] px-5 py-2 text-[12px] font-bold text-white transition hover:bg-[#35A9CA]"
              >
                Добавить фотографии

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImagesChange}
                  className="hidden"
                />
              </label>

              {clinicImages.length > 0 && (
                <div
                  className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
                >
                  {clinicImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[130px] overflow-hidden rounded-[10px] border border-[#D5DDE5] bg-white"
                    >
                      <Image
                        src={image}
                        alt={`Фото ${index + 1}`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </ClinicFormField>
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

    <ClinicUploadModal
      open={isUploadOpen}
      onClose={() => setIsUploadOpen(false)}
      onUpload={() => {
        console.log("Загрузка");
        setIsUploadOpen(false);
      }}
    />
  </>
);
};

export default ClinicCreateForm;