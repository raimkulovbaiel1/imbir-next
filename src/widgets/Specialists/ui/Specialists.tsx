"use client";

import Specialists from "@/entities/Specialists/ui/Specialists";
import Specialistssearch from "@/features/Specialists-search/ui/Specialists";
import docter from "@/shared/assets/img/Specialists/imgs1.png"
const doctors = [
  {
    id: 1,
    name: "Кадыркулов Нурлан",
    job: "Хирург",
    image: docter,
    rating: "4.9",
  },
  {
    id: 2,
    name: "Кадыркулов Нурлан",
    job: "Хирург",
     image: docter,
    rating: "4.9",
  },
  {
    id: 3,
    name: "Кадыркулов Нурлан",
    job: "Хирург",
     image: docter,
    rating: "4.9",
  },
  {
    id: 4,
    name: "Кадыркулов Нурлан",
    job: "Хирург",
     image: docter,
    rating: "4.9",
  },
];

export default function Specialist() {
  return (
    <section className="w-full py-10">
      <div className="max-w-305 mx-auto px-4">

        {/* TITLE */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-[#0C2647]">
            Специалисты
          </h2>
          <span className="text-2xl">›</span>
        </div>

        {/* SEARCH */}
        <Specialistssearch/>

        {/* LIST */}
        <div className="
          mt-6 
          flex gap-4 overflow-x-auto pb-2
          lg:grid lg:grid-cols-4 lg:overflow-visible
        ">
          {doctors.map((doc) => (
            <Specialists
              key={doc.id}
              name={doc.name}
              job={doc.job}
              image={doc.image}
              rating={doc.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
}