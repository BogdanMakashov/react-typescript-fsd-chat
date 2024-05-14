import React, { ButtonHTMLAttributes } from 'react';

type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton: React.FC<UiButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-green-800 text-white px-3 h-8 rounded-full">
      {children}
    </button>
  );
};
