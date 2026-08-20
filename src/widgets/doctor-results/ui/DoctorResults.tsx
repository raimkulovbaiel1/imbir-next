import Link from "next/link";
import DoctorCard from "@/entities/doctor/ui/DoctorCard";
import doctor1 from "@/shared/assets/img/Doc/docer.png";

const doctors = [
  {
    id: 1,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "врач ортопед",
  },
  {
    id: 2,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "врач ортопед",
  },
  {
    id: 3,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "врач лор",
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
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
  },
  {
    id: 6,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
  },
];

export default function DoctorResults() {
  return (
    <div className="mt-10 grid grid-cols-2 justify-items-center gap-x-[30px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
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
  );
}