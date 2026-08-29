"use client";

import ServiceCard from "@/entities/service/ui/ServiceCard";

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

type ProceduresListProps = {
  search?: string;
};

export default function ProceduresList({
  search = "",
}: ProceduresListProps) {
  const query = search.toLowerCase().trim();

  const filteredServices = services.filter((service) => {
    return (
      service.title.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query) ||
      service.clinic.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <div className="mt-8 flex flex-col gap-6">
        {filteredServices.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            clinic={item.clinic}
            rating={item.rating}
          />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <p className="mt-10 text-center text-[#0C2647]">
          Процедура не найдена
        </p>
      )}
    </>
  );
}