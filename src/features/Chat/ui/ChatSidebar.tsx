"use client";

import { Chat } from "../model/types";

const chats: Chat[] = [
  {
    id: 1,
    name: "ИИ ассистент",
    subtitle: "Медицинский помощник",
    avatar: "🤖",
    type: "ai",
  },
  {
    id: 2,
    name: "MedCenter",
    subtitle: "Наркология",
    avatar: "🏥",
    type: "doctor",
  },
  {
    id: 3,
    name: "Сагынбекова Айнагул",
    subtitle: "Косметолог",
    avatar: "👩🏻‍⚕️",
    type: "doctor",
  },
];

type ChatSidebarProps = {
  activeChatId: number;
  onSelect: (id: number) => void;
};

export const ChatSidebar = ({ activeChatId, onSelect }: ChatSidebarProps) => {
  return (
    <div className="flex h-full w-full flex-col border-r border-gray-200 bg-[linear-gradient(180deg,#0C2647_0%,#123A63_30%,#1A6F96_70%,#219EBC_100%)] text-white lg:w-80">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Чаты</h1>
      </div>

      <div className="p-3">
        <input
          type="text"
          placeholder="Поиск чатов..."
          className="w-full bg-[#1E2937] rounded-xl px-4 py-2.5 text-sm focus:outline-none"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={`flex items-center gap-3 px-4 py-3 hover:bg-[#1E2937] cursor-pointer transition-all ${activeChatId === chat.id ? "bg-gradient-to-r from-orange-500 to-amber-500" : ""
              }`}
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
              {chat.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{chat.name}</p>
              <p className="text-xs text-gray-400 truncate">{chat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};