import { memo, useState, MouseEvent } from "react";
import { Popover } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "@/components/Auth";
import { navLinks } from "./constants.ts";
import { Button, Drawer } from "@/ui";
import { HeaderActions } from "@/widgets/ui/HeaderActions";

export const Header = memo(() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticate, logout, profile } = useAuth();
  const onOpenProfileMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  const onLogout = () => {
    logout();
    setAnchorEl(null);
    navigate("/");
  };
  return (
    <div>
      <div className="bg-gray-100">
        <div className="grid grid-cols-3 items-center h-16">
          <div className="flex gap-4 items-center ml-4">
            <Button variant="unstyled" onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </Button>
            <Drawer
              side="left"
              open={isOpen}
              onClose={() => setIsOpen(false)}
              title="Заголовок"
            >
              <p className="text-sm text-gray-600">Контент drawer'а.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Закрыть
              </button>
            </Drawer>
            <h2 className="text-2xl justify-self-start">Фирсовы</h2>
          </div>

          <div className="flex flex-row gap-4 justify-self-center px-6 py-2 rounded-xl bg-gray-200/70">
            {navLinks.map((item) => {
              const isActive = item.url === pathname;
              return (
                <Link
                  key={item.url}
                  to={item.url}
                  data-active={isActive}
                  className="hover:text-amber-900 data-[active=true]:text-amber-700"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <HeaderActions />

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="flex flex-col p-2 items-start gap-2">
              <Button
                onClick={() => {
                  navigate("/profile");
                }}
              >
                В профиль
              </Button>
              <Button onClick={onLogout}>Выйти</Button>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
});
