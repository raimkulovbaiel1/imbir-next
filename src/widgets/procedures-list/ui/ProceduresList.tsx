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

export default function ProceduresList() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      {services.map((item) => (
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
  );
}