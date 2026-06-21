import DoctorTabs from "@/features/procedure-tabs/ui/DoctorTabs";
import DoctorList from "@/widgets/Doctor-list/ui/DoctorList";

const MyProfilePage = () => {
  return (
    <main className="min-h-screen bg-[#eeeeee] px-3 py-5 sm:px-6 md:py-8">
      <div className="mx-auto w-full max-w-[1150px]">
        <DoctorTabs />
        <DoctorList />
      </div>
    </main>
  );
};

export default MyProfilePage;