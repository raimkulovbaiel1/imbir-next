import type { StaticImageData } from "next/image";

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  image: StaticImageData;
}