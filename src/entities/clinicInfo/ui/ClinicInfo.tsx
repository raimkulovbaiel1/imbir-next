import { MapPin } from "lucide-react";
import { clinicData } from "@/entities/My-clinic/model/clinic.data";

const ClinicInfo = () => {
  return (
    <div className="min-w-0 flex-1">
      <h1 className="text-[26px] font-bold text-white md:text-[32px]">
        {clinicData.name}
      </h1>

      <div className="mt-5 space-y-3 text-[14px] text-[#CAE9FF] md:mt-6 md:text-[17px]">
        <p>
          <b className="text-white">График</b>{" "}
          {clinicData.schedule.first}
          <br />

          <span className="pl-[62px]">{clinicData.schedule.second}</span>
        </p>

        <p>
          <b className="text-white">Контакты:</b> {clinicData.phone}
        </p>

        <div className="flex items-start gap-2">
          <MapPin
            size={20}
            fill="#092C56"
            className="mt-[2px] shrink-0 text-[#092C56]"
          />

          <div>
            <b className="text-white">Адрес</b>

            <span className="ml-4 inline-block">
              {clinicData.address}
              <br />

              <b className="text-[#092C56]">{clinicData.website}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicInfo;