import { Button } from "@/ui";
import { CiUser } from "react-icons/ci";
import { useAuth } from "@/components/Auth";

import { useRef } from "react";

import { UserDropdownMenu } from "@/features/ui/UserDropdownMenu";
import { AuthModal, IAuthModalRef } from "@/features/ui/AuthModal";

export const UserAction = () => {
  const authModalRef = useRef<IAuthModalRef>(null);

  const { profile } = useAuth();

  const onOpen = () => {
    authModalRef.current?.onOpenAuthModal();
  };
  const openButton = (
    <Button
      variant="unstyled"
      className="hover:cursor-pointer"
      onClick={onOpen}
    >
      <CiUser className="h-6 w-6" />
    </Button>
  );

  return (
    <>
      {!profile && openButton}

      <UserDropdownMenu openButton={openButton} />

      {!profile && <AuthModal ref={authModalRef} />}
    </>
  );
};
