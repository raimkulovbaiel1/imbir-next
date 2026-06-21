import type { StaticImageData } from "next/image";
import clinicPhoto from "@/shared/assets/img/Doc/doc.png";

type ClinicData = {
  name: string;
  rating: number;
  reviews: number;
  phone: string;
  address: string;
  website: string;
  schedule: {
    first: string;
    second: string;
  };
  description: string;
  gallery: Array<string | StaticImageData>;
};

export const clinicData: ClinicData = {
  name: "Nova Clinic",
  rating: 4.9,
  reviews: 18,
  phone: "+996 552 139 540",
  address: "ул. Московская 137",
  website: "Medcenter.kg",

  schedule: {
    first: "Пн, Ср, Пт - 10:00 -16:30",
    second: "Вт, Чт - 14:00 -18:30",
  },

  description:
    "Наша клиника — это современная медицинская помощь, опытные врачи и индивидуальный подход к каждому пациенту. Мы используем проверенные методы и технологии, чтобы обеспечить точную диагностику, эффективное лечение и комфорт на каждом этапе заботы о вашем здоровье.",

  gallery: [
    clinicPhoto,
    clinicPhoto,
    clinicPhoto,
    clinicPhoto,
    clinicPhoto,
    clinicPhoto,
    clinicPhoto,
  ],
};