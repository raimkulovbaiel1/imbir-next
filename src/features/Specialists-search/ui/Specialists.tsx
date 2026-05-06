"use client";

import { Search } from "lucide-react";

export default function Specialistssearch() {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Найти врача"
        className="w-full h-[48px] rounded-full bg-[#F4F6F9] text-[24px] pl-5 pr-12 outline-none text-[#0C2647]"
      />

      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
    </div>
  );
}