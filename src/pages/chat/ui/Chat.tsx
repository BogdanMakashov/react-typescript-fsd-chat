import React from 'react';

import { ChatList, MessageBox } from '@/widgets/chat';

import { ChatMain } from './ChatMain';
import { Sidebar } from './Sidebar';

export const Chat: React.FC = () => {
  return (
    <div>
      <Sidebar>
        <h2>Чаты</h2>

        <div className="user"></div>
        <button className="add-chat"></button>

        <ChatList />
      </Sidebar>

      <ChatMain>
        <div className="chat-header"></div>

        <div className="chat-window"></div>

        <MessageBox />
      </ChatMain>
    </div>
  );
};
