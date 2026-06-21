"use client";

import { Pencil } from "lucide-react";

const EditClinicButton = () => {
  const handleEdit = () => {
    console.log("Открыть редактирование клиники");
  };

  return (
    <button
      type="button"
      onClick={handleEdit}
      className="
        flex items-center gap-2
        rounded-[8px]
        border border-[#092C56]
        px-3 py-2
        text-[12px] text-[#092C56]
        transition
        hover:bg-[#092C56]
        hover:text-white

        sm:px-4
        sm:text-[14px]

        md:px-5
        md:text-[16px]
      "
    >
      <Pencil size={16} />
      Редактировать данные
    </button>
  );
};

export default EditClinicButton;