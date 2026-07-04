import ProcedureHeader from "@/entities/ProcedureHeader/ui/ProcedureHeader";
import ProcedureDoctors from "@/entities/ProcedureDoctors/ui/ProcedureDoctors";
import ProcedureSchedule from "@/entities/ProcedureSchedule/ui/ProcedureSchedule";
import DoctorTabs from "@/features/procedure-tabs/ui/DoctorTabs";

interface ProcedureManagementProps {
  procedure: {
    id: number;
    title: string;
    specialization: string;
    price: string;
    clinic: string;
    schedule: {
      first: string;
      second: string;
    };
  };
}

const ProcedureManagement = ({ procedure }: ProcedureManagementProps) => {
  return (
    <div className="w-full">
      {/* TABS СВЕРХУ */}
      <DoctorTabs />
      <section className=" rounded-b-[16px] rounded-tr-[16px] bg-gradient-to-b from-[#0B2D57] to-[#24B5D6] px-4 py-6 sm:rounded-b-[24px] sm:rounded-tr-[24px] sm:px-8 sm:py-10 md:rounded-b-[28px] md:rounded-tr-[28px] md:px-20 md:py-14">
        <ProcedureHeader procedure={procedure} />
        <div className="mt-8">
          <ProcedureDoctors />
        </div>
        <div className="mt-8">
          <ProcedureSchedule />
        </div>
      </section>
    </div>
  );
};

export default ProcedureManagement;