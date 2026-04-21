"use client";

import SearchBar from "@/features/search/ui/SearchBar";
import ClinicFilters from "@/features/clinic-filters/ui/ClinicFilters";
import ClinicResults from "@/widgets/clinic-results/ui/ClinicResults";

export default function ClinicResultsPage() {
  return (
    <section className="min-h-screen bg-[#efefef] py-8">
      <div className="mx-auto w-full max-w-[1220px] px-4">
        <SearchBar />
        <ClinicFilters />
        <ClinicResults />
      </div>
    </section>
  );
}