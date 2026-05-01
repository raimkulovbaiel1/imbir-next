import DoctorPhotoCard from "@/entities/doctors/ui/DoctorPhotoCard";
import DoctorScheduleCard from "@/entities/doctors/ui/DoctorScheduleCard";

export default function DoctorLeftPanel() {
  return (
    <div className="flex w-full flex-col gap-6 lg:max-w-[490px]">
      <DoctorPhotoCard />

      <DoctorScheduleCard
        title="График работы врача"
        buttonText="Записаться на онлайн консультацию"
      />

      <DoctorScheduleCard
        title="Оффлайн прием"
        buttonText="Записаться на оффлайн консультацию"
      />
    </div>
  );
}