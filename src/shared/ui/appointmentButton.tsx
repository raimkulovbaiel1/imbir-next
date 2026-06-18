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
      w-[323px]
        h-[47px]
        rounded-[12px]
        text-white 
        cursor-pointer
        font-semibold
        text-[22px]
        bg-gradient-to-r
        from-[#0C2647]
        to-[#2AA7B8]
      "
    >
      {children}
    </button>
  );
}