//import DoctorTabs from "@/features/doctor-tabs/ui/DoctorTabs";
import ClinicProfile from "@/widgets/Clinic-profile/ui/ClinicProfile";
import DoctorTabs from "@/features/procedure-tabs/ui/DoctorTabs";
const MyClinicPage = () => {
  return (
    <main className="min-h-screen bg-[#eeeeee] px-2 py-4 sm:px-6 md:py-8">
      <div className="mx-auto w-full max-w-[1150px]"> 
       <DoctorTabs />
        <ClinicProfile />
      </div>
    </main>
  );
};

export default MyClinicPage;