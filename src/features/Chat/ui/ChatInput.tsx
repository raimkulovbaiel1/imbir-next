"use client";

import { useRef, useState } from "react";
import chat from "@/shared/assets/icons/chat.svg";

type ChatInputProps = {
  onSend: (text: string) => void;
};

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const send = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "24px";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);

    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "24px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="p-4">
      <div className="flex items-end gap-2 rounded-2xl bg-[#CAE9FF] px-4 py-3">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          rows={1}
          placeholder="Напишите сообщение..."
          className="
            flex-1
            resize-none
            overflow-y-auto
            bg-transparent
            outline-none
            text-[15px]
            leading-6
            whitespace-pre-wrap
            break-words
            min-h-[24px]
            max-h-[140px]
          "
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />

        <button
          onClick={send}
          className="flex h-10 w-10 shrink-0 items-center justify-center"
        >
          <img src={chat.src} alt="Отправить" />
        </button>
      </div>
    </div>
  );
};