import { Bookmark } from "lucide-react";
import doctorImg from "@/shared/assets/img/Doc/docer.png";

export default function DoctorPhotoCard() {
  return (
    <div className="rounded-3xl  p-4">
      <div className="relative overflow-hidden rounded-[22px]">
        <button className="absolute right-4 top-4 z-10 text-white/90">
          <Bookmark size={24} strokeWidth={1.8} />
        </button>

        <img
          src={doctorImg.src}
          alt="doctor"
          className="h-[528px] w-full object-cover sm:h-[520px] lg:h-[428px]"
        />

        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[14px] font-semibold text-[#0C2647] shadow">
            <span className="text-yellow-400">★</span>
            <span>4.9</span>
          </div>

          <div className="bg-gradient-to-r from-[#FFB000] to-[#FF8A00] px-4 py-2 text-[16px] font-bold text-white">
            Nova Clinic
          </div>
          <div className="h-0 w-0 border-b-[16px] border-l-[16px] border-t-[16px] border-b-transparent border-l-[#FF8A00] border-t-transparent" />
        </div>
      </div>
    </div>
  );
}