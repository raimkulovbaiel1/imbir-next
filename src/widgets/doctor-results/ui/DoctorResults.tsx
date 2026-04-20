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
    name: "Кадыркулов Нурлан",
    profession: "Хирург",
  },
  {
    id: 3,
    image: doctor1.src,
    name: "Кадыркулов Нурлан",
    profession: "врач ортопед",
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
    <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-[30px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          image={doctor.image}
          name={doctor.name}
          profession={doctor.profession}
        />
      ))}
    </div>
  );
}