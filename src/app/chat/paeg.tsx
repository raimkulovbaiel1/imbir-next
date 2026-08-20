"use client";

import { useState } from "react";
import { ChatSidebar } from "@/features/Chat/ui/ChatSidebar";
import { ChatWindow } from "@/features/Chat/ui/ChatWindow";

export default function ChatPage() {
  const [activeChatId, setActiveChatId] = useState(1);

  return (
    <div className="flex max-w-[1500px] bg-white overflow-hidden">
      <ChatSidebar activeChatId={activeChatId} onSelect={setActiveChatId} />
      <ChatWindow chatId={activeChatId} />
    </div>
  );
}