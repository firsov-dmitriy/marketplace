import { Field, Label, Description } from "@headlessui/react";
import { useController, useFormContext } from "react-hook-form";
import clsx from "clsx";
import { ComponentProps, useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { Button } from "@/ui";
import { FaEye } from "react-icons/fa";

interface InputFieldProps extends ComponentProps<"input"> {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  isPassword?: boolean;
}

export const FormField = (props: InputFieldProps) => {
  const {
    name,
    label,
    description,
    disabled = false,
    isPassword = false,
    className,
    ...restProps
  } = props;

  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : restProps.type;

  return (
    <Field disabled={disabled}>
      {label && (
        <Label className="text-sm font-medium text-gray-700 data-disabled:opacity-50">
          {label}
        </Label>
      )}

      {description && !error && (
        <Description className="mt-1 text-sm text-gray-500 data-disabled:opacity-50">
          {description}
        </Description>
      )}

      <div className="relative mt-2">
        <input
          {...restProps}
          {...field}
          type={inputType}
          disabled={disabled}
          data-disabled={disabled || undefined}
          className={clsx(
            "block w-full rounded-md border px-3 py-2 pr-10 text-sm shadow-sm focus:ring-1",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
            "data-disabled:bg-gray-100 data-disabled:cursor-not-allowed",
            className,
          )}
        />

        {isPassword && (
          <Button
            variant="unstyled"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? (
              <FaEyeSlash className="w-6 h-6" />
            ) : (
              <FaEye className="w-6 h-6" />
            )}
          </Button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-600">
          {error.message?.toString() || "Ошибка заполнения"}
        </p>
      )}
    </Field>
  );
};
