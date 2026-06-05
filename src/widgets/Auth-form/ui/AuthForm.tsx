"use client";
import { useState } from "react";
import RegisterForm from "@/features/auth/ui/RegisterForm";
import LoginForm from "@/features/auth/ui/LoginForm";

export default function AuthForm() {
  const [tab, setTab] = useState<"register" | "login">("register");

  return (
    <div
      className="
        w-full
        max-w-[520px]
        bg-white
        rounded-[24px]
        p-5
        md:p-8
        shadow-sm
      "
    >
      <div className="flex overflow-hidden  text-[16px] rounded-[14px] mb-8">
        <button
          onClick={() => setTab("register")}
          className={`flex-1 h-[52px] cursor-pointer font-semibold transition
          ${tab === "register"
              ? "bg-gradient-to-r from-[#0C2647] to-[#2AA7B8] text-white"
              : "bg-[#CAE9FF] text-[#0C2647]"
            }`}
        >
          Зарегистрироваться
        </button>

        <button
          onClick={() => setTab("login")}
          className={`flex-1 h-[52px] cursor-pointer font-semibold transition
          ${tab === "login"
              ? "bg-gradient-to-r from-[#0C2647] to-[#2AA7B8] text-white"
              : "bg-[#CAE9FF] text-[#0C2647]"
            }`}
        >
          Войти
        </button>
      </div>

      {tab === "register" ? <RegisterForm /> : <LoginForm />}
    </div>
  );
}