import React from 'react';

import { ChatItem } from '@/entities/chat';

export const ChatList: React.FC = () => {
  const chatList = [
    {
      id: '1',
    },
  ];

  return (
    <>
      {chatList.map((chat) => (
        <ChatItem key={chat.id} />
      ))}
    </>
  );
};
