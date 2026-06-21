"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clinicData } from "@/entities/My-clinic/model/clinic.data";

const ClinicGallery = () => {
  const scrollGallery = (direction: "left" | "right") => {
    const gallery = document.getElementById("clinic-gallery");

    if (!gallery) return;

    gallery.scrollBy({
      left: direction === "right" ? 250 : -250,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-6 flex items-center gap-2 md:mt-8 md:gap-4">
      <button
        type="button"
        onClick={() => scrollGallery("left")}
        aria-label="Предыдущее фото"
        className="shrink-0 rounded-full p-1 text-white transition hover:bg-white/10"
      >
        <ChevronLeft size={30} strokeWidth={4} />
      </button>

      <div
        id="clinic-gallery"
        className="
          flex min-w-0 flex-1 gap-2
          overflow-x-auto
          scrollbar-hide

          md:gap-4
        "
      >
        {clinicData.gallery.map((image, index) => (
          <div
            key={index}
            className="
              relative h-[64px] w-[82px]
              shrink-0 overflow-hidden rounded-[10px]

              md:h-[66px]
              md:w-[94px]
            "
          >
            <Image
              src={image}
              alt={`Фото клиники ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollGallery("right")}
        aria-label="Следующее фото"
        className="shrink-0 rounded-full p-1 text-white transition hover:bg-white/10"
      >
        <ChevronRight size={30} strokeWidth={4} />
      </button>
    </div>
  );
};

export default ClinicGallery;