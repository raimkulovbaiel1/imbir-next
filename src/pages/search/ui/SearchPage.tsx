"use client";

import SearchBar from "@/features/search/ui/SearchBar";
import DoctorFilters from "@/features/doctor-filters/ui/DoctorFilters";
import DoctorResults from "@/widgets/doctor-results/ui/DoctorResults";

export default function SearchPage() {
  return (
    <section className="w-full bg-[#f3f3f3] py-8">
      <div className="mx-auto max-w-[1220px] px-4">
        <SearchBar />
        <DoctorFilters />
        <DoctorResults />
      </div>
    </section>
  );
}