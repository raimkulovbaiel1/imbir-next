"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
  {
    id: "profile",
    label: "Мой профиль доктора",
    href: "/My-doctors",
  },
  {
    id: "clinics",
    label: "Моя клиника",
    href: "/My-clinic",
  },
  {
    id: "procedures",
    label: "Моя процедура",
    href: "/My-procedures",
  },
];

const DoctorTabs = () => {
  const pathname = usePathname() ?? "";

  const isTabActive = (tabId: string, href: string) => {
    // Вкладка "Мой профиль доктора"
    if (tabId === "profile") {
      return (
        pathname === "/My-doctors" ||
        pathname.startsWith("/My-doctors/") ||
        pathname === "/Doctor-details" ||
        pathname.startsWith("/Doctor-details/")
      );
    }

    // Вкладка "Моя клиника"
    if (tabId === "clinics") {
      return (
        pathname === "/My-clinic" ||
        pathname.startsWith("/My-clinic/")
      );
    }

    // Вкладка "Моя процедура"
    if (tabId === "procedures") {
      return (
        pathname === "/My-procedures" ||
        pathname.startsWith("/My-procedures/") ||
        pathname === "/Procedure-management" ||
        pathname.startsWith("/Procedure-management/")
      );
    }

    return pathname === href;
  };

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
      {tabs.map((tab) => {
        const isActive = isTabActive(tab.id, tab.href);

        return (
          <Link
            key={tab.id}
            href={tab.href}
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
              isActive
                ? "bg-[#0B2D57] text-white"
                : "bg-[#CBE8FA] text-[#0B4A78]"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default DoctorTabs;