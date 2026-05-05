import React from "react";
import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<Props> = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "w-[400px] h-[45px] flex items-center justify-center gap-[10px] rounded-full text-[16px] font-bold transition",
        {
          "bg-[#0C2647] text-white": variant === "primary",
          "bg-gray-200 text-[#0C2647]": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};