"use client";

import Image from "next/image";
import vitamin from "@/shared/assets/img/userStatus/imbir.png";

export default function UserStatus() {
  return (
    <section className="w-full py-8 md:py-14">
      <div className="
        max-w-[1220px]
        mx-autoq
        flex flex-col lg:flex-row
        items-center
        gap-8 md:gap-0
      ">

        {/* LEFT IMAGE */}
        <div className="flex justify-center w-full lg:w-auto">
          <Image
            src={vitamin}
            alt="vitamin"
            width={333}
            height={408}
            className="
              w-[180px] h-[180px]
              sm:w-[240px] sm:h-[240px]
              md:w-[420px] md:h-[320px]
              object-contain
            "
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full">

          {/* TITLE */}
          <div className="text-center lg:text-left">
            <p className="
              text-[#0C2647]
              font-semibold
              text-[18px] md:text-[28px]
            ">
              Статус пользователя
            </p>

            <h2 className="
              text-[#1B7FA4]
              font-bold
              leading-none
              mt-1
              text-[50px]
              sm:text-[56px]
              md:text-[72px]
            ">
              Витамин С
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="
            mt-5
            text-[#0C2647]
            leading-relaxed
            text-[14px]
            md:text-[16px]
            text-center lg:text-left
            max-w-[900px]
          ">
            Ваши отзывы действуют на врачей как ударная доза витамина С!
            Вы замечаете светлые стороны, дарите надежду другим пациентам
            и помогаете клинике расцветать. Спасибо за ваш позитивный заряд!
          </p>

          {/* LABELS */}
          <div className="
            flex justify-between
            mt-8 md:mt-12
            text-[#0C2647]
            font-medium
            text-[16px]
            sm:text-[14px]
            md:text-[22px]
            gap-4
          ">
            <span>Положительных отзывов</span>
            <span>Отрицательных отзывов</span>
          </div>

          {/* PROGRESS */}
          <div className="relative mt-4">

            {/* BAR */}
            <div className="
              h-[45px] md:h-[65px]
              rounded-full
              bg-[#E7E7E7]
              overflow-hidden
            ">
              <div
                className="
                  h-full
                  w-[90%]
                  rounded-full
                  bg-gradient-to-r
                  from-[#7BC5E5]
                  to-[#2AA7D6]
                "
              />
            </div>

            {/* LEFT PERCENT */}
            <div className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              w-[45px] h-[45px]
              md:w-[65px] md:h-[65px]
              rounded-full
              bg-white
              border-[4px]
              border-[#2AA7D6]
              flex items-center justify-center
              font-bold
              text-[#0C2647]
              text-[14px] md:text-[22px]
            ">
              90%
            </div>

            {/* RIGHT PERCENT */}
            <div className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              w-[45px] h-[45px]
              md:w-[65px] md:h-[65px]
              rounded-full
              bg-white
              border-[4px]
              border-[#D9D9D9]
              flex items-center justify-center
              font-bold
              text-[#0C2647]
              text-[14px] md:text-[22px]
            ">
              10%
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}