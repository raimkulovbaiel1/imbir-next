interface ProcedureHeaderProps {
  procedure: {
    title: string;
    specialization: string;
    price: string;
    clinic: string;
    schedule: {
      first: string;
      second: string;
    };
  };
}

const ProcedureHeader = ({ procedure }: ProcedureHeaderProps) => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-[150px]">
      {/* МОБИЛЬНЫЙ ВЕРХНИЙ БЛОК */}
      <div className="flex items-start gap-4 md:contents">
        {/* Аватар процедуры */}
        <div className="w-[110px] shrink-0 sm:w-[140px] md:w-auto">
          <div className="relative h-[110px] w-[110px] overflow-hidden rounded-[10px] bg-[#F2F2F2] sm:h-[140px] sm:w-[140px] md:mx-0 md:h-[180px] md:w-[180px]">
            {/* Голова */}
            <div className="absolute left-1/2 top-[22px] h-[44px] w-[44px] -translate-x-1/2 rounded-full bg-white sm:top-[30px] sm:h-[56px] sm:w-[56px] md:top-[38px] md:h-[68px] md:w-[68px]" />

            {/* Тело */}
            <div className="absolute bottom-0 left-1/2 h-[45px] w-[100px] -translate-x-1/2 rounded-t-full bg-white sm:h-[55px] sm:w-[125px] md:h-[64px] md:w-[145px]" />
          </div>

          {/* Рейтинг */}
          <div className="mt-3 text-center text-[11px] text-white sm:text-[13px] md:mt-5 md:text-[16px]">
            <div className="flex items-center justify-center whitespace-nowrap">
              <span className="text-[14px] tracking-[-1px] text-[#FFD600] sm:text-[18px] md:text-[22px]">
                ★★★★★
              </span>

              <span className="ml-1.5 font-bold md:ml-2">4.9</span>
            </div>

            <p className="mt-1 text-[11px] text-[#CAE9FF] sm:text-[13px] md:text-[16px]">
              (18 отзывов)
            </p>
          </div>
        </div>

        {/* Данные процедуры */}
        <div className="min-w-0 flex-1 text-[#CAE9FF] md:pt-1">
          <h1 className="break-words text-[20px] font-bold leading-tight text-white sm:text-[24px] md:text-[30px]">
            {procedure.title}
          </h1>

          <p className="mt-1 text-[13px] font-semibold text-white sm:text-[16px] md:mt-0 md:text-[18px]">
            {procedure.specialization}
          </p>

          <div className="mt-4 space-y-3 text-[11px] leading-relaxed sm:text-[13px] md:mt-5 md:text-[16px]">
            {/* График */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-2 md:flex-row">
              <b className="shrink-0 text-white">График</b>

              <div className="min-w-0">
                <p>{procedure.schedule.first}</p>
                <p>{procedure.schedule.second}</p>
              </div>
            </div>

            {/* Стоимость */}
            <p className="break-words">
              <b className="text-white">Стоимость</b>{" "}
              {procedure.price}
            </p>

            {/* Адрес */}
            <div className="flex flex-col gap-1 pt-1 sm:flex-row sm:items-start sm:gap-4 md:gap-8 md:pt-2">
              <b className="shrink-0 text-white">📍 Адрес</b>

              <div className="min-w-0">
                <p className="break-words">{procedure.clinic}</p>

                <p className="break-words font-bold text-[#CAE9FF]">
                  Medcenter.kg
                </p>
              </div>
            </div>
          </div>

          {/* Desktop кнопка */}
          <button
            type="button"
            className="mt-6 hidden w-fit rounded-[9px] border border-[#A9DDF7] px-4 py-2 text-[16px] text-[#CAE9FF] transition hover:bg-white/10 md:block"
          >
            Редактировать данные
          </button>
        </div>
      </div>

      {/* Mobile / tablet кнопка */}
      <button
        type="button"
        className="w-full rounded-[9px] border border-[#A9DDF7] px-4 py-2.5 text-[14px] font-medium text-[#CAE9FF] transition active:bg-white/10 sm:text-[16px] md:hidden"
      >
        Редактировать данные
      </button>
    </div>
  );
};

export default ProcedureHeader;