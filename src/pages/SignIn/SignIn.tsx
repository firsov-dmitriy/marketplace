import { Header } from "../../modules";
import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormTextField } from "../../ui";
import { LoginAuthDto, useAuthControllerLogin } from "../../gen";
import { useCallback } from "react";
import { useNavigate } from "react-router";

export const SignIn = () => {
  const form = useForm<LoginAuthDto>();
  const navigate = useNavigate();
  const { mutateAsync } = useAuthControllerLogin();

  const onSubmit = useCallback(
    async (data: LoginAuthDto) => {
      try {
        const response = await mutateAsync({
          data: {
            ...data,
          },
        });
        console.log(response);
        localStorage?.setItem("accessToken", response.data.accessToken);
        // localStorage?.setItem("refreshToken", response.data.refreshToken);
        navigate("/create-post");
      } catch (error) {
        console.warn(error);
      }
    },
    [mutateAsync],
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
            <FormTextField name="email" label="Email" />
            <FormTextField name="password" label="Пароль" />
            <Button variant="contained" type="submit">
              Войти
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
