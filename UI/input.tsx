import { forwardRef, InputHTMLAttributes } from "react";

type InputProp = {
  label?: string;
  errors?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProp>(
  ({ errors, label, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1 relative">
        <label
          className={`font-semibold ${
            errors ? "!text-red-500" : "text-yellow-800"
          }`}
        >
          {label}
        </label>
        <input ref={ref} {...props} />
        {errors && (
          <div className="flex justify-end absolute -bottom-6 right-0">
            <small className={`text-red-500 font-semibold`}>{errors}</small>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
