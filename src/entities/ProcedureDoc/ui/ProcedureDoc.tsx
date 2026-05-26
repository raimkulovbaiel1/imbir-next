import React from "react";

import Image from "next/image";
import clinicDoc from "@/shared/assets/img/ProcedureDoc/imggoc.png";

const ProcedureDoc = () => {
  return (
    <div className="w-full flex flex-col items-center">

      <div
        className="relative w-full max-w-[263px]  h-[302px] overflow-hidden  rounded-[10px] ">
        <Image
          src={clinicDoc}
          alt="clinic"
          priority
          fill
          className="object-cover rounded-[10px]"
        />

        <div className="absolute top-4 right-4">
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

      <div className="mt-3 w-full max-w-[263px]">
        <h3
          className="text-white font-bold text-[18px] sm:text-[22px] md:text-[30px]">
          MedCenter
        </h3>
        <p
          className=" text-white/80 text-[12px] sm:text-[14px] md:text-[16px]">
          ул. Московская 137
        </p>
      </div>
    </div>
  );
};

export default ProcedureDoc;