import { Button } from "@headlessui/react";
import { ComponentProps } from "react";

export interface IButtonProps extends ComponentProps<typeof Button> {
  variant?: "primary" | "secondary" | "unstyled";
}
