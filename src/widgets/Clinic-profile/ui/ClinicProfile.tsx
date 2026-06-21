
import ClinicAvatar from "@/entities/clinicAvatar/ui/ClinicAvatar";
import ClinicDescription from "@/entities/ClinicDescription/ui/ClinicDescription";
import ClinicGallery from "@/entities/clinicGallery/ui/ClinicGallery";
import ClinicInfo from "@/entities/clinicInfo/ui/ClinicInfo"
import EditClinicButton from "@/features/edit-clinic/ui/EditClinicButton";
import DoctorTabs from "@/features/procedure-tabs/ui/DoctorTabs";
const ClinicProfile = () => {
  return (
    <section 
    
      className="
        relative z-10 -mt-[1px]
        rounded-b-[16px] rounded-tr-[16px] rounded-tl-[2px]
        bg-gradient-to-b from-[#0B2D57] to-[#24B5D6]
        px-4 py-6

        sm:rounded-b-[28px]
        sm:rounded-tr-[28px]
        sm:rounded-tl-[2px]
        sm:px-8

        md:px-20 md:py-14
      " 
     
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-20"> 
        
        <ClinicAvatar />
        <ClinicInfo />
      </div>

      <ClinicGallery />

      <ClinicDescription />

      <div className="mt-6 flex justify-end md:mt-12">
        <EditClinicButton />
      </div>
    </section>
  );
};

export default ClinicProfile;