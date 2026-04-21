import { Bookmark } from "lucide-react";
import procedureImg from "@/shared/assets/img/Procedure/procedure.png";

type ServiceCardProps = {
  title: string;
  category: string;
  price: string;
  clinic: string;
  rating: string;
};

export default function ServiceCard({
  title,
  category,
  price,
  clinic,
  rating,
}: ServiceCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-[18px] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">

      <div className="flex gap-4">
        <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-[16px]   sm:h-[95px] sm:w-[95px]   lg:h-[125px] lg:w-[125px] lg:rounded-[20px]">
          <img
            src={procedureImg.src}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-1 left-1 flex items-center gap-1 rounded-full bg-white px-2 py-[2px] text-[12px] font-semibold text-[#0C2647] shadow">
            <span className="text-yellow-400">★</span>
            <span>{rating}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-[18px] font-monserrat font-bold text-[#0C2647] sm:text-[22px] lg:text-[30px]">
            {title}
          </h3>

          <p className="text-[18px] font-monserrat text-[#0C2647] sm:text-[16px] lg:text-[18px]">
            {category}
          </p>

          <p className="mt-1 text-[16px] text-[#0C2647] sm:text-[14px] lg:text-[16px]">
            Стоимость: <span className="font-bold">{price}</span>
          </p>

          <p className="text-[13px] text-[#0C2647] sm:text-[14px] lg:text-[16px] ">
            Клиника: <span className="font-bold">{clinic}</span>
          </p>
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ */}
      <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-8 lg:gap-[50vh]">
        <div className="text-[12px]  text-[#0C2647] sm:text-[16px]">
          <p className="mb-1 lg:text-[16px] font-monserrat">График работы:</p>
          <p className="font-monserrat font-bold">Пн, Ср, Пт 10:30 - 16:30</p>
          <p className="font-monserrat font-bold">Вт, Чт, Сб 10:30 - 16:30</p>
        </div>

        {/* Закладка */}
        <button className="text-[#B7DCF5] hover:text-[#f7a300] transition">
          <Bookmark size={28} strokeWidth={1.7} className="sm:w-[32px] sm:h-[32px]" />
        </button>
      </div>
    </article>
  );
}