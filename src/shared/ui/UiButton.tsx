import React, { ButtonHTMLAttributes } from 'react';

type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton: React.FC<UiButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="h-10 flex-grow rounded-full bg-green-600 px-3 text-white shadow-lg shadow-green-600/50 transition duration-300 ease-in-out hover:bg-green-700"
    >
      {children}
    </button>
  );
};
