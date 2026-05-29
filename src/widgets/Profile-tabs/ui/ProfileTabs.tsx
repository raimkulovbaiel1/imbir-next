
"use client";
import clsx from "clsx";
import { useState } from "react";
import SavedCard from "@/entities/saved-card/ui/SavedCard";
import UserInfo from "@/entities/user/ui/UserInfo";
import UserStatus from "@/widgets/user-status/ui/user-status";
import ReviewCard from "@/entities/review-card/ui/ReviewCard";
import Appointment from "@/features/appointment-tabs/ui/AppointmentTabs"
import ProcedureDoc from "@/entities/ProcedureDoc/ui/ProcedureDoc"
import { Crocedural } from "@/entities/Crocedural/ui/Crocedural"


const savedCards = [1, 2, 3, 4, 5, 6];
const reviews = [1, 2, 3];

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
  const [tab, setTab] = useState("history");
  const [savedTab, setSavedTab] = useState("clinics");

  return (
    <div className="w-full overflow-hidden">
      <UserInfo />
      {/* TABS */}
      <div className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide">
        <button
          type="button"
          onClick={() => setTab("history")}
          className={tabClass(tab === "history")}
        >
          История записей
        </button>
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
        className=" rounded-[18px] md:rounded-[24px] bg-gradient-to-b  from-[#0C2647] to-[#2AA7B8] p-3 sm:p-4  md:p-5 " >
        {/* SEARCH */}
        <div className="relative mb-5">
          <input
            placeholder="Введите свой запрос"
            className="  w-full  h-[40px]  md:h-[44px]  rounded-full bg-[#F4F6F9] px-4 md:px-5   pr-12 outline-none text-sm  md:text-base "></input>
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            🔍
          </span>
        </div>
        {/* TOP MENU */}
        {(tab === "saved" || tab === "reviews") && (
          <div
            className="mb-5 flex items-center justify-between  gap-2 font-semibold  text-[12px] sm:text-[16px] md:text-[30px]">
            <button
              onClick={() => setSavedTab("clinics")}
              className={clsx(
                "flex-1 text-center transition text-[#CAE9FF]",
                savedTab === "clinics" && "text-white"
              )}
            >
              Клиники
            </button>

            <div className="h-[20px] md:h-[30px] w-[2px] bg-white/40" />

            <button
              onClick={() => setSavedTab("doctors")}
              className={clsx(
                "flex-1 text-center transition text-[#CAE9FF]",
                savedTab === "doctors" && "text-white"
              )}
            >
              Врачи
            </button>

            <div className="h-[20px] md:h-[30px] w-[2px] bg-white/40" />

            <button
              onClick={() => setSavedTab("procedures")}
              className={clsx(
                "flex-1 text-center transition text-[#CAE9FF]",
                savedTab === "procedures" && "text-white"
              )}
            >
              Процедуры
            </button>
          </div>
        )}
        {/* HISTORY */}
        {tab === "history" && (
          <div className="flex flex-col gap-4">
            <Appointment />
          </div>
        )}
        {tab === "saved" && (
          <>
            {savedTab === "clinics" && (
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {savedCards.map((item) => (
                  <SavedCard key={item} />
                ))}
              </div>
            )}
            {savedTab === "doctors" && (
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {savedCards.map((item) => (
                  <ProcedureDoc key={item} />
                ))}
              </div>
            )}
            {savedTab === "procedures" && (
              <div className="flex flex-col gap-4">
                {savedCards.map((item) => (
                  <Crocedural
                    key={item}
                    title="УЗИ"
                    category="Кардиология"
                    price="1700 сом"
                  />
                ))}
              </div>
            )}
          </>
        )}
        {tab === "reviews" && (
          <div className="flex flex-col gap-4">
            {reviews.map((item) => (
              <ReviewCard
                key={item}
                date="02.10.2024"
                doctor="Сыдыкбекова Асель Келдибековна"
                clinic="MedCenter"
                rating="5.0"
                text="Рекомендую всем, кто ищет квалифицированного и отзывчивого специалиста!"
              />
            ))}
          </div>
        )}
      </div>
      <UserStatus />
    </div>
  );
}

