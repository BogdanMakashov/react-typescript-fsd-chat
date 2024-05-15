import { TextareaHTMLAttributes, forwardRef } from 'react';

type UiTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const UiTextArea = forwardRef<HTMLTextAreaElement, UiTextAreaProps>((props, ref) => (
  <textarea {...props} ref={ref}></textarea>
));
