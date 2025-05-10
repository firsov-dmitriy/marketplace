import { Button as HeadlessButton } from "@headlessui/react";
import { IButtonProps } from "@/ui/Button/types.ts";
import cn from "classnames";

export const Button = (props: IButtonProps) => {
  const { children, variant = "primary", className, ...restProps } = props;

  if (variant === "unstyled") {
    return (
      <HeadlessButton className={cn(className)} {...restProps}>
        {children}
      </HeadlessButton>
    );
  }
  if (variant === "primary") {
    return (
      <HeadlessButton
        className={cn(
          "p-2 rounded bg-neutral-200 hover:bg-neutral-200/70 hover:cursor-pointer",
          className,
        )}
        {...restProps}
      >
        {children}
      </HeadlessButton>
    );
  }

  if (variant === "secondary") {
    return (
      <HeadlessButton
        className={cn(
          "p-2 rounded border-2 border-neutral-200 hover:bg-neutral-200 transition-colors hover:cursor-pointer",
          className,
        )}
        {...restProps}
      >
        {children}
      </HeadlessButton>
    );
  }

  return (
    <HeadlessButton
      className={cn("p-2 rounded bg-neutral-200", className)}
      {...restProps}
    >
      {children}
    </HeadlessButton>
  );
};
