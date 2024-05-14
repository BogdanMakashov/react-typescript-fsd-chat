import React, { InputHTMLAttributes, forwardRef } from 'react';

type UiInputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
};

export const UiInput = forwardRef<HTMLInputElement, UiInputProps>(({ labelText, ...props }, ref) => {
  return (
    <>
      {labelText && <label htmlFor={props.id}>{labelText}</label>}

      <input {...props} ref={ref} />
    </>
  );
});
