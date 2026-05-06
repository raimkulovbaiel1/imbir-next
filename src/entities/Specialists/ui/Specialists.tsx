import Image from "next/image";

interface Props {
  name: string;
  job: string;
  image: string;
  rating: string;
}

export default function SpecialistCard({ name, job, image, rating }: Props) {
  return (
    <div className="w-full max-w-[220px]">

      <div className="relative w-[275px] h-[303px] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm shadow">
          <span className="text-yellow-400">★</span>
          <span>{rating}</span>
        </div>
      </div>

      <div className="mt-2">
        <p className="font-semibold text-[18px] text-[#0C2647]">{name}</p>
        <p className="text-gray-500 text-[16px]">{job}</p>
      </div>
    </div>
  );
}