import React, { InputHTMLAttributes, forwardRef } from 'react';

type UiInputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
};

export const UiInput = forwardRef<HTMLInputElement, UiInputProps>(({ labelText, ...props }, ref) => {
  return (
    <>
      {labelText && (
        <label htmlFor={props.id} className="mb-2 block text-white">
          {labelText}
        </label>
      )}

      <input
        {...props}
        ref={ref}
        className="h-10 w-full rounded-lg border border-transparent bg-gray-900 px-2 text-white transition duration-300 ease-in-out hover:border-gray-800"
      />
    </>
  );
});
