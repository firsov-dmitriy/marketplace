import { Header } from "../../modules";
import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "@/ui";
import { LoginAuthDto, useAuthControllerLogin } from "../../gen";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../components/Auth";

export const SignIn = () => {
  const form = useForm<LoginAuthDto>();
  const navigate = useNavigate();
  const { mutateAsync } = useAuthControllerLogin();
  const { search } = useLocation();
  const { login } = useAuth();
  const backPath = new URLSearchParams(search).get("back") || "/";

  const onSubmit = useCallback(
    async (data: LoginAuthDto) => {
      try {
        await mutateAsync({
          data,
        });
        login();
        navigate(backPath, { replace: true });
      } catch (error) {
        console.warn(error);
      }
    },
    [backPath, login, mutateAsync, navigate],
  );
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Header />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="90vh"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            width={300}
            p={4}
            borderRadius={3}
            sx={{
              border: "1px solid lightgray",
            }}
          >
            <FormField name="email" label="Email" />
            <FormField name="password" label="Пароль" />
            <Button variant="contained" type="submit">
              Войти
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
