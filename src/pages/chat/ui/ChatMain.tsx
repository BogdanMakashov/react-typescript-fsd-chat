import React, { HTMLAttributes } from 'react';

type ChatMainProps = HTMLAttributes<HTMLDivElement>;

export const ChatMain: React.FC<ChatMainProps> = ({ children }) => {
  return <div>{children}</div>;
};
