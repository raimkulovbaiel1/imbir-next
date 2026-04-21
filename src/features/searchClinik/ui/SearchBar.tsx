"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full">
      <div className="flex h-[44px] w-full items-center rounded-[12px] bg-gradient-to-r from-[#FF8A00] to-[#FFB800] px-4 sm:h-[50px]">
        <input
          type="text"
          placeholder="Введите свой запрос"
          className="w-full bg-transparent text-[24px] text-white placeholder:text-white/90 outline-none sm:text-[16px]"
        />
        <button className="ml-3 shrink-0">
          <Search size={22} className="text-white" />
        </button>
      </div>
    </div>
  );
}