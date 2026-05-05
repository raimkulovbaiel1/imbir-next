import React from 'react'
import ClinicServices from "@/entities/ClinicServices/ui/ClinicServices";

const services = [
  {
    id: 1,
    title: "МРТ",
    category: "МОЗП",
    price: "1700 сом",
    clinic: "Nova Clinic",
    rating: "4.9",
  },
  {
    id: 2,
    title: "УЗИ",
    category: "Кардиология",
    price: "1700 сом",
    clinic: "Nova Clinic",
    rating: "4.9",
  },
  {
    id: 3,
    title: "УЗИ",
    category: "Кардиология",
    price: "1700 сом",
    clinic: "Nova Clinic",
    rating: "4.9",
  },
];

export default function ProceduresList() {
  return (
    <section className="w-full bg-[#CAE9FF] py-10">
      <div className="mx-auto w-full max-w-[1220px] px-4 flex flex-col gap-6">

        {/* TITLE */}
        <div className="flex items-center gap-2">
          <h1 className="font-monserrat font-bold text-[#0C2647] text-[28px] lg:text-[50px]">
            Услуги клиники
          </h1>
          <span className="text-2xl lg:text-4xl">›</span>
        </div>

        {/* LIST */}
        {services.map((item) => (
          <ClinicServices
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            clinic={item.clinic}
            rating={item.rating}
          />
        ))}

      </div>
    </section>
  );
}