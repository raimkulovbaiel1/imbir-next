import DoctorTabs from "@/features/procedure-tabs/ui/DoctorTabs";
import ProcedureActions from "@/features/procedure-actions/ui/Procedure-actions";
import ProcedureCard from "@/entities/Procedure/ui/ProcedureCard";
import { procedures } from "@/entities/Procedure/model/procedure.data";

const MyProceduresPage = () => {
  return (
    <main
      className="
        min-h-screen
        bg-[#eeeeee]
        px-2
        py-3
        sm:px-6
        md:py-8
      "
    >
      <div className="mx-auto w-full max-w-[1150px]">
        <DoctorTabs />

        <section
          className="
            relative
            z-10
            -mt-[1px]
            rounded-b-[16px]
            rounded-tr-[16px]
            rounded-tl-[3px]
            bg-gradient-to-b
            from-[#0B2D57]
            to-[#24B5D6]

            px-3
            py-5

            sm:rounded-b-[28px]
            sm:rounded-tr-[28px]
            sm:rounded-tl-[2px]
            sm:px-8

            md:px-12
            md:py-12
          "
        >
          <h1
            className="
              text-[18px]
              font-bold
              text-white

              sm:text-[26px]
            "
          >
            Список процедур
          </h1>

          <ProcedureActions />

          <div
            className="
              mt-5
              max-h-[500px]
              space-y-3
              overflow-y-auto
              pr-1
              scrollbar-thin

              sm:mt-8
              sm:max-h-[590px]
              sm:pr-3
            "
          >
            {procedures.map((procedure) => (
              <ProcedureCard key={procedure.id} procedure={procedure} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyProceduresPage;