import { useController } from "react-hook-form";
import { TextField } from "@mui/material";
import { IFormTextFieldProps } from "./types.ts";

export const FormTextField = (props: IFormTextFieldProps) => {
  const { name, ...textFieldProps } = props;
  const { field } = useController({ name });
  return <TextField {...textFieldProps} {...field} />;
};
