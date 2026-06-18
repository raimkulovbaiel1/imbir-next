export default function DoctorSection() {
  return (
    <section className="space-y-4">

      {/* CARD */}
      <div className="bg-white rounded-[12px] p-4 shadow-sm">
        <h3 className="font-bold mb-3">
          Выбранный врач
        </h3>

        <div className="space-y-2 text-[#0C2647]">
          <p>🟠 Сагынбекова Айтунук</p>

          <p className="ml-7">
            <span className="font-bold">Стаж</span> 14 лет
          </p>
          <p className="ml-7">
            <span className="font-bold">Рейтинг</span> 4.9
          </p>
        </div>
      </div>

      {/* BUTTON OUTSIDE BLOCK */}
      <button className="font-semibold w-full  text-center text-[17px] text-[#0C2647]  transition">
        Выбрать другого ▼
      </button>

    </section>
  );
}