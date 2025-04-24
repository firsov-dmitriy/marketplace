import { memo, useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Popover,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@/components/Auth";
import { navLinks } from "./constants.ts";

export const Header = memo(() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box className="flex flex-row gap-4 mr-[50%]">
            {navLinks.map((item) => {
              return (
                <Link key={item.url} to={item.url}>
                  {item.name}
                </Link>
              );
            })}
          </Box>
          {isAuthenticate ? (
            <Button
              aria-describedby={id}
              onClick={onOpenProfileMenu}
              color="inherit"
            >
              {profile?.email}
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/sign-in")}>
              Войти
            </Button>
          )}
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
        </Toolbar>
      </AppBar>
    </Box>
  );
});
