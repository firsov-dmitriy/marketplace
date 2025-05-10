import { ReactNode } from "react";

export interface IDrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  widthClass?: string;
  side?: "left" | "right";
}
