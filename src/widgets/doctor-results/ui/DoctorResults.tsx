"use client";

import Link from "next/link";

import DoctorCard from "@/entities/doctor/ui/DoctorCard";
import type { DoctorFilterValues } from "@/features/doctor-filters/ui/DoctorFilters";

import doctor1 from "@/shared/assets/img/Doc/docer.png";

const doctors = [
  {
    id: 1,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "Ленинский район",
    rating: 4.8,
  },
  {
    id: 2,
    image: doctor1.src,
    name: "Сагынбекова Айнагул",
    profession: "Косметолог",
    district: "Первомайский район",
    rating: 4.9,
  },
  {
    id: 3,
    image: doctor1.src,
    name: "Жаныбек Асанкулов",
    profession: "Кардиолог",
    district: "Свердловский район",
    rating: 4.7,
  },
  {
    id: 4,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "генетик",
    district: "Октябрьский район",
    rating: 4.6,
  }, 
   {
    id: 5,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "венеролог",
    district: "первомайский район",
    rating: 4.6,
  }, 
   {
    id: 6,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "первомайский район",
    rating: 4.6,
  }, 
   {
    id: 7,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "Октябрьский район",
    rating: 4.6,
  }, 
   {
    id: 8,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "Октябрьский район",
    rating: 4.6,
  }, 
   {
    id: 9,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "Октябрьский район",
    rating: 4.6,
  }, 
   {
    id: 10,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "Октябрьский район",
    rating: 4.6,
  }, 
   {
    id: 11,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "Октябрьский район",
    rating: 4.6,
  }, 
   {
    id: 12,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
    district: "Октябрьский район",
    rating: 4.6,
  },
];

type DoctorResultsProps = {
  search: string;
  filters: DoctorFilterValues;
};

export default function DoctorResults({
  search,
  filters,
}: DoctorResultsProps) {
  const query = search.toLowerCase().trim();

  const filteredDoctors = doctors.filter((doctor) => {
    // ПОИСК
    const searchMatch =
      query === "" ||
      doctor.name.toLowerCase().includes(query) ||
      doctor.profession.toLowerCase().includes(query) ||
      doctor.district.toLowerCase().includes(query);

    // СПЕЦИАЛИЗАЦИЯ
    const specializationMatch =
      filters.specializations.length === 0 ||
      filters.specializations.some(
        (spec) =>
          spec.toLowerCase() ===
          doctor.profession.toLowerCase()
      );

    // МЕСТОПОЛОЖЕНИЕ
    const districtMatch =
      filters.districts.length === 0 ||
      filters.districts.includes(doctor.district);

    // РЕЙТИНГ
    const ratingFrom = filters.ratingFrom
      ? Number(filters.ratingFrom)
      : 0;

    const ratingTo = filters.ratingTo
      ? Number(filters.ratingTo)
      : 5;

    const ratingMatch =
      doctor.rating >= ratingFrom &&
      doctor.rating <= ratingTo;

    return (
      searchMatch &&
      specializationMatch &&
      districtMatch &&
      ratingMatch
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
          Врачи не найдены
        </p>
      )}
    </>
  );
}