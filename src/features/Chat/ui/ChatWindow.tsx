"use client";

import { useState, useEffect, useRef } from "react";
import { ChatMessage } from "@/entities/Chat/ui/ChatMessage";
import { ChatInput } from "./ChatInput";

type ChatWindowProps = {
  chatId: number;
};

const mockChats = {
  1: { name: "ИИ ассистент", isAI: true, color: "blue" },
  2: { name: "MedCenter", isAI: false, color: "doctor" },
  3: { name: "Сагынбекова Айнагул", isAI: false, color: "doctor" },
};

export const ChatWindow = ({ chatId }: ChatWindowProps) => {
  const [messages, setMessages] = useState<any[]>([]); 
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentChat = mockChats[chatId as keyof typeof mockChats];

  // Загрузка мок-данных
  useEffect(() => {
    if (chatId === 1) {
      setMessages([
        { id: 1, text: "Здравствуйте! Я медицинский ИИ-ассистент.", isUser: false, isAI: true, time: "12:04" },
        { id: 2, text: "Здравствуйте.", isUser: true, time: "12:21" },
        { id: 3, text: "Уже несколько дней болит голова и иногда кружится.", isUser: true, time: "12:21" },
      ]);
    } else {
      setMessages([
        { id: 1, text: "Здравствуйте! Чем могу помочь?", isUser: false, sender: currentChat.name, time: "10:15" },
      ]);
    }
  }, [chatId]); 
   
  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  const handleSendMessage = (text: string) => {
    const newMsg = {
      id: Date.now(),
      text,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);

    // Имитация ответа
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: currentChat.isAI
            ? "Спасибо за информацию. Рекомендую обратиться к специалисту."
            : "Я получила ваше сообщение. Записала.",
          isUser: false,
          sender: currentChat.name,
          isAI: currentChat.isAI,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 800);
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-3 bg-white">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-2xl">
          {currentChat?.isAI ? "🤖" : "👩🏻‍⚕️"}
        </div>
        <div>
          <p className="font-semibold text-lg">{currentChat?.name}</p>
          <p className="text-xs text-emerald-600">Онлайн</p>
        </div>
      </div>

      {/* Messages Area */}
     <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F8FAFC] p-4">
  <div className="flex flex-col gap-4">
    {messages.map((msg) => (
      <ChatMessage
        key={msg.id}
        isUser={msg.isUser}
        text={msg.text}
        sender={msg.sender}
        time={msg.time}
        isAI={msg.isAI}
      />
    ))}

    <div ref={messagesEndRef} />
  </div>
</div>

      <ChatInput onSend={handleSendMessage} />
    </div>
  );
};