"use client";

import { useState } from "react";
import clsx from "clsx";

const DoctorTabs = () => {
  const [activeTab, setActiveTab] = useState("procedures");

  const tabs = [
    { id: "profile", label: "Мой профиль доктора" },
    { id: "clinics", label: "Моя клиника" },
    { id: "procedures", label: "Моя процедура" },
  ];

  return (
    <div
      className="
        flex
        gap-1
        overflow-x-auto
        scrollbar-hide
        sm:gap-2
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={clsx(
            `
              shrink-0
              whitespace-nowrap
              rounded-t-[14px]
              px-3
              py-2
              text-[11px]
              font-bold
              transition
              sm:rounded-t-[25px]
              sm:px-6
              sm:py-2
              sm:text-[22px]
            `,
            activeTab === tab.id
              ? "bg-[#0B2D57] text-white"
              : "bg-[#CBE8FA] text-[#0B4A78]"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default DoctorTabs;