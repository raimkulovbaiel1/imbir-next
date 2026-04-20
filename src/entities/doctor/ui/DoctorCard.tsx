type DoctorCardProps = {
  image: string;
  name: string;
  profession: string;
};

export default function DoctorCard({
  image,
  name,
  profession,
}: DoctorCardProps) {
  return (
    <article className="w-[302px]">
      <div className="relative w-[302px] h-[302px] overflow-hidden rounded-[18px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Плашка с текстом */}
        <div className="absolute bottom-4 left-0 flex items-center">
          <div className="bg-gradient-to-r from-[#219EBC] to-[#0C2647] text-white text-[12px] px-4 py-2">
            Лечить не болезнь, а человека.
          </div>

          <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#0C2647]" />
        </div>
      </div>

      <h3 className="mt-3 text-[18px] font-bold text-[#19335A]">
        {name}
      </h3>
      <p className="text-[16px] text-[#19335A]">
        {profession}
      </p>
    </article>
  );
}