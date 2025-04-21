import { forwardRef, TextareaHTMLAttributes } from "react";

type TextareaProps = {
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-yellow-800 font-semibold">{label}</label>
        <textarea ref={ref} {...props} />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
