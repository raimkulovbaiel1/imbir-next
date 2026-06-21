import { clinicData } from "@/entities/My-clinic/model/clinic.data";

const ClinicDescription = () => {
  return (
    <div
      className="
        mt-5 rounded-[10px]
        border border-[#A9DDF7]
        px-4 py-4
        text-[13px] leading-[1.45] text-[#CAE9FF]

        md:mt-6
        md:px-5 md:py-4
        md:text-[16px]
      "
    >
      {clinicData.description}
    </div>
  );
};

export default ClinicDescription;