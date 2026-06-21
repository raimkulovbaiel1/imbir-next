import { Star } from "lucide-react";
import { clinicData } from "@/entities/My-clinic/model/clinic.data";

const ClinicAvatar = () => {
  return (
    <div className="flex shrink-0 flex-col items-center md:w-[190px]">
      <div
        className="
          relative overflow-hidden
          h-[130px] w-[130px]
          rounded-[12px]
          bg-[#E8E8E8]

          md:h-[168px]
          md:w-[168px]
        "
      >
        <div
          className="
            absolute left-1/2 top-[34px]
            h-[58px] w-[58px]
            -translate-x-1/2
            rounded-full bg-white

            md:top-[35px]
            md:h-[65px]
            md:w-[65px]
          "
        />

        <div
          className="
            absolute bottom-0 left-1/2
            h-[58px] w-[116px]
            -translate-x-1/2
            rounded-t-[80px] bg-white

            md:h-[74px]
            md:w-[145px]
          "
        />
      </div>

      <div className="mt-3 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <Star
            key={item}
            size={18}
            fill="#FFD600"
            className="text-[#FFD600]"
          />
        ))}

        <span className="ml-2 text-[14px] font-bold text-[#092C56]">
          {clinicData.rating}
        </span>
      </div>

      <p className="mt-1 text-[13px] text-[#092C56]">
        ({clinicData.reviews} отзывов)
      </p>
    </div>
  );
};

export default ClinicAvatar;