"use client";

import UserInfo from "@/entities/user/ui/UserInfo";
import AppointmentTabs from "@/features/appointment-tabs/ui/AppointmentTabs";

export default function ProfilePage() {
  return (
    <section className="w-full py-10">
      <div className="max-w-[1220px] mx-auto px-4 flex flex-col gap-6">

        {/* USER */}
        <UserInfo />
        {/* TABS + LIST */}
        <AppointmentTabs />
      </div>
    </section>
  );
}