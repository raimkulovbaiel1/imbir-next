"use client";

import { useState } from "react";

import SearchBar from "@/features/search/ui/SearchBar";
import DoctorFilters, {
  type DoctorFilterValues,
} from "@/features/doctor-filters/ui/DoctorFilters";

import DoctorResults from "@/widgets/doctor-results/ui/DoctorResults";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<DoctorFilterValues>({
    specializations: [],
    districts: [],
    ratingFrom: "",
    ratingTo: "5",
  });

  return (
    <section className="w-full bg-[#f3f3f3] py-8">
      <div className="mx-auto max-w-[1220px] px-4">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
        <DoctorFilters
          onFilterChange={setFilters}
        />
        <DoctorResults
          search={search}
          filters={filters}
        />
      </div>
    </section>
  );
}