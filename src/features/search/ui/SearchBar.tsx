"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full">
      <div className="flex h-[72px] items-center rounded-[14px] border-2 border-[#1790FF] bg-gradient-to-r from-[#ff8a00] to-[#ffb800] px-5">
        <input
          type="text"
          placeholder="Введите свой запрос"
          className="h-full w-full bg-transparent text-[24px] font-Montserrat text-white placeholder:text-white/90 outline-none"
        />
        <button className="ml-3 shrink-0">
          <Search size={30} className="text-white" />
        </button>
      </div>
    </div>
  );
}