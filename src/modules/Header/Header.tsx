import { memo } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router";

export const Header = memo(() => {
  const navigate = useNavigate();
  const nav = [
    { name: "Посты", url: "/posts" },
    { name: "Товары", url: "/products" },
  ];
  const isUser = localStorage.getItem("accessToken");
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
            {nav.map((item) => {
              return <Link to={item.url}>{item.name}</Link>;
            })}
          </Box>
          {isUser ? (
            <Button color="inherit">Пользователь</Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/sign-in")}>
              Войти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
