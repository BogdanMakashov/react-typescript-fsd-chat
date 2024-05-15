import React, { HTMLAttributes } from 'react';

type SidebarProps = HTMLAttributes<HTMLDivElement>;

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <div>{children}</div>;
};
