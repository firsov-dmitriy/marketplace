import { FormProvider, useForm } from "react-hook-form";
import { Header } from "../../modules";
import { Box, Button } from "@mui/material";
import { FormField } from "../../ui";
import { CreatePostDto, usePostsControllerCreate } from "../../gen";
import { useCallback } from "react";

export const CreatePost = () => {
  const form = useForm<CreatePostDto>();

  const { mutateAsync } = usePostsControllerCreate();

  const onSubmit = useCallback(
    async (data: CreatePostDto) => {
      try {
        const response = await mutateAsync({
          data: {
            ...data,
            published: false,
          },
        });
        console.log(response);
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
            <FormField name="title" label="Название" />
            <FormField name="text" label="Текс" />
            <FormField name="imageUrl" label="Ссылка на фото" />

            <Button variant="contained" type="submit">
              Создать пост
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
