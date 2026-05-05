"use client";

import Image from "next/image";
import { useDoctorSlider } from "../model/useDoctorSlider";
import clinic from "@/shared/assets/img/ClinickProfile/photo.png";
import clinicprofile from "@/shared/assets/img/Clinic/logo3.png";

const mainImages = [clinic, clinic, clinic, clinic];
const thumbs = [clinicprofile, clinicprofile, clinicprofile, clinicprofile];

export default function DoctorSlider() {
  const { active, setActive, next, prev } = useDoctorSlider(mainImages.length);

  return (
    <div className="w-full max-w-[500px]">

      {/* КАРТОЧКА */}
      <div className="bg-white rounded-[30px] p-6 shadow-sm relative mb-6">

        {/* Закладка */}
        <div className="absolute top-5 right-6 text-[#C6E2FF]">
          <svg width="28" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        </div>

        {/* ГЛАВНОЕ ФОТО */}
        <div className="relative w-full h-[280px] md:h-[360px]">
          <Image
            src={mainImages[active]}
            alt="clinic"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* РЕЙТИНГ */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[#FFD700] text-2xl">★</span>
          <span className="font-bold text-xl text-[#1A1C1E]">4.9</span>
        </div>
      </div>

      {/*СЛАЙДЕР СНИЗУ */}
      <div className="flex items-center justify-between">

        {/* ← */}
        <button onClick={prev} className="p-2 active:scale-90">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/*THUMBS */}
        <div className="flex gap-3">
          {thumbs.map((img, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`
                w-[70px] h-[70px] rounded-[12px] overflow-hidden cursor-pointer lg:h-[70px] lg:w-[100px] transition
                ${active === i
                  ? "border-1 border-[#3182CE]"
                  : ""
                }
              `}
            >
              <Image
                src={img}
                alt="thumb"
                width={70}
                height={55}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* → */}
        <button onClick={next} className="p-2 active:scale-90">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>
    </div>
  );
}