import { Header } from "@/modules";
import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useAuthControllerCreate } from "@/gen";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { FormField } from "@/ui";

type SignUpForm = {
  email: string;
  password: string;
};
export const SignUp = () => {
  const form = useForm<SignUpForm>();
  const navigate = useNavigate();
  const { mutateAsync } = useAuthControllerCreate();

  const onSubmit = useCallback(
    async (data: SignUpForm) => {
      try {
        await mutateAsync({
          data: {
            ...data,
          },
        });

        navigate("/sign-in");
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
            <FormField name="email" label="Email" />
            <FormField name="password" label="Пароль" />
            <Button variant="contained" type="submit">
              Зарегистрироватся
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
