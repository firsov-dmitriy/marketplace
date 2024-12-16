import { ComponentProps } from "react";
import { TextField } from "@mui/material";

export interface IFormTextFieldProps extends ComponentProps<typeof TextField> {
  name: string;
}
