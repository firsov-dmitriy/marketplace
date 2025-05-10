import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginAuthDto } from "@/gen";

export const userSignInValidation = () => {
  const schema = object<LoginAuthDto>({
    email: string()
      .required("Обязательно поле")
      .email({ message: "Ввидите е-майл" }),
    password: string()
      .required("Обязательно поле")
      .min(8, "Длинна пароля не должа быть меньше 8"),
  });

  return yupResolver(schema);
};
