export interface WorkSchedule {
  from: string;
  to: string;
}

export interface WorkDay {
  id: string;
  label: string;
}

export interface DoctorFormData {
  firstName: string;
  lastName: string;
  specialization: string;
  experience: string;
  clinicExperience: string;
  clinicName: string;
  clinicAddress: string;
  professionalSkills: string[];
  description: string;
  education: string;
  lunchFrom: string;
  lunchTo: string;
}