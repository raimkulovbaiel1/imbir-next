"use client";

import { useState } from "react";
import { ChatSidebar } from "@/features/Chat/ui/ChatSidebar";
import { ChatWindow } from "@/features/Chat/ui/ChatWindow";

export default function ChatPage() {
  const [activeChatId, setActiveChatId] = useState(1);

 return (
  <div className="min-h-screen bg-[#F5F7FA] px-1 py-0 lg:px-10">
    <div className="mx-auto flex h-[calc(100vh-48px)] max-w-[1190px] overflow-hidden rounded-[28px] bg-white shadow-lg">
      <ChatSidebar
        activeChatId={activeChatId}
        onSelect={setActiveChatId}
      />

      <ChatWindow chatId={activeChatId} />
    </div>
  </div>
);
}
