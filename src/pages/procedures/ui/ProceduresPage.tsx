"use client";

import { useState } from "react";

import ProceduresSearch from "@/features/procedures-search/ui/ProceduresSearch";
import ProceduresFilters from "@/features/procedures-filters/ui/ProceduresFilters";
import ProceduresList from "@/widgets/procedures-list/ui/ProceduresList";

export default function ProceduresPage() {
  const [search, setSearch] = useState("");

  return (
    <section className="min-h-screen bg-[#efefef] py-8">
      <div className="mx-auto w-full max-w-[1220px] pb-[40px] px-4">

        {/* ПОИСК */}
        <ProceduresSearch
          value={search}
          onChange={setSearch}
        />

        {/* ФИЛЬТРЫ */}
        <ProceduresFilters />

        {/* ПРОЦЕДУРЫ */}
        <ProceduresList
          search={search}
        />

      </div>
    </section>
  );
}