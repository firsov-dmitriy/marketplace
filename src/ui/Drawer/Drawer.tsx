import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "@/ui";
import { IoMdClose } from "react-icons/io";
import { IDrawerProps } from "@/ui/Drawer/types.ts";

export function Drawer(props: IDrawerProps) {
  const {
    open,
    onClose,
    children,
    title,
    widthClass = "max-w-md",
    side = "right",
  } = props;
  const isLeft = side === "left";
  const sideClass = isLeft ? "left-0" : "right-0";
  const enterFrom = isLeft ? "-translate-x-full" : "translate-x-full";
  const leaveTo = isLeft ? "-translate-x-full" : "translate-x-full";

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className={`fixed inset-y-0 ${sideClass} flex max-w-full`}>
          <TransitionChild
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom={enterFrom}
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo={leaveTo}
          >
            <DialogPanel
              className={`w-screen ${widthClass} bg-white shadow-xl p-6`}
            >
              <div className="flex flex-row items-center justify-between mb-4">
                {title && (
                  <DialogTitle className="text-lg font-medium text-gray-900">
                    {title}
                  </DialogTitle>
                )}
                <Button
                  variant="unstyled"
                  className="hover:cursor-pointer"
                  onClick={onClose}
                >
                  <IoMdClose className="h-6 w-6" />
                </Button>
              </div>
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
