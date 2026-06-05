import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className="
        w-full
        h-[56px]
        rounded-full
        text-white 
        cursor-pointer
        font-semibold
        text-[18px]
        bg-gradient-to-r
        from-[#0C2647]
        to-[#2AA7B8]
      "
    >
      {children}
    </button>
  );
}