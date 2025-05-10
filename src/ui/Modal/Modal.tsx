import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { IModalProps } from "@/ui/Modal/types.ts";

export function Modal(props: IModalProps) {
  const { open, onClose, title, children, maxWidth = "max-w-md" } = props;

  return (
    <Dialog as="div" className="relative z-50" onClose={onClose} open={open}>
      {/* Overlay Background */}
      <TransitionChild
        as={Fragment}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      </TransitionChild>

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPanel
            className={`w-full ${maxWidth} transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all`}
          >
            {title && (
              <DialogTitle className="text-lg font-medium text-gray-900 mb-4">
                {title}
              </DialogTitle>
            )}
            {children}
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}
