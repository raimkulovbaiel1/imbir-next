"use client";

import { ChangeEvent, useState } from "react";

const ProcedurePhotoUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handlePhotoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div className="w-full max-w-[150px]">
      <div className="relative h-[180px] w-[180px] overflow-hidden rounded-[4px] border-2 border-[#B9E8FF] bg-white">
        {preview && (
          <img
            src={preview}
            alt="Фото процедуры" className="relative h-[180px] w-[180px] overflow-hidden rounded-[4px] border border-[#75CFF0] bg-white"
          />
        ) || (
            <span className="flex h-full w-full items-center justify-center text-[12px] text-[#8AA0B5]">
              Фото
            </span>
          )}


      </div>

      <label className="mt-3 flex w-full cursor-pointer items-center justify-center rounded-[4px] bg-[#48B5D0] px-3 py-2 text-[12px] font-bold text-white transition hover:opacity-90">
        Добавить фото

        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ProcedurePhotoUpload;