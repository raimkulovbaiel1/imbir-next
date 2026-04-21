"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import doc from "@/shared/assets/img/Doc/doc.png";

const specializations = [
  "Акушер - гинеколог",
  "Аллерголог",
  "Анестезиолог",
  "Андролог",
  "Венеролог",
  "Вертебролог",
  "Гематолог",
  "Генетик",
  "Гепатолог",
  "Хирург",
];

const districts = [
  "Ленинский район",
  "Первомайский район",
  "Свердловский район",
  "Октябрьский район",
];

export default function DoctorFilters() {
  const [open, setOpen] = useState<{
    spec: boolean;
    location: boolean;
    rating: boolean;
  }>({
    spec: false,
    location: false,
    rating: false,
  });

  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [ratingRange, setRatingRange] = useState({
    from: "",
    to: "5",
  });

  const toggle = (key: keyof typeof open) => {
    setOpen((prev) => ({
      spec: key === "spec" ? !prev.spec : false,
      location: key === "location" ? !prev.location : false,
      rating: key === "rating" ? !prev.rating : false,
    }));
  };

  const closeAll = () => {
    setOpen({
      spec: false,
      location: false,
      rating: false,
    });
  };

  const toggleSpec = (spec: string) => {
    setSelectedSpecs((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
    );
  };

  const toggleDistrict = (district: string) => {
    setSelectedDistricts((prev) =>
      prev.includes(district)
        ? prev.filter((d) => d !== district)
        : [...prev, district]
    );
  };

  return (
    <div className="mt-5">
      /* Мобильная версия */
      <div className="mb-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
        <button
          onClick={() => toggle("spec")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${selectedSpecs.length > 0
            ? "border-[#f7a300] bg-[#f7a300] text-white"
            : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Специализация {selectedSpecs.length > 0 && `(${selectedSpecs.length})`}
        </button>

        <button
          onClick={() => toggle("location")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${selectedDistricts.length > 0
            ? "border-[#f7a300] bg-[#f7a300] text-white"
            : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Местоположение{" "}
          {selectedDistricts.length > 0 && `(${selectedDistricts.length})`}
        </button>

        <button
          onClick={() => toggle("rating")}
          className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${ratingRange.from || ratingRange.to !== "5"
            ? "border-[#f7a300] bg-[#f7a300] text-white"
            : "border-gray-300 bg-white text-gray-700"
            }`}
        >
          Оценка
        </button>
      </div>

      <div className="hidden flex-wrap items-start gap-5 overflow-visible lg:flex">
        <div className="relative mt-5 w-[277px]">
          <button
            onClick={() => toggle("spec")}
            className="flex h-[46px] w-full items-center justify-between rounded-[10px] bg-[#f7a300] px-3 text-[22px] font-bold text-white"
          >
            <span>Специализация</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${open.spec ? "rotate-180" : ""
                }`}
            />
          </button>

          {open.spec && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] max-h-[260px] w-full overflow-y-auto rounded-[10px] bg-white p-3 text-[14px] text-[#19335A] shadow-lg">
              {specializations.map((item) => (
                <label
                  key={item}
                  className="mb-2 flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedSpecs.includes(item)}
                    onChange={() => toggleSpec(item)}
                    className="h-4 w-4 accent-[#f7a300]"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="relative mt-5 w-[277px]">
          <button
            onClick={() => toggle("location")}
            className="flex h-[46px] w-full items-center justify-between rounded-[10px] bg-[#f7a300] px-3 text-[22px] font-bold text-white"
          >
            <span>Местоположение</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${open.location ? "rotate-180" : ""
                }`}
            />
          </button>

          {open.location && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] w-full rounded-[10px] bg-white p-3 text-[14px] text-[#19335A] shadow-lg">
              {districts.map((item) => (
                <label
                  key={item}
                  className="mb-2 flex cursor-pointer items-center gap-2 rounded p-1 hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedDistricts.includes(item)}
                    onChange={() => toggleDistrict(item)}
                    className="h-4 w-4 accent-[#f7a300]"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="relative mt-5 w-[277px]">
          <button
            onClick={() => toggle("rating")}
            className="flex h-[46px] w-full items-center justify-between rounded-[10px] bg-[#f7a300] px-3 text-[22px] font-bold text-white"
          >
            <span>Оценка пациента</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${open.rating ? "rotate-180" : ""
                }`}
            />
          </button>

          {open.rating && (
            <div className="absolute left-0 top-[calc(100%+4px)] z-[999] w-full rounded-[10px] bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-[14px] text-[#19335A]">от</span>
                <input
                  type="number"
                  value={ratingRange.from}
                  onChange={(e) =>
                    setRatingRange((prev) => ({
                      ...prev,
                      from: e.target.value,
                    }))
                  }
                  className="h-[32px] w-[50px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
                  min="1"
                  max="5"
                />
                <span className="text-[14px] text-[#19335A]">до</span>
                <input
                  type="number"
                  value={ratingRange.to}
                  onChange={(e) =>
                    setRatingRange((prev) => ({
                      ...prev,
                      to: e.target.value,
                    }))
                  }
                  className="h-[32px] w-[50px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
                  min="1"
                  max="5"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 hidden h-[90px] w-[97px] lg:block">
          <img src={doc.src} alt="doctor" className="h-full w-full object-contain" />
        </div>
      </div>

      {open.spec && (
        <div className="fixed inset-0 z-[1000] flex items-end bg-black/50 lg:hidden">
          <div className="max-h-[70vh] w-full overflow-y-auto rounded-t-2xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Специализация</h3>
              <button onClick={closeAll}>
                <X size={24} />
              </button>
            </div>

            {specializations.map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 border-b py-3 last:border-none"
              >
                <input
                  type="checkbox"
                  checked={selectedSpecs.includes(item)}
                  onChange={() => toggleSpec(item)}
                  className="h-5 w-5 accent-[#f7a300]"
                />
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
                <input
                  type="checkbox"
                  checked={selectedDistricts.includes(item)}
                  onChange={() => toggleDistrict(item)}
                  className="h-5 w-5 accent-[#f7a300]"
                />
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

      {open.rating && (
        <div className="fixed inset-0 z-[1000] flex items-end bg-black/50 lg:hidden">
          <div className="max-h-[70vh] w-full  rounded-t-2xl bg-white p-5">
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
                  setRatingRange((prev) => ({
                    ...prev,
                    from: e.target.value,
                  }))
                }
                className="h-[40px] w-[60px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
                min="1"
                max="5"
              />
              <span className="text-[14px] text-[#19335A]">до</span>
              <input
                type="number"
                value={ratingRange.to}
                onChange={(e) =>
                  setRatingRange((prev) => ({
                    ...prev,
                    to: e.target.value,
                  }))
                }
                className="h-[40px] w-[60px] rounded border border-[#8fa3bf] text-center outline-none focus:border-[#f7a300]"
                min="1"
                max="5"
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