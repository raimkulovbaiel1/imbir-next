interface Props {
    name: string;
    service: string;
    date: string;
    price: string;
    isPast?: boolean;
}

export default function PastEntry({
    name,
    service,
    date,
    price,
    isPast = false,
}: Props) {
    return (
        <div
            className="  bg-white   rounded-[16px]   p-4 md:p-5 flex  md:flex-row gap-4  md:justify-between  md:items-start flex-col">
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
            <div
                className="  flex  flex-row  md:flex-col   items-center md:items-end  justify-between gap-3 w-full  md:w-auto">
                {isPast ? (
                    <button
                        className="bg-[#2AA7B8]   text-white  text-[12px]   px-4  py-2  rounded-[10px]  whitespace-nowrap  cursor-pointer">

                        Оставить отзыв
                    </button>
                ) : (
                    <button
                        className=" cursor-pointer  w-[185px] h-[40px] bg-[#FE7F30]    text-[16px] text-white md:text-[16px]   rounded  whitespace-nowrap  ">
                        Оставить отзыв
                    </button>
                )}

                <p className="font-semibold text-[16px] md:text-[18px]">
                    {price}
                </p>

            </div>
        </div>
    );
}