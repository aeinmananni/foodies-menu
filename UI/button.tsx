import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
