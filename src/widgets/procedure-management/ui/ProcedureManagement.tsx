import ProcedureHeader from "@/entities/ProcedureHeader/ui/ProcedureHeader";
import ProcedureDoctors from "@/entities/ProcedureDoctors/ui/ProcedureDoctors";
import ProcedureSchedule from "@/entities/ProcedureSchedule/ui/ProcedureSchedule";

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
    <section className="rounded-[16px] bg-gradient-to-b from-[#0B2D57] to-[#24B5D6] px-4 py-6 sm:rounded-[24px] sm:px-8 sm:py-10 md:rounded-[28px] md:px-20 md:py-14">
      <ProcedureHeader procedure={procedure} />

      <div className="mt-8">
        <ProcedureDoctors />
      </div>

      <div className="mt-8">
        <ProcedureSchedule />
      </div>
    </section>
  );
};

export default ProcedureManagement;