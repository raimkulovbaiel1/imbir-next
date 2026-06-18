import ServiceCard from "@/entities/Service-card/ui/servicecard";
import DoctorCard from "@/entities/Doctor-card/ui/doctorcard";
import Calendar from "@/entities/Calendar/ui/calendar";
import Input from "@/shared/ui/Input";
import Button from "@/shared/ui/appointmentButton";

export default function AppointmentForm() {
  return (
    <section className="max-w-[1200px] mx-auto p-4 md:p-8">
      <h2 className="text-[#0C2647] text-[28px] font-bold mb-6">
        Заполнить данные
      </h2>

      <div className="grid grid-cols-1 text-[16px] font-monserrat md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 ">
            Фамилия
          </label>
          <Input placeholder="" />
        </div>

        <div>
          <label className="block mb-2">
            Имя
          </label>
          <Input placeholder="" />
        </div>

        <div>
          <label className="block mb-2">
            Номер телефона
          </label>
          <Input placeholder="" />
        </div>

        <div>
          <label className="block mb-2">
            Email (необязательное поле)
          </label>
          <Input placeholder="" />
        </div>
      </div>

      <div className="mt-4">
        <label
          className="
      block
      mb-2
      text-[14px]
      text-[#0C2647]
      font-medium
    "
        >
          Комментарий (необязательное поле)
        </label>

        <textarea
          className="
      w-full
      h-[120px]
      border
      rounded-[12px]
      p-4
      outline-none
      resize-none
    "
        />
      </div>

      <div
        className="
          mt-8
          flex
          flex-col
          lg:grid
          lg:grid-cols-[320px_1fr]
          gap-6
        "
      >
        <div className="space-y-6">
          <ServiceCard />
          <DoctorCard />
        </div>

        <Calendar />
      </div>

      <div className="flex justify-end mt-8">
        <Button>
          Записаться
        </Button>
      </div>
    </section>
  );
}