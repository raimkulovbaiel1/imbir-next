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

export default function ClinicResults() {
  return (
    <div className="mt-6 grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {clinics.map((clinic) => (
        <ClinicCard
          key={clinic.id}
          image={clinic.image}
          title={clinic.title}
          address={clinic.address}
          borderColor={clinic.borderColor}
          bgColor={clinic.bgColor}
        />
      ))}
    </div>
  );
}