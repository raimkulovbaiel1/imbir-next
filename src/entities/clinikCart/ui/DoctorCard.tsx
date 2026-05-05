import Image from "next/image";

interface Props {
  src: string;
  active?: boolean;
  onClick?: () => void;
}

export const DoctorCard = ({ src, active, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`w-14 h-14 rounded-md overflow-hidden cursor-pointer border ${
        active ? "border-[#35B4E8]" : "border-transparent"
      }`}
    >
      <Image
        src={src}
        alt="doctor"
        width={56}
        height={56}
        className="object-cover w-full h-full"
      />
    </div>
  );
};