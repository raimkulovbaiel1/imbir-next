interface Props {
  name: string;
  service: string;
  date: string;
  price: string;
}

export default function AppointmentCard({
  name,
  service,
  date,
  price,
}: Props) {
  return (
    <div className="
      bg-white rounded-[16px]
      p-4 md:p-5
      flex flex-col md:flex-row
      gap-4
      md:justify-between
      md:items-start
    ">

      {/* LEFT */}
      <div>
        <p className="text-[12px] md:text-[16px] text-gray-500">
          {date}
        </p>

        <p className="font-bold text-[#0C2647] text-[18px] md:text-[22px]">
          {name}
        </p>

        <p className="text-[14px] md:text-[16px]">
          {service}
        </p>

        <p className="text-[12px] md:text-[16px] text-gray-500">
          MedCenter, ул. Московская 137
        </p>
      </div>

      {/* RIGHT */}
      <div className="
        flex flex-row md:flex-col
        items-center md:items-end
        justify-between
        gap-3
        w-full md:w-auto
      ">

        <button className="
          bg-[#FF0000]
          text-white
          text-[12px] md:text-[16px]
          px-3 py-1
          rounded
          whitespace-nowrap
          cursor-pointer
        ">
          ✖ Отменить
        </button>

        <p className="font-semibold text-[16px] md:text-[18px]">
          {price}
        </p>

      </div>

    </div>
  );
}