"use client";

import Link from "next/link";

import DoctorCard from "@/entities/doctor/ui/DoctorCard";

import doctor1 from "@/shared/assets/img/Doc/docer.png";

const doctors = [
  {
    id: 1,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
  },
  {
    id: 2,
    image: doctor1.src,
    name: "Сагынбекова Айнагул",
    profession: "Косметолог",
  },
  {
    id: 3,
    image: doctor1.src,
    name: "Жаныбек Асанкулов",
    profession: "Кардиолог",
  },
  {
    id: 4,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
  },
  {
    id: 5,
    image: doctor1.src,
    name: "Айбеков Руслан",
    profession: "Невролог",
  },
  {
    id: 6,
    image: doctor1.src,
    name: "Абдиева Айгуль",
    profession: "Терапевт",
  },
];

type DoctorResultsProps = {
  search: string;
};

export default function DoctorResults({
  search,
}: DoctorResultsProps) {
  const query = search.toLowerCase().trim();

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(query) ||
      doctor.profession.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <div className="mt-10 grid grid-cols-2 justify-items-center gap-x-[30px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.map((doctor) => (
          <Link
            key={doctor.id}
            href={`/doctor-anketa/${doctor.id}`}
            className="block w-full"
          >
            <DoctorCard
              image={doctor.image}
              name={doctor.name}
              profession={doctor.profession}
            />
          </Link>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <p className="mt-10 text-center text-[#0C2647]">
          Ничего не найдено
        </p>
      )}
    </>
  );
}