
import clock from "@/shared/assets/logo/profile-doctor/clock.svg"
import cross from "@/shared/assets/logo/profile-doctor/cross.svg" 
import schedule from "@/shared/assets/logo/profile-doctor/schedule.svg"
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
          <img src={clock.src}  className="w-3.75 h-3.75" />
          <p>Понедельник - Пятница 10:00 до 18:00</p>
        </div>

        <div className="flex items-start gap-2">
          <img src={cross.src} alt="logo" className="w-3.75 h-3.75" />
          <p>Выходной: Суббота - Воскресенье</p>
        </div>
      </div>

      <button className="mt-5 flex w-full items-center gap-2 rounded-full bg-white px-4 py-3 text-[17px] font-semibold text-[#0C2647] shadow-sm">
        <span className="flex h-6 w-6   rounded-full  text-white">
         <img src={schedule.src} alt="logo"/>
        </span>
        {buttonText}
      </button>
    </div>
  );
}