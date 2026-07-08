"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

const DoctorPhotoUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPhoto(imageUrl);
  };

  const handleOpenFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mx-auto w-[140px] shrink-0 sm:mx-0">
      <button
        type="button"
        onClick={handleOpenFile}
        className="relative h-[180px] w-[180px] overflow-hidden rounded-[4px] border border-[#75CFF0] bg-white"
      >
        {photo ? (
          <Image
            src={photo}
            alt="Фото врача"
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-[12px] text-[#8AA0B5]">
            Фото
          </span>
        )}
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
      />

      <button
        type="button"
        onClick={handleOpenFile}
        className="mt-2 w-full rounded-[4px] bg-[#37B9DF] px-3 py-1.5 text-[14px] font-semibold text-white transition hover:bg-[#279FC2]"
      >
        Добавить фото
      </button>
    </div>
  );
};

export default DoctorPhotoUpload;