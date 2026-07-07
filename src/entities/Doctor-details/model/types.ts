import type { StaticImageData } from "next/image";

export interface DoctorDetailsType {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  reviews: number;
  image: StaticImageData;
  education: string;
  about: string;
  workplaces: string[];
  skills: string[];
}