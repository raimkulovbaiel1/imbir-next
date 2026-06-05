import Button from "@/shared/ui/AutButton";
import Input from "@/shared/ui/Input";
import facebook from "@/shared/assets/icons/fb.svg"
import google from "@/shared/assets/icons/google.svg"
import apple from "@/shared/assets/icons/apple.svg"

export default function RegisterForm() {
  return (
    <div className="space-y-4">

      <button className="w-full h-[52px] border text-[16px] cursor-pointer rounded-full flex items-center justify-center gap-3">
        <img
          src={facebook.src}
          alt="logo"
          className="w-5 h-5"
        />
        <span>Sign up with Facebook</span>
      </button>

      <button className="w-full h-[52px] border text-[16px] cursor-pointer rounded-full flex items-center justify-center gap-3">
        <img
          src={google.src}
          alt="logo"
          className="w-5 h-5"
        />
        <span>Sign up with Google</span>
      </button>

      <button className="w-full h-[52px] border text-[16px] cursor-pointer rounded-full flex items-center justify-center gap-3">
        <img
          src={apple.src}
          alt="logo"
          className="w-5 h-5"
        />
        <span>Sign up with Apple</span>
      </button>

      <div className="flex items-center gap-4 py-1">
        <div className="flex-1 h-[2.5px] bg-gray-800" />
        <span>OR</span>
        <div className="flex-1 h-[2.5px] bg-gray-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input placeholder="Фамилия" />
        <Input placeholder="Имя" />
      </div>

      <Input placeholder="Электронная почта" />

      <Input
        type="password"
        placeholder="Пароль"
      />

      <Button>
        Зарегистрироваться
      </Button>
    </div>
  );
}