import React from 'react' 
interface Props {
  date: string;
  doctor: string;
  clinic: string;
  text: string;
  rating: string;
}

export const ReviewName = ({
  date,
   doctor,
  clinic,
  text,
  rating,
}: Props) => {
  return (
   <div
      className=" bg-white rounded-[18px] p-4 md:p-6  flex  flex-col md:flex-row md:items-start justify-between gap-5 ">
      {/* LEFT */}
      <div className="flex flex-col gap-3">
        <p className="text-[#0C2647] text-[16px] md:text-[18px]">
          {date}
        </p>
        <div className="flex gap-3">
          <span className="text-[#0C2647] text-[14px] md:text-[16px]">
            На странице:
          </span>

          <div>
            <h3
              className="
                font-bold
                text-[#0C2647]
                text-[16px] md:text-[24px]
                leading-tight
              "
            >
              {doctor}
            </h3>

            <p className="text-[#0C2647] text-[14px] font-normal md:text-[22px]">
              {clinic}
            </p>
          </div>
        </div>  
        

        <div className="flex gap-3">
          <span className="text-[#0C2647] text-[14px] md:text-[16px]">
            Отзыв:
          </span>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-[18px] md:text-[22px]">
                ★★★★★
              </span>

              <span className="text-[#0C2647] text-[16px] md:text-[16px]">
                {rating}
              </span>
            </div>
            <p
              className="mt-1 max-w-125  text-[#0C2647] text-[16px] md:text-[18px] leading-snug">
              {text}
            </p>
          </div>
        </div>
      </div>
 
       <div
        className=" flex md:flex-col gap-3  w-full  md:w-auto ">
        <button
          className=" flex-1   md:w-[170px]   h-[40px] rounded-[10px] bg-gradient-to-r  from-[#FFB321]  to-[#FF8A00]  text-white   text-[16px]  font-medium md:text-[19px] ">
          ✏ Редактировать
        </button>
        <button
          className="  flex-1 md:w-[170px] h-[40px] rounded-[10px]  bg-[#FF0F0F]  text-white  text-[16px]  font-medium md:text-[19px] ">
          🗑 Удалить
        </button>
      </div>
    </div>
  )
}
