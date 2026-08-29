"use client";

import { useState } from "react";

import SearchBar from "@/features/search/ui/SearchBar";
import DoctorFilters from "@/features/doctor-filters/ui/DoctorFilters";
import DoctorResults from "@/widgets/doctor-results/ui/DoctorResults";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  return (
    <section className="w-full bg-[#f3f3f3] py-8">
      <div className="mx-auto max-w-[1220px] px-4">

        {/* ОДИН ПОИСК */}
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <DoctorFilters />

        {/* Передаём текст поиска */}
        <DoctorResults search={search} />

      </div>
    </section>
  );
}