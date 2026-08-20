export type ChatType = "ai" | "doctor";

export type Chat = {
  id: number;
  name: string;
  subtitle: string;
  avatar: string;
  type: ChatType;
  unread?: number;
};

export type Message = {
  id: number;
  text: string;
  isUser: boolean;
  sender?: string;
  time: string;
  isAI?: boolean;
};