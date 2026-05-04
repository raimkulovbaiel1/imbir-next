"use client";

import DoctorLeftPanel from "@/widgets/doctor-profile/left-panel/ui/DoctorLeftPanel";
import DoctorRightPanel from "@/widgets/doctor-profile/right-panel/ui/DoctorRightPanel";
import Reviews from "@/widgets/Reviews/ui/Reviews";
import  DoctorVideo  from "@/widgets/DoctorVideo/ui/DoctorVideo";
export default function DoctorProfilePage() {
  return (
    <section className="min-h-screen bg-[#efefef] py-6 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-6 px-4 lg:flex-row lg:items-start lg:gap-6">
        <DoctorLeftPanel />
        <DoctorRightPanel />
      </div>
       <div className="mx-auto w-full max-w-[1220px] px-4">
        <Reviews /> 
        <DoctorVideo />
      </div>
    </section>
  );
}