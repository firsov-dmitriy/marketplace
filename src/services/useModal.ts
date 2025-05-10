import { useState } from "react";

interface IUseModalParams {
  defaultState?: boolean;
  sideEffectOnClose?: () => void;
}
export const useModal = (params?: IUseModalParams) => {
  const { defaultState = false, sideEffectOnClose } = params || {};
  const [isOpen, setIsOpen] = useState(defaultState);

  const onClose = () => {
    sideEffectOnClose?.();
    setIsOpen(false);
  };

  const onOpen = () => setIsOpen(true);
  const onTrigger = () => setIsOpen((prev) => !prev);

  return { isOpen, onClose, onOpen, onTrigger };
};
