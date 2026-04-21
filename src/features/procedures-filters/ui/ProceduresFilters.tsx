"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

const procedures = [
  "Анализы крови",
  "Анализы мочи",
  "Аудиометрия",
  "Биопсия",
  "Блокады лече...",
  "Вакцинация",
  "Инъекции",
  "Гастроскопия",
  "Глюкозотолер...",
  "Дерматоскопия",
  "Ингаляции",
];

const clinics = [
  "Medest",
  "Medline Clinic",
  "MedPlus",
  "Nova Clinic",
  "Prime Clinic",
];

const districts = [
  "Ленинский район",
  "Первомайский район",
  "Свердловский район",
  "Октябрьский район",
];

export default function ProceduresFilters() {
  const [open, setOpen] = useState({
    procedure: false,
    clinic: false,
    rating: false,
    location: false,
    price: false,
  });

  const [ratingRange, setRatingRange] = useState({
    from: "0",
    to: "5",
  });

  const [priceRange, setPriceRange] = useState({
    from: "0",
    to: "1000",
  });

  const toggle = (key: keyof typeof open) => {
    setOpen((prev) => ({
      procedure: key === "procedure" ? !prev.procedure : false,
      clinic: key === "clinic" ? !prev.clinic : false,
      rating: key === "rating" ? !prev.rating : false,
      location: key === "location" ? !prev.location : false,
      price: key === "price" ? !prev.price : false,
    }));
  };

  const closeAll = () => {
    setOpen({
      procedure: false,
      clinic: false,
      rating: false,
      location: false,
      price: false,
    });
  };

  return (
    <div className="mt-6 overflow-visible">
      {/* mobile */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
        <button
          onClick={() => toggle("procedure")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${open.procedure
              ? "border-[#f7a300] bg-[#f7a300] text-white"
              : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Процедуры
        </button>

        <button
          onClick={() => toggle("clinic")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${open.clinic
              ? "border-[#f7a300] bg-[#f7a300] text-white"
              : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Клиники
        </button>

        <button
          onClick={() => toggle("rating")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${open.rating
              ? "border-[#f7a300] bg-[#f7a300] text-white"
              : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Оценка
        </button>

        <button
          onClick={() => toggle("location")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${open.location
              ? "border-[#f7a300] bg-[#f7a300] text-white"
              : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Местоположение
        </button>

        <button
          onClick={() => toggle("price")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${open.price
              ? "border-[#f7a300] bg-[#f7a300] text-white"
              : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Стоимость
        </button>
      </div>

      {/* desktop */}
      <div className="hidden flex-wrap items-start  gap-5 overflow-visible lg:flex">
        <div className="relative w-full mt-4  max-w-[220px]">
          <button
            onClick={() => toggle("procedure")}
            className="flex h-[46px] w-full items-center justify-between rounded-[10px] bg-[#F7A300] px-3 text-left text-[22px] font-bold text-white"
          >
            <span>Процедуры</span>
            <ChevronDown
              size={18}
              className={`transition ${open.procedure ? "rotate-180" : ""}`}
            />
          </button>

          {open.procedure && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] max-h-[310px] w-full overflow-y-auto rounded-[10px] bg-white p-2 shadow-lg">
              {procedures.map((item) => (
                <label
                  key={item}
                  className="mb-2 flex items-center gap-2 text-[14px] text-[#0C2647]"
                >
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="relative w-full mt-4 max-w-[220px]">
          <button
            onClick={() => toggle("clinic")}
            className="flex h-[46px] w-full items-center justify-between rounded-[10px] bg-[#F7A300] px-3 text-left text-[22px] font-bold text-white"
          >
            <span>Клиники</span>
            <ChevronDown
              size={18}
              className={`transition ${open.clinic ? "rotate-180" : ""}`}
            />
          </button>

          {open.clinic && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] max-h-[310px] w-full overflow-y-auto rounded-[10px] bg-white p-2 shadow-lg">
              {clinics.map((item, index) => (
                <label
                  key={`${item}-${index}`}
                  className="mb-2 flex items-center gap-2 text-[14px] text-[#0C2647]"
                >
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="relative w-full mt-4 max-w-[220px]">
          <button
            onClick={() => toggle("rating")}
            className="flex h-[50px] w-full items-center justify-between rounded-[10px] bg-[#F7A300] px-3 text-left text-[22px] font-bold leading-[1.1] text-white"
          >
            <span>Оценка пациента</span>
            <ChevronDown
              size={18}
              className={`transition ${open.rating ? "rotate-180" : ""}`}
            />
          </button>

          {open.rating && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] w-full rounded-[10px] bg-white p-3 shadow-lg">
              <div className="flex items-center justify-between gap-2 text-[14px] text-[#0C2647]">
                <span>от</span>
                <input
                  type="number"
                  value={ratingRange.from}
                  onChange={(e) =>
                    setRatingRange((prev) => ({ ...prev, from: e.target.value }))
                  }
                  className="h-[30px] w-[40px] rounded border border-[#8fa3bf] text-center outline-none"
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 border-t pt-3 text-[14px] text-[#0C2647]">
                <span>до</span>
                <input
                  type="number"
                  value={ratingRange.to}
                  onChange={(e) =>
                    setRatingRange((prev) => ({ ...prev, to: e.target.value }))
                  }
                  className="h-[30px] w-[40px] rounded border border-[#8fa3bf] text-center outline-none"
                />
              </div>
            </div>
          )}
        </div>

        <div className="relative w-full mt-4 max-w-[220px]">
          <button
            onClick={() => toggle("location")}
            className="flex h-[46px] w-full items-center justify-between rounded-[10px] bg-[#F7A300] px-3 text-left text-[22px] font-bold text-white"
          >
            <span>Местоположение</span>
            <ChevronDown
              size={18}
              className={`transition ${open.location ? "rotate-180" : ""}`}
            />
          </button>

          {open.location && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] w-full rounded-[10px] bg-white p-2 shadow-lg">
              {districts.map((item) => (
                <label
                  key={item}
                  className="mb-2 flex items-center gap-2 text-[14px] text-[#0C2647]"
                >
                  <input type="checkbox" className="h-4 w-4" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="relative w-full mt-4 max-w-[220px]">
          <button
            onClick={() => toggle("price")}
            className="flex h-[46px] w-full items-center justify-between rounded-[10px] bg-[#F7A300] px-3 text-left text-[22px] font-bold text-white"
          >
            <span>Стоимость</span>
            <ChevronDown
              size={18}
              className={`transition ${open.price ? "rotate-180" : ""}`}
            />
          </button>

          {open.price && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] w-full rounded-[10px] bg-white p-3 shadow-lg">
              <div className="flex items-center justify-between gap-2 text-[14px] text-[#0C2647]">
                <span>от</span>
                <input
                  type="number"
                  value={priceRange.from}
                  onChange={(e) =>
                    setPriceRange((prev) => ({ ...prev, from: e.target.value }))
                  }
                  className="h-[30px] w-[56px] rounded border border-[#8fa3bf] text-center outline-none"
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 border-t pt-3 text-[14px] text-[#0C2647]">
                <span>до</span>
                <input
                  type="number"
                  value={priceRange.to}
                  onChange={(e) =>
                    setPriceRange((prev) => ({ ...prev, to: e.target.value }))
                  }
                  className="h-[30px] w-[70px] rounded border border-[#8fa3bf] text-center outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* mobile modal: procedures */}
      {open.procedure && (
        <div className="fixed inset-0 z-[1000] flex items-end bg-black/50 lg:hidden">
          <div className="max-h-[70vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Процедуры</h3>
              <button onClick={closeAll}>
                <X size={24} />
              </button>
            </div>

            {procedures.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 border-b py-3 last:border-none"
              >
                <input type="checkbox" className="h-5 w-5 accent-[#f7a300]" />
                <span>{item}</span>
              </label>
            ))}

            <button
              onClick={closeAll}
              className="mt-5 w-full rounded-xl bg-[#f7a300] py-3 font-semibold text-white"
            >
              Применить
            </button>
          </div>
        </div>
      )}

      {/* mobile modal: clinics */}
      {open.clinic && (
        <div className="fixed inset-0 z-[1000] flex items-end bg-black/50 lg:hidden">
          <div className="max-h-[70vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Клиники</h3>
              <button onClick={closeAll}>
                <X size={24} />
              </button>
            </div>

            {clinics.map((item, index) => (
              <label
                key={`${item}-${index}`}
                className="flex items-center gap-3 border-b py-3 last:border-none"
              >
                <input type="checkbox" className="h-5 w-5 accent-[#f7a300]" />
                <span>{item}</span>
              </label>
            ))}

            <button
              onClick={closeAll}
              className="mt-5 w-full rounded-xl bg-[#f7a300] py-3 font-semibold text-white"
            >
              Применить
            </button>
          </div>
        </div>
      )}

      {/* mobile modal: rating */}
      {open.rating && (
        <div className="fixed inset-0 z-[1000] flex items-end bg-black/50 lg:hidden">
          <div className="max-h-[70vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Оценка пациента</h3>
              <button onClick={closeAll}>
                <X size={24} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[14px] text-[#19335A]">от</span>
              <input
                type="number"
                value={ratingRange.from}
                onChange={(e) =>
                  setRatingRange((prev) => ({ ...prev, from: e.target.value }))
                }
                className="h-[40px] w-[60px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
              />
              <span className="text-[14px] text-[#19335A]">до</span>
              <input
                type="number"
                value={ratingRange.to}
                onChange={(e) =>
                  setRatingRange((prev) => ({ ...prev, to: e.target.value }))
                }
                className="h-[40px] w-[60px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
              />
            </div>

            <button
              onClick={closeAll}
              className="mt-5 w-full rounded-xl bg-[#f7a300] py-3 font-semibold text-white"
            >
              Применить
            </button>
          </div>
        </div>
      )}

      {/* mobile modal: location */}
      {open.location && (
        <div className="fixed inset-0 z-[1000] flex items-end bg-black/50 lg:hidden">
          <div className="max-h-[70vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Местоположение</h3>
              <button onClick={closeAll}>
                <X size={24} />
              </button>
            </div>

            {districts.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 border-b py-3 last:border-none"
              >
                <input type="checkbox" className="h-5 w-5 accent-[#f7a300]" />
                <span>{item}</span>
              </label>
            ))}

            <button
              onClick={closeAll}
              className="mt-5 w-full rounded-xl bg-[#f7a300] py-3 font-semibold text-white"
            >
              Применить
            </button>
          </div>
        </div>
      )}

      {/* mobile modal: price */}
      {open.price && (
        <div className="fixed inset-0 z-[1000] flex items-end bg-black/50 lg:hidden">
          <div className="max-h-[70vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Стоимость</h3>
              <button onClick={closeAll}>
                <X size={24} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[14px] text-[#19335A]">от</span>
              <input
                type="number"
                value={priceRange.from}
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, from: e.target.value }))
                }
                className="h-[40px] w-[70px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
              />
              <span className="text-[14px] text-[#19335A]">до</span>
              <input
                type="number"
                value={priceRange.to}
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, to: e.target.value }))
                }
                className="h-[40px] w-[80px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
              />
            </div>

            <button
              onClick={closeAll}
              className="mt-5 w-full rounded-xl bg-[#f7a300] py-3 font-semibold text-white"
            >
              Применить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}