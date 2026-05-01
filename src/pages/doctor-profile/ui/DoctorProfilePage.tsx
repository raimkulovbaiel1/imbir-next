"use client";

import DoctorLeftPanel from "@/widgets/doctor-profile/left-panel/ui/DoctorLeftPanel";
import DoctorRightPanel from "@/widgets/doctor-profile/right-panel/ui/DoctorRightPanel";

export default function DoctorProfilePage() {
  return (
    <section className="min-h-screen bg-[#efefef] py-6 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-6 px-4 lg:flex-row lg:items-start lg:gap-6">
        <DoctorLeftPanel />
        <DoctorRightPanel />
      </div>
    </section>
  );
}