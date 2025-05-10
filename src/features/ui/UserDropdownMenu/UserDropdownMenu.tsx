import { Button, Popover } from "@/ui";

import { IUserDropdownMenuProps } from "./types.ts";
import { useAuth } from "@/components/Auth";
import { useNavigate } from "react-router";

export const UserDropdownMenu = (props: IUserDropdownMenuProps) => {
  const { openButton } = props;
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Popover openButton={openButton} className="min-w-40">
      <div>
        <div className="flex flex-col">
          <Button className="mt-4" onClick={() => navigate("/profile")}>
            Профиль
          </Button>
        </div>
        <div className="border-t-zinc-400 border-t mt-2 flex flex-col">
          <Button className="mt-2" onClick={logout} variant="secondary">
            Выйти
          </Button>
        </div>
      </div>
    </Popover>
  );
};
