"use client";

import { cn } from "@/shared/ui/Avatar";

type MessageProps = {
  isUser: boolean;
  text: string;
  sender?: string;
  time?: string;
  isAI?: boolean;
};

export const ChatMessage = ({ isUser, text, sender, time, isAI }: MessageProps) => {
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[78%] min-w-0 break-words rounded-2xl px-4 py-3 text-[15px] leading-relaxed shadow-sm",
          isUser
            ? "bg-[#FF9500] text-white rounded-tr-none"
            : isAI
              ? "bg-[#0C2647] text-white rounded-tl-none"
              : "bg-white border border-gray-200 text-[#092C56] rounded-tl-none"
        )}
      >
        {!isUser && sender && (
          <p className="text-xs opacity-75 mb-1 font-medium">{sender}</p>
        )}
        <p className="whitespace-pre-wrap break-all">
          {text}
        </p>
        {time && (
          <span className="block text-right text-[11px] mt-1 opacity-70">
            {time}
          </span>
        )}
      </div>
    </div>
  );
};