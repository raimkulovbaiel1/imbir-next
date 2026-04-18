"use client";

import Image from "next/image";
import logo1 from "@/shared/assets/logo/MedicalCards/logo1.svg";
import logo2 from "@/shared/assets/logo/MedicalCards/logo2.svg";
import logo3 from "@/shared/assets/logo/MedicalCards/logo3.svg";

const cards = [
  {
    id: 1,
    title: "Клиники",
    image: logo1,
  },
  {
    id: 2,
    title: "Врачи",
    image: logo2,
  },
  {
    id: 3,
    title: "Процедуры",
    image: logo3,
  },
];

export default function MedicalCards() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto grid max-w-289.75 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
          <div
            key={item.id}
            className="group relative h-[245px] overflow-hidden rounded-[20px] bg-gradient-to-b from-[#0B2D59] via-[#11466E] to-[#27B3D9] p-4 transition duration-300 hover:scale-[1.02]"
          >
            <div className="absolute right-0 top-0 h-[60px] w-[55px] rounded-bl-[14px] bg-white" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full ">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                />
              </div>

              <h3 className="mt-6 text-[30px] font-bold leading-none text-white">
                {item.title}
              </h3>

              <button className="mt-auto w-fit rounded-full bg-[#F2F2F2] px-4 py-[6px] text-[16px] font-medium text-[#1E1E1E] transition hover:bg-white">
                Подробнее
              </button>
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}