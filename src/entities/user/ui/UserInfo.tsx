import Image from "next/image";
import avatar from "@/shared/assets/img/Profile/фото.png";
import { Button } from "@/shared/ui/ProfileButton";

export default function UserInfo() {
  return (
    <div className="
      flex flex-col md:flex-row
      items-center md:items-center
      gap-6 md:gap-20
      text-center md:text-left
    ">

      <Image
        src={avatar}
        alt="user"
        width={190}
        height={190}
        className="
          rounded-[16px]
          w-[390px] h-[390px]
          md:w-[190px] md:h-[190px]
          object-cover
        "
      />

      <div className="flex-1 w-full">

        <h2 className="
          text-[24px] md:text-[30px]
          font-bold
          text-[#0C2647]
        ">
          Сагынбекова Айгерим
        </h2>

        <p className="
          text-[#0C2647]
          font-bold
          text-[16px] md:text-[22px]
          break-all
        ">
          sagynbekova@gmail.com
        </p>

        <div className="
          flex flex-col sm:flex-row
          gap-3
          mt-4
          w-full sm:w-auto
        ">

          <Button
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Настройки профиля
          </Button>

          <Button
            className="
              bg-red-500 text-white
              w-full sm:w-auto
            "
          >
            Выйти
          </Button>

        </div>

      </div>
    </div>
  );
}