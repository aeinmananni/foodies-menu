/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Controller,
  Control,
  ControllerProps,
  FieldValues,
} from "react-hook-form";
import Input from "../input";

type ControllerInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: keyof T;
  label?: string;
  errors?: string;
  className?: string;
} & Omit<ControllerProps<T>, "render" | "control" | "name">;

export default function ControllerInput<T extends FieldValues>({
  control,
  name,
  label,
  errors,
  className,
  ...rest
}: ControllerInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name as any}
      {...rest}
      render={({ field }) => (
        <Input {...field} label={label} errors={errors} className={className} />
      )}
    />
  );
}
