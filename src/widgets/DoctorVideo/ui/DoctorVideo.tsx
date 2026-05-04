import React from 'react'
import Doctor from "@/shared/assets/img/DoctorVideo/doc.png"
export const DoctorVideo = () => {
  return (
    <section className="w-full py-[10px]" >
      <div className="flex items-center justify-between ">
        <h2 className="text-[30px] font-bold text-[#0C2647]">
          Ознакомительный ролик врача
        </h2>
        <img
          src={Doctor.src}
          alt="Медик"
          className="w-30 h-30 "
        />
      </div>
      <div className="mx-auto " >
        <div className="mt-[24px] overflow-hidden rounded-[29px]">
          <iframe
            className="w-full h-[632px]"
            src="https://www.youtube.com/embed/_m1kpCST9kw"
            title="YouTube video"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
export default DoctorVideo;
