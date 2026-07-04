import { notFound } from "next/navigation";
import { procedures } from "@/entities/Procedure/model/procedure.data";
import ProcedureManagement from "@/widgets/procedure-management/ui/ProcedureManagement";

const ProcedureManagementPage = async ({
  params,
}: PageProps<"/Procedure-management/[id]">) => {
  const { id } = await params;
  const procedure = procedures.find((item) => item.id === Number(id));

  if (!procedure) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eeeeee] px-3 py-4 sm:px-6 md:py-8">
      <div className="mx-auto w-full max-w-[1150px]">
        <ProcedureManagement procedure={procedure} />
      </div>
    </main>
  );
};

export default ProcedureManagementPage;