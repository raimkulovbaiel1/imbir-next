import React from "react";
import use from "@/shared/assets/img/Crocedural/img4.png";

interface Props {
  title: string;
  category: string;
  price: string;
}

export const Crocedural = ({
  title,
  category,
  price,
}: Props) => {
  return (
    <div
      className="  bg-white 
        rounded-[20px]
        p-4
        md:p-5
        flex
        flex-col
        md:flex-row
        md:items-center
        justify-between
        gap-5
      "
    >
      {/* TOP MOBILE */}
      <div className="flex justify-between items-start md:hidden">
        <div className="flex gap-3">
          
          <div className="relative shrink-0">
            <img
              src={use.src}
              alt="procedure"
              className="
                w-[95px]
                h-[95px]
                rounded-[16px]
                object-cover
              "
            />

            <div
              className=" absolute 
                bottom-1
                left-1
                bg-white
                rounded-full
                px-2
                py-[2px]
                text-[12px]
                font-semibold
                flex
                items-center
                gap-1
              "
            >
              ⭐ 4.9
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            <h2
              className="
                text-[#0C2647]
                font-bold
                text-[22px]
                leading-none
              "
            >
              {title}
            </h2>

            <p
              className="
                text-[#0C2647]
                text-[16px]
              "
            >
              {category}
            </p>

            <p
              className="
                mt-3
                text-[#0C2647]
                text-[14px]
              "
            >
              Стоимость:
              <span className="font-bold ml-1">
                {price}
              </span>
            </p>

            <p
              className="
                mt-1
                text-[#0C2647]
                text-[14px]
              "
            >
              Клиника:
              <span className="font-bold ml-1">
                Nova Clinic
              </span>
            </p>
          </div>
        </div>

        <div className="-mt-1">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9FD3F2"
            strokeWidth="2"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </div>
      </div>

      {/* MOBILE SCHEDULE */}
      <div className="md:hidden text-[#0C2647]">
        <p className="text-[15px] mb-2">
          График работы:
        </p>

        <p className="font-bold text-[15px]">
          Пн, Ср, Пт 10:30 - 16:30
        </p>

        <p className="font-bold text-[15px]">
          Вт, Чт, Сб 10:30 - 16:30
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex w-full items-center justify-between gap-4">
        
        <div className="flex gap-4">
          {/* IMAGE */}
          <div className="relative">
            <img
              src={use.src}
              alt="procedure"
              className="
                w-[125px]
                h-[125px]
                rounded-[16px]
                object-cover
              "
            />

            <div
              className="
                absolute
                bottom-1
                left-1
                bg-white
                rounded-full
                px-2
                py-[2px]
                text-[12px]
                font-semibold
                flex
                items-center
                gap-1
              "
            >
              ⭐ 4.9
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2
              className="
                text-[#0C2647]
                font-bold
                text-[34px]
                leading-none
              "
            >
              {title}
            </h2>

            <p
              className="
                text-[#0C2647]
                font-semibold
                text-[22px]
              "
            >
              {category}
            </p>

            <p
              className="
                mt-3
                text-[#0C2647]
                text-[20px]
              "
            >
              Стоимость:
              <span className="font-bold ml-2">
                {price}
              </span>
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div
          className="
            text-[16px]
            text-[#0C2647]
          "
        >
          <p className="mb-3">
            График работы:
          </p>

          <p className="font-bold">
            Пн, Ср, Пт 10:30 - 16:30
          </p>

          <p className="font-bold">
            Вт, Чт, Сб 10:30 - 16:30
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end">
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
    </div>
  );
};