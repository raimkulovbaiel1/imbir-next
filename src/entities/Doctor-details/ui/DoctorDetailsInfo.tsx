import type { DoctorDetailsType } from "../model/types";

interface DoctorDetailsInfoProps {
  doctor: DoctorDetailsType;
}

const DoctorDetailsInfo = ({ doctor }: DoctorDetailsInfoProps) => {
  return (
    <div className="mt-8 rounded-[4px] bg-white p-5 text-[#092C56] sm:p-7 md:p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.05fr] md:gap-0">
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className="min-w-0 md:border-r-2 md:border-dashed md:border-[#FF8A3D] md:pr-8">
          <p className="text-[12px] font-bold sm:text-[14px]">
            {doctor.specialization}
          </p>

          <h1 className="mt-1 break-words text-[22px] font-bold leading-tight text-black sm:text-[27px]">
            {doctor.name}
          </h1>

          {/* ОБРАЗОВАНИЕ */}
          <div className="mt-7">
            <h2 className="text-[16px] font-bold text-black sm:text-[18px]">
              Образование
            </h2>

            <p className="mt-2 text-[12px] leading-[1.35] sm:text-[16px]">
              {doctor.education}
            </p>
          </div>

          {/* О ВРАЧЕ */}
          <div className="mt-7">
            <h2 className="text-[16px] font-bold text-black sm:text-[18px]">
              О враче
            </h2>

            <p className="mt-2 text-[12px] leading-[1.35] sm:text-[16px]">
              {doctor.about}
            </p>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="min-w-0 md:pl-8">
          {/* ОПЫТ */}
          <h2 className="text-[16px] font-bold text-black sm:text-[18px]">
            Опыт работы: {doctor.experience}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {doctor.workplaces.map((workplace, index) => (
              <div
                key={`${workplace}-${index}`}
                className="flex min-w-0 items-start gap-2 text-[12px] leading-[1.35] sm:text-[16px]"
              >
                <span className="mt-[3px] flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full bg-[#FF8A3D] text-[8px] text-white">
                  ✓
                </span>

                <p className="min-w-0 break-words">
                  {workplace}
                </p>
              </div>
            ))}
          </div>

          {/* ЛИНИЯ */}
          <div className="my-7 border-t-2 border-dashed border-[#FF8A3D]" />

          {/* НАВЫКИ */}
          <h2 className="text-[16px] font-bold text-black sm:text-[18px]">
            Профессиональные навыки
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {doctor.skills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex min-w-0 items-start gap-2 text-[12px] leading-[1.35] sm:text-[16px]"
              >
                <span className="mt-[3px] flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full bg-[#FF8A3D] text-[8px] text-white">
                  ✓
                </span>

                <p className="min-w-0 break-words">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsInfo;