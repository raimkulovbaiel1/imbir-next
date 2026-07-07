import Image from "next/image";
import Link from "next/link";

import type { Doctor } from "@/entities/myProdures-doctor/model/types";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Link
      href={`/Doctor-details/${doctor.id}`}
      className="block min-w-0"
    >
      <article className="min-w-0 cursor-pointer">
        <div
          className="
            relative
            aspect-[1/1.18]
            w-full
            overflow-hidden
            rounded-[10px]
            bg-white

            sm:rounded-[14px]
          "
        >
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />

          <span
            className="
              absolute right-1 top-1
              rounded-bl-[7px]
              bg-white
              px-1 py-0.5
              text-[9px] font-semibold text-[#092C56]

              sm:right-2
              sm:top-2
              sm:px-1.5
              sm:text-[11px]
            "
          >
            <span className="text-[#FFD600]">★</span> {doctor.rating}
          </span>
        </div>

        <h2
          className="
            mt-2
            truncate
            text-[10px]
            font-bold
            text-white

            sm:mt-3
            sm:text-[14px]
            md:text-[16px]
          "
        >
          {doctor.name}
        </h2>

        <p
          className="
            mt-0.5
            text-[9px]
            text-[#CAE9FF]

            sm:text-[12px]
            md:text-[14px]
          "
        >
          {doctor.specialization}, {doctor.experience}
        </p>
      </article>
    </Link>
  );
};

export default DoctorCard;