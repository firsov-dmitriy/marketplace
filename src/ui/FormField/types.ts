import { Field } from "@headlessui/react";
import { ComponentProps } from "react";

export interface IInputProps extends ComponentProps<typeof Field> {
  name: string;
  label?: string;
  placeholder?: string;
}
