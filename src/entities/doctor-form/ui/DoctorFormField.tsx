import type { ReactNode } from "react";

interface DoctorFormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

const DoctorFormField = ({
  label,
  required = false,
  children,
}: DoctorFormFieldProps) => {
  return (
    <div className="w-full">
      <label className="mb-1.5 block text-[11px] font-bold text-[#092C56] sm:text-[18px]">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {children}
    </div>
  );
};

export default DoctorFormField;