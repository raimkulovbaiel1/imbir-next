"use client";

import { useState } from "react";

import SearchBar from "@/features/search/ui/SearchBar";
import ClinicFilters from "@/features/clinic-filters/ui/ClinicFilters";
import ClinicResults from "@/widgets/clinic-results/ui/ClinicResults";

export default function ClinicResultsPage() {
  const [search, setSearch] = useState("");

  return (
    <section className="min-h-screen bg-[#efefef] py-8">
      <div className="mx-auto w-full max-w-[1220px] px-4">

        {/* Поиск */}
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {/* Фильтры */}
        <ClinicFilters />

        {/* Карточки клиник */}
        <ClinicResults search={search} />

      </div>
    </section>
  );
}