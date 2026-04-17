"use client";

import Image from "next/image";

import derma from "@/shared/assets/logo/categories/derma.svg";
import pediatria from "@/shared/assets/logo/categories/pediatria.svg";
import stoma from "@/shared/assets/logo/categories/stoma.svg";
import lor from "@/shared/assets/logo/categories/lor.svg";
import neuro from "@/shared/assets/logo/categories/neuro.svg";
import cardio from "@/shared/assets/logo/categories/cardio.svg";
import eye from "@/shared/assets/logo/categories/eye.svg";
import psycho from "@/shared/assets/logo/categories/psycho.svg";
import ortho from "@/shared/assets/logo/categories/ortho.svg";

const categories = [
  { title: "Дерматология", icon: derma },
  { title: "Педиатрия", icon: pediatria },
  { title: "Стоматология", icon: stoma },
  { title: "ЛОР", icon: lor },
  { title: "Неврология", icon: neuro },
  { title: "Кардиология", icon: cardio },
  { title: "Офтальмология", icon: eye },
  { title: "Психология", icon: psycho },
  { title: "Ортопедия", icon: ortho },
];

export const Categories = () => {
  return (
    <section className= "w-full bg-[#f5f5f5] py-12" >
    <div className="max-w-[1200px] mx-auto px-4" >

      {/* Заголовок */ }
      < h2 className = "text-[50px] font-bold text-[#0C2647] mb-8" >
        Категории:
  </h2>

  {/* Сетка */ }
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" >
  {
    categories.map((item, index) => (
      <div
              key= { index }
              className = "bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition cursor-pointer"
      >
      <Image
                src={ item.icon }
                alt = { item.title }
                width = { 81}
                height = { 81}
                className = "mb-4"
      />

      <p className="text-[18px] font-mont font-semibold text-[#0C2647]" >
      { item.title }
      </p>
    </div>
    ))
  }
    </div>

    </div>
    </section>
  );
};