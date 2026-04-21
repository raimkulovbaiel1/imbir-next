type ClinicCardProps = {
  image: string;
  title: string;
  address: string;
  borderColor?: string;
  bgColor?: string;
};

export default function ClinicCard({
  image,
  title,
  address,
  borderColor = "#35B4E8",
  bgColor = "#FFFFFF",
}: ClinicCardProps) {
  return (
    <article className="w-full max-w-75.5 sm:max-w-75.5 lg:max-w-75.5">
      <div
        className="flex h-42.5 w-full items-center justify-center rounded-[14px] border-2 sm:h-55 lg:h-75.5 lg:w-75.5 "
        style={{
          borderColor,
          backgroundColor: bgColor,
        }}
      >
        <img
          src={image}
          alt={title}
          className="max-h-[90px] max-w-[90px] object-contain sm:max-h-[120px] sm:max-w-[120px]"
        />
      </div>

      <h3 className="mt-3 text-[20px] font-bold leading-[1.1] text-[#0C2647]">
        {title}
      </h3>
      <p className="mt-1 text-[13px] text-[#0C2647]">{address}</p>
    </article>
  );
}