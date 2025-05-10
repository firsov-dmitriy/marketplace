import {
  PopoverButton,
  PopoverPanel,
  Popover as HeadlessPopover,
} from "@headlessui/react";

import { IPopoverProps } from "@/ui/Popover/types.ts";
import cn from "classnames";

export function Popover(props: IPopoverProps) {
  const { openButton, children, className } = props;
  return (
    <HeadlessPopover className={cn("relative")}>
      <PopoverButton className="flex items-center gap-2">
        {openButton}
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className={cn(
          "flex flex-col p-4 bg-white shadow-lg rounded-lg",
          className,
        )}
      >
        {children}
      </PopoverPanel>
    </HeadlessPopover>
  );
}
