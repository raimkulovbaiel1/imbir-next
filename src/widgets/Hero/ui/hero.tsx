import Image from "next/image"; 
import doctor1 from "@/shared/assets/hero/doctor1.png";
import doctor2 from "@/shared/assets/hero/doctor2.png";
import doctor3 from "@/shared/assets/hero/doctor3.png";
import heroCharacter from "@/shared/assets/hero/hero-character.png";
import pills from "@/shared/assets/hero/pills.png";
import searchIcon from "@/shared/assets/hero/search.svg";

export const Hero = () => {
  return (
    <section className="w-full bg-[#2fa3c1]">
      <div className="mx-auto grid min-h-[calc(100vh-82px)] max-w-[1280px] grid-cols-1 items-center gap-10 px-4 py-10 md:px-8 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col">
          <div className="max-w-[620px]">
            <h1 className="font-family-Asgard  leading-[0.95] text-white text-[40px] sm:text-[56px] lg:text-[60px]">
              Мы собрали лучших
            </h1>

            <div className="mt-2 flex items-center gap-4">
              <h2 className="leading-[0.95]  text-black text-[42px] sm:text-[56px] lg:text-[68px]">
                Специалистов
              </h2>

              <div className="flex h-[42px] w-[116px] items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 shadow-md sm:h-[50px] sm:w-[130px]">
                <Image
                  src={pills}
                  alt="pills"
                  width={46}
                  height={46}
                  className="h-auto w-auto"
                />
              </div>
            </div>

            <h2 className="mt-2 leading-[0.95] font-Asgard text-white text-[42px] sm:text-[56px] lg:text-[68px]">
              Честные рейтинги
            </h2>

            <div className="relative mt-8 w-full max-w-[470px]">
              <input
                type="text"
                placeholder="Поиск врача/клиники"
                className="h-[54px] w-full rounded-full border-none bg-white px-6 pr-14 text-[20px] text-black outline-none placeholder:text-black/80"
              />
              <button
                type="button"
                className="absolute top-1/2 right-5 -translate-y-1/2"
              >
                <Image
                  src={searchIcon}
                  alt="search"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div className="mt-6 flex w-full max-w-[540px] overflow-hidden rounded-[24px] bg-white/20 shadow-md backdrop-blur-sm">
              <div className="flex flex-1 items-center gap-5 px-6 py-5">
                <div className="text-[30px] font-bold text-white">AI</div>

                <div>
                  <h3 className="text-[28px] font-medium leading-none text-white">
                    ИИ помощник
                  </h3>
                  <p className="mt-2 max-w-[300px] text-[16px] leading-[1.3] text-white">
                    Опишите симптомы, и ИИ подскажет, к какому специалисту
                    обратиться!
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="flex w-[72px] items-center justify-center bg-white/20 text-[42px] text-white"
              >
                →
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex items-center">
                <Image
                  src={doctor1}
                  alt="doctor 1"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px] rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={doctor2}
                  alt="doctor 2"
                  width={70}
                  height={70}
                  className="-ml-3 h-[70px] w-[70px] rounded-full border-2 border-white object-cover"
                />
                <Image
                  src={doctor3}
                  alt="doctor 3"
                  width={70}
                  height={70}
                  className="-ml-3 h-[70px] w-[70px] rounded-full border-2 border-white object-cover"
                />
              </div>

              <div className="leading-none">
                <h3 className="text-[38px] font-extrabold text-black sm:text-[48px]">
                  125k+
                </h3>
                <p className="text-[20px] text-black sm:text-[28px]">отзывов</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <Image
            src={heroCharacter}
            alt="hero character"
            width={560}
            height={560}
            priority
            className="h-auto w-full max-w-[540px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};