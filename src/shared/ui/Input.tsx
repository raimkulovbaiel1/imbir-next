import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="
        w-full 
        
        h-[52px]
        border
        rounded-[12px]
        px-4
        outline-none
      "
    />
  );
}