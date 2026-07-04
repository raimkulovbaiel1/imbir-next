import Image from "next/image";
import Link from "next/link";
import procedureImage from "@/shared/assets/img/ProcedureDoc/imggoc.png";

interface ProcedureCardProps {
  procedure: {
    id: number;
    title: string;
    specialization: string;
    price: string;
    clinic: string;
    schedule: {
      first: string;
      second: string;
    };
  };
}

const ProcedureCard = ({ procedure }: ProcedureCardProps) => {
  return (
    <Link
      href={`/Procedure-management/${procedure.id}`}
      className="block transition hover:opacity-95"
    >
      <article className="rounded-[12px] bg-white p-3 md:flex md:items-center md:gap-4 md:rounded-[16px] md:p-4">
        {/* MOBILE: фото и данные рядом */}
        <div className="flex gap-3 md:contents">
          <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[10px] md:h-[125px] md:w-[125px] md:rounded-[12px]">
            <Image
              src={procedureImage}
              alt={procedure.title}
              fill
              className="object-cover"
            />

            <span className="absolute bottom-1 right-1 rounded-full bg-white px-1.5 py-0.5 text-[9px] font-bold text-[#24466B] md:text-[10px]">
              ⭐ 4.9
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-[18px] font-bold text-[#092C56] md:text-[32px]">
              {procedure.title}
            </h2>

            <p className="text-[12px] text-[#092C56] md:text-[18px]">
              {procedure.specialization}
            </p>

            <p className="mt-2 text-[12px] text-[#092C56] md:text-[16px]">
              Стоимость: <b>{procedure.price}</b>
            </p>

            <p className="text-[12px] text-[#092C56] md:text-[16px]">
              Клиника: <b>{procedure.clinic}</b>
            </p>
          </div>
        </div>

        {/* График */}
        <div className="mt-3 border-t border-[#D6E2EC] pt-3 text-[12px] text-[#092C56] md:mt-0 md:mr-8 md:w-[230px] md:shrink-0 md:border-t-0 md:pl-6 md:pt-0 md:text-[16px]">
          <p className="mb-1 text-[#45627D] md:mb-2">
            График работы:
          </p>

          <p className="font-semibold">{procedure.schedule.first}</p>

          <p className="font-semibold">{procedure.schedule.second}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProcedureCard;