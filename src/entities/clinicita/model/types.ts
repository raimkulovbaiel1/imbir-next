import type { StaticImageData } from "next/image";

export interface ClinicSchedule {
  first: string;
  second: string;
}

export interface ClinicData {
  name: string;
  rating: number;
  reviews: number;
  phone: string;
  address: string;
  website: string;
  schedule: ClinicSchedule;
  description: string;
  gallery: StaticImageData[];
}