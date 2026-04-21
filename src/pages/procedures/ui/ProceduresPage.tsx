"use client";

//import ProceduresSearch from "@/features/procedures-search/ui/ProceduresSearch"; 
import ProceduresSearch from "@/features/procedures-search/ui/ProceduresSearch";
//import ProceduresFilters from "@/features/procedures-filters/ui/ProceduresFilters"; 
import ProceduresFilters from "@/features/procedures-filters/ui/ProceduresFilters";
//import ProceduresList from "@/widgets/procedures-list/ui/ProceduresList";  
import ProceduresList from "@/widgets/procedures-list/ui/ProceduresList";


export default function ProceduresPage() {
  return (
    <section className="min-h-screen bg-[#efefef] py-8">
      <div className="mx-auto w-full max-w-[1220px] pb-[40px] px-4">
        <ProceduresSearch />
        <ProceduresFilters />
        <ProceduresList />
      </div>
    </section>
  );
}