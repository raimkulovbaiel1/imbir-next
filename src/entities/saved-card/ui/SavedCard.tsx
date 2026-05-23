"use client";

import Image from "next/image";
import clinic from "@/shared/assets/img/profileTab/img.png";

export default function SavedCard() {
  return (
    <div className="w-full min-w-0">

      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[302px] overflow-hidden  ">
        <Image
          src={clinic}
          alt="clinic"
          priority
          fill
          className=" rounded-[10px]"
        />

        <div className="absolute top-3 left-27 md:left-auto md:right-10 md:top-5">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#FFA500"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </div>
      </div>

      <div className="mt-0 px-7">
        <h3 className="text-white font-monserrat font-bold text-[18px] sm:text-[22px] md:text-[30px]">
          MedCenter
        </h3>

        <p className="text-white/80 text-[12px] sm:text-[14px] md:text-[16px]">
          ул. Московская 137
        </p>
      </div>

    </div>
  );
}