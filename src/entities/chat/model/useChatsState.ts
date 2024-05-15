import { create } from 'zustand';

export type Chat = {
  chatId: string;
  receiverId: string;
  lastMessage: string;
  updatedAt: Date;
  isSeen: boolean;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatarUrl: string;
    lastSeen: Date;
  };
};

type UseChatsState = {
  chats: Chat[] | null;
  getUserChats: (userId: string) => void;
};

export const useChatsState = create<UseChatsState>((set, get) => ({
  chats: null,
  getUserChats: (userId: string) => {
    console.log('👻 ------------------------------------------------------👻');
    console.log('👻 ~ file: useChats.ts:16 ~ useChats ~ userId;', userId);
    console.log('👻 ------------------------------------------------------👻');
  },
}));
