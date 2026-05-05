import { useState } from "react";

export const useDoctorSlider = (length: number) => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % length);

  const prev = () =>
    setActive((prev) => (prev === 0 ? length - 1 : prev - 1));

  return { active, setActive, next, prev };
};