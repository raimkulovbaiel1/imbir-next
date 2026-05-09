import React from "react";
import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  className,
  variant = "primary",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2",
        "h-[52px]  px-10 rounded-[10px] font-semibold text-[18px]",
        "transition active:scale-95 cursor-pointer",

       
        {
          "bg-[#0C2647] text-white hover:bg-[#0a1f3a]": variant === "primary",
          "bg-gray-200 text-[#0C2647] hover:bg-gray-300": variant === "secondary",
          "bg-red-500 text-white hover:bg-red-600": variant === "danger",
        },

        // full width
        {
          "w-full": fullWidth,
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};