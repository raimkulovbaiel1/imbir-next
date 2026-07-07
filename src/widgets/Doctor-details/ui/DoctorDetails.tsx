import type { DoctorDetailsType } from "@/entities/Doctor-details/model/types";
import DoctorTabs from "@/features/procedure-tabs/ui/DoctorTabs";
import DoctorDetailsInfo from "@/entities/Doctor-details/ui/DoctorDetailsInfo";
import DoctorDetailsTop from "@/entities/Doctor-details/ui/DoctorDetailsTop";

interface DoctorDetailsProps {
  doctor: DoctorDetailsType;
}

const DoctorDetails = ({ doctor }: DoctorDetailsProps) => {
  return ( 
    <div> 
         {/* TABS СВЕРХУ */}
      <DoctorTabs />
      <section className="w-full rounded-[16px] bg-gradient-to-b from-[#0B2D57] to-[#24B5D6] px-4 py-6 sm:rounded-[24px] sm:px-6 sm:py-8 md:rounded-[28px] md:px-8 md:py-12">
        <DoctorDetailsTop doctor={doctor} />
        <DoctorDetailsInfo doctor={doctor} />
      </section>
    </div>


  );
};

export default DoctorDetails;