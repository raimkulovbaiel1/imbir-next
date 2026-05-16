"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

//import AppointmentCard from "@/entities/appointmenttab/ui/AppointmentCard";
import SavedCard from "@/entities/saved-card/ui/SavedCard";
import UserInfo from "@/entities/user/ui/UserInfo"; 
import UserStatus from "@/widgets/user-status/ui/user-status";

const appointments = [1, 2, 3];
const savedCards = [1, 2, 3, 4, 5, 6];

const tabClass = (active: boolean) =>
  clsx(
    `
    min-w-[140px]
    sm:min-w-[180px]
    md:w-[260px]

    h-[45px]
    sm:h-[52px]
    md:h-[60px]

    rounded-t-[14px]
    md:rounded-t-[18px]

    font-semibold
    text-[13px]
    sm:text-[16px]
    md:text-[22px]

    transition
    flex
    items-center
    justify-center
    px-3
    whitespace-nowrap
    `,
    active
      ? "bg-[#0C2647] text-white"
      : "bg-[#CAE9FF] text-[#0C2647]"
  );

export default function ProfileTabs() {
  const [tab, setTab] = useState("saved");

  return (
    <div className="w-full overflow-hidden">

      <UserInfo />

      {/* TABS */}
      <div className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide pb-0">
        <Link
          href="/Profile"
          className={tabClass(tab === "history")}
        >
          История записей
        </Link>

        <button
          type="button"
          onClick={() => setTab("saved")}
          className={tabClass(tab === "saved")}
        >
          Сохраненное
        </button>

        <button
          type="button"
          onClick={() => setTab("reviews")}
          className={tabClass(tab === "reviews")}
        >
          Отзывы
        </button>
      </div>

      {/* MAIN BLOCK */}
      <div
        className="
          rounded-[18px]
          md:rounded-[24px]
          rounded-tl-none
          bg-gradient-to-b
          from-[#0C2647]
          to-[#2AA7B8]
          p-3
          sm:p-4
          md:p-5
        "
      >

        {/* SEARCH */}
        <div className="relative mb-4">
          <input
            placeholder="Введите свой запрос"
            className="
              w-full
              h-[40px]
              md:h-[44px]
              rounded-full
              bg-[#F4F6F9]
              px-4
              md:px-5
              pr-12
              outline-none
              text-sm
              md:text-base
            "
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            🔍
          </span>
        </div>

        {/* SAVED */}
        {tab === "saved" && (
          <div>

            {/* TOP MENU */}
            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                gap-2

                text-white
                font-semibold

                text-[12px]
                sm:text-[16px]
                md:text-[30px]
              "
            >
              <span className="flex-1 text-center">Клиники</span>

              <div className="h-[20px] md:h-[30px] w-[2px] bg-white/40" />

              <span className="flex-1 text-center">Врачи</span>

              <div className="h-[20px] md:h-[30px] w-[2px] bg-white/40" />

              <span className="flex-1 text-center">Процедуры</span>
            </div>

            {/* сарточки */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedCards.map((item) => (
                <SavedCard key={item} />
              ))}
            </div>

          </div>
        )}

        {/* REVIEWS */}
        {tab === "reviews" && (
          <div
            className="
              py-10
              text-center
              text-[18px]
              md:text-[22px]
              text-white
            "
          >
            Пока нет отзывов
          </div>
        )}
      </div>  
      <UserStatus/>
    </div>
  );
}