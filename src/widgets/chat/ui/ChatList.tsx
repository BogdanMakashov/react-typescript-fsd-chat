import React, { useEffect } from 'react';

import { ChatItem } from '@/entities/chat';
import { useChatsState } from '@/entities/chat/model/useChatsState';

export const ChatList: React.FC = () => {
  const [chats, getUserChats] = useChatsState((state) => [state.chats, state.getUserChats]);

  useEffect(() => {
    getUserChats('123');
  }, []);

  return <>{chats && chats.map((chat) => <ChatItem key={chat.chatId} />)}</>;
};
