import type { ReactNode } from "react";

interface ClinicFormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
}

const ClinicFormField = ({
  label,
  required = false,
  children,
}: ClinicFormFieldProps) => {
  return (
    <label className="block w-full">
      <span className="mb-2 block text-[12px] font-bold text-[#092C56] sm:text-[18px]">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </span>

      {children}
    </label>
  );
};

export default ClinicFormField;