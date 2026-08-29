"use client";
import { Search } from "lucide-react";
import Link from "next/link";

import ClinicCard from "@/entities/clinic/ui/ClinicCard";

import logo1 from "@/shared/assets/img/Clinic/logo1.png";
import logo2 from "@/shared/assets/img/Clinic/logo2.png";
import logo3 from "@/shared/assets/img/Clinic/logo3.png";

const clinics = [
  {
    id: 1,
    image: logo1.src,
    title: "Neo Clinic",
    address: "ул. Московская 137",
    borderColor: "#F59E0B",
    bgColor: "#FFFFFF",
  },
  {
    id: 2,
    image: logo2.src,
    title: "MedCenter",
    address: "ул. Московская 137",
    borderColor: "#F59E0B",
    bgColor: "#FFFFFF",
  },
  {
    id: 3,
    image: logo3.src,
    title: "K-MED",
    address: "ул. Московская 137",
    borderColor: "#F59E0B",
    bgColor: "#FFFFFF",
  },
  {
    id: 4,
    image: logo1.src,
    title: "Nova Clinic",
    address: "ул. Московская 137",
    borderColor: "#35B4E8",
    bgColor: "#DFF3FF",
  },
  {
    id: 5,
    image: logo2.src,
    title: "MedCenter",
    address: "ул. Московская 137/1",
    borderColor: "#35B4E8",
    bgColor: "#DFF3FF",
  },
  {
    id: 6,
    image: logo3.src,
    title: "K-MED",
    address: "ул. Московская 137",
    borderColor: "#35B4E8",
    bgColor: "#DFF3FF",
  },
  {
    id: 7,
    image: logo1.src,
    title: "Nova Clinic",
    address: "ул. Московская 137",
    borderColor: "#FF7A00",
    bgColor: "#DFF3FF",
  },
  {
    id: 8,
    image: logo2.src,
    title: "MedCenter",
    address: "ул. Московская 137",
    borderColor: "#FF7A00",
    bgColor: "#DFF3FF",
  },
  {
    id: 9,
    image: logo3.src,
    title: "K-MED",
    address: "ул. Московская 137",
    borderColor: "#FF7A00",
    bgColor: "#DFF3FF",
  },
];

type ClinicResultsProps = {
  search?: string;
};

export default function ClinicResults({
  search = "",
}: ClinicResultsProps) {
  const query = search.toLowerCase().trim();

  const filteredClinics = clinics.filter((clinic) => {
    return (
      clinic.title.toLowerCase().includes(query) ||
      clinic.address.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <div className="mt-6 grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredClinics.map((clinic) => (
          <Link
            key={clinic.id}
            href={`/clinic-profile/${clinic.id}`}
            className="block w-full"
          >
            <ClinicCard
              image={clinic.image}
              title={clinic.title}
              address={clinic.address}
              borderColor={clinic.borderColor}
              bgColor={clinic.bgColor}
            />
          </Link>
        ))}
      </div>

      {filteredClinics.length === 0 && (
        <p className="mt-10 text-center text-[#0C2647]">
          Клиника не найдена
        </p>
      )}
    </>
  );
}