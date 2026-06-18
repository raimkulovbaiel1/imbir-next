export default function ServiceSection() {
  return (
    <section className="space-y-4">

      {/* CARD */}
      <div className="bg-white rounded-[12px] p-4 shadow-sm">
        <h3 className="font-bold mb-3">
          Выбранная услуга
        </h3>

        <div className="space-y-2 text-[#0C2647]">
          <p>🟠 Чистка лица</p>

          <p className="ml-7">
            <span className="font-bold  ">Клиника</span> Nova Clinic
          </p>

         <p className="ml-7">
            <span className="font-bold">Стоимость</span> 1000 сом
          </p>
        </div>
      </div>

      <button className="w-full text-center text-[17px] font-semibold text-[#0C2647]">
        Выбрать другую ▼
      </button>

    </section>
  );
}