import { Clock3, XCircle } from "lucide-react";

type DoctorScheduleCardProps = {
  title: string;
  buttonText: string;
};

export default function DoctorScheduleCard({
  title,
  buttonText,
}: DoctorScheduleCardProps) {
  return (
    <div className="rounded-[20px] bg-[#bfe4ff] p-5">
      <h3 className="text-[22px] font-bold text-[#0C2647]">
        {title}
      </h3>

      <div className="mt-5 space-y-3 text-[16px] text-[#0C2647]">
        <div className="flex items-start gap-2">
          <Clock3 size={18} className="mt-0.5 text-[#ff7a00]" />
          <p>Понедельник - Пятница 10:00 до 18:00</p>
        </div>

        <div className="flex items-start gap-2">
          <XCircle size={18} className="mt-0.5 text-red-500" />
          <p>Выходной: Суббота - Воскресенье</p>
        </div>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-[15px] font-semibold text-[#0C2647] shadow-sm">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
          +
        </span>
        {buttonText}
      </button>
    </div>
  );
}