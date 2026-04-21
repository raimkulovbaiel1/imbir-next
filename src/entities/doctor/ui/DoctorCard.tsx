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
    <article className="w-full max-w-[302px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-[18px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-4 left-0 flex items-center">
          <div className="bg-gradient-to-r from-[#219EBC] to-[#0C2647] px-3 py-2 text-[10px] text-white sm:px-4 sm:text-[12px]">
            Лечить не болезнь, а человека.
          </div>

          <div className="h-0 w-0 border-b-[12px] border-l-[12px] border-t-[12px] border-b-transparent border-l-[#0C2647] border-t-transparent" />
        </div>
      </div>

      <h3 className="mt-3 text-[16px] font-bold text-[#19335A] sm:text-[18px]">
        {name}
      </h3>
      <p className="text-[14px] text-[#19335A] sm:text-[16px]">
        {profession}
      </p>
    </article>
  );
}