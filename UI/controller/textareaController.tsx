/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Controller,
  Control,
  ControllerProps,
  FieldValues,
} from "react-hook-form";

import Textarea from "../textarea";

type ControllerTextareaProps<T extends FieldValues> = {
  control: Control<T>;
  name: keyof T;
  label?: string;
  rows?: number;
  className?: string;
} & Omit<ControllerProps<T>, "render" | "control" | "name">;

export default function ControllerTextarea<T extends FieldValues>({
  control,
  name,
  label,
  rows,
  className,
  ...rest
}: ControllerTextareaProps<T>) {
  return (
    <Controller
      control={control}
      name={name as any}
      {...rest}
      render={({ field }) => (
        <Textarea {...field} label={label} className={className} rows={rows} />
      )}
    />
  );
}
