import Link from "next/link";
import Image from "next/image";
import logo from "@/shared/assets/logo/header/logo.svg";
import location from "@/shared/assets/logo/header/location.svg";
import chat from "@/shared/assets/logo/header/chat.svg";
import userIcon from "@/shared/assets/logo/header/Vector.svg";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Врачи", href: "/Doctors" },
  { label: "Клиники", href: "/clinic" },
  { label: "Процедуры", href: "/procedures" },
];

export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#062b5b] via-[#0a5e8f] to-[#18c4e8] shadow-md">
      <div className="mx-auto flex h-[82px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Image src={logo} alt="Logo" width={36} height={36} />
        </Link>

        <nav className="hidden items-center gap-20 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[16 px] font-semibold text-white transition hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-8">
          <button type="button">
            <Image src={location} alt="location" width={24} height={24} />
          </button>

          <button type="button">
            <Image src={chat} alt="chat" width={24} height={24} />
          </button>

          <button type="button">
            <Image src={userIcon} alt="user" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};