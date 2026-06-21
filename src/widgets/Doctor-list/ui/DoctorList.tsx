import DoctorActions from "@/features/doctor-actions/ui/DoctorActions";
import DoctorCard from "@/entities/my-doctor/ui/DoctorCard";
import { doctors } from "@/entities/myProdures-doctor/model/doctor.data";

const DoctorList = () => {
  return (
    <section
      className="
        relative z-10 -mt-[1px]
        rounded-b-[16px] rounded-tr-[16px] rounded-tl-[16px]
        bg-gradient-to-b from-[#0B2D57] to-[#24B5D6]
        px-4 py-6

        sm:rounded-b-[28px]
        sm:rounded-tr-[28px]
        sm:rounded-tl-[2px]
        sm:px-8

        md:px-12 md:py-12
      "
    >
      <h1 className="text-[20px] font-bold text-white sm:text-[26px]">
        Список врачей
      </h1>

      <DoctorActions />

      <div
        className="
          mt-6
          grid grid-cols-2 gap-x-3 gap-y-5

          sm:grid-cols-3
          sm:gap-x-5
          sm:gap-y-6

          md:mt-8
          md:max-h-[590px]
          md:grid-cols-3
          md:gap-x-8
          md:gap-y-8
          md:overflow-y-auto
          md:pr-5
          scrollbar-thin
        "
      >
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default DoctorList;