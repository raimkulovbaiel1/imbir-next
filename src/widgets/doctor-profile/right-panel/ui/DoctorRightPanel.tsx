import { CheckCircle2 } from "lucide-react";

const skillsLeft = [
  "Диагностика и лечение заболеваний сердечно-сосудистой системы",
  "Составление индивидуальных программ реабилитации после операций на сердце",
];

const skillsRight = [
  "ЭКГ, ЭХО-КГ и нагрузочные тесты",
  "Лечение артериальной гипертонии, аритмий и ишемической болезни сердца",
];

export default function DoctorRightPanel() {
  return (
    <div className="w-full rounded-2xl  p-5 sm:p-7 lg:p-8 bg-[#CAE9FF]!   ">
      <p className="text-[18px] font-semibold text-[#0C2647]">Кардиология</p>
      <h1 className="mt-1 text-[34px] font-bold leading-tight text-[#0C2647] sm:text-[42px]">
        Жаныбек Асанкулов
      </h1>

      <div className="mt-8 space-y-6 text-[#0C2647]">
        <div>
          <h2 className="text-[18px] font-semibold text-[#0C2647]">Образование</h2>
          <p className="mt-2 text-[17px] leading-[1.45]">
            Кыргызская Государственная Медицинская Академия, факультет
            лечебного дела (окончил с отличием).
          </p>
        </div>

        <div>
          <h2 className="text-[18px] font-semibold text-[#0C2647]">О враче</h2>
          <p className="mt-2 text-[16px]  leading-[1.5]">
            Опытный кардиолог с более чем 14-летней практикой.
            Специализируется на диагностике и лечении
            сердечно-сосудистых заболеваний, применяет современные методы
            обследования и индивидуаль е программы терапии.
            Известен внимательным отношением к каждому пациенту, умением
            объяснять сложные вещи простым языком и всегда ставит на первое
            место безопасность и комфорт человека. Регулярно повышает
            квалификацию, участвует в международных конференциях и ведёт
            просветительскую работу по профилактике сердечных заболеваний.
          </p>
        </div>
      </div>

      <div className="my-8 border-t-2 border-dashed border-[#35B4E8]" />

      <div>
        <h2 className="text-[18px]  font-semibold mt-10 text-[#0C2647]">
          Опыт работы: 14 лет
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="flex gap-2 text-[16px] text-[#0C2647]">
            <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#1ea7d7]" />
            <p>
              Национальный центр <br />  кардиологии — кардиолог
              <br />
              (8 лет)
            </p>
          </div>

          <div className="flex gap-2 text-[16px] text-[#0C2647]">
            <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#1ea7d7]" />
            <p>
              Частная клиника <br /> «Медлайн» — ведущий <br /> специалист

              (6 лет)
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 border-t-2 border-dashed border-[#35B4E8]" />

      <div>
        <h2 className="text-[18px] font-semibold mt-10 text-[#0C2647]">
          Профессиональные навыки
        </h2>

        <div className="mt-1 grid gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            {skillsLeft.map((item) => (
              <div key={item} className="flex gap-2 text-[16px] mt-4 text-[#0C2647]">
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0 text-[#1ea7d7]"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {skillsRight.map((item) => (
              <div key={item} className="flex gap-2 text-[16px]  mt-4 text-[#0C2647]">
                <CheckCircle2
                  size={18}
                  className="mt-1 shrink-0  text-[#1ea7d7]"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}