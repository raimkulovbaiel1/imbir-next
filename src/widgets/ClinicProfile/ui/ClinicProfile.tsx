import DoctorSlider from "@/features/doctor-slider/ui/DoctorSlider";
import { Button } from "@/shared/ui/Button";
import med from "@/shared/assets/logo/ClinicProfile/med.svg"
import cld from "@/shared/assets/logo/ClinicProfile/chedule.svg"
import online from "@/shared/assets/logo/ClinicProfile/schedule2.svg"

export default function HeroMedical() {
  return (
    <section className="w-full py-10  md:py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2  gap-10 items-center">

        <div className="order-4 lg:order-1">
          <p className="text-sm text-[#35B4E8] font-semibold cursor-pointer">
            <img src={med.src} alt="" />
          </p>

          <h1 className="text-[60px] md:text-[60px] font-bold text-[#0C2647] mt-1">
            Медицинский <span className="text-[#219EBC]"> <br /> Центр</span>
          </h1>

          <p className="mt-4 text-[#0C2647] text-[16px] max-w-md">
            Наша клиника — это современная медицинская помощь, опытные врачи и индивидуальный подход к каждому пациенту. Мы используем проверенные методы и технологии, чтобы обеспечить точную диагностику, эффективное лечение и комфорт на каждом этапе заботы о вашем здоровье.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="secondary"
              className="cursor-pointer flex items-center gap-2"
            >
              <img src={cld.src} alt="logo" />
              Записаться на оффлайн консультацию
            </Button>

            <Button
              className="cursor-pointer flex items-center gap-2"
            >
              <img src={online.src} alt="logo" />
              Записаться на онлайн консультацию
            </Button>
          </div>

          {/* INFO */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-[#0C2647] text-[16px]">
            <div>
              <p className="font-semibold">Адрес</p>
              <p className="">ул. Московская 137</p>
            </div>

            <div>
              <p className="font-semibold cursor-pointer">Контакты</p>
              <p className="">+996 000 000</p>
            </div>

            <div className="col-span-2">
              <p className="font-semibold">График работы</p>
              <p className="">
                Пн–Пт 10:00 - 16:30 <br />
                Вт, Чт, Сб 14:30 - 18:30
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-2  lg:order-2">
          <DoctorSlider />
        </div>
      </div>
    </section>
  );
}