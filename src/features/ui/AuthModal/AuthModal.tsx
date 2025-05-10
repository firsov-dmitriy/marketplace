import { FormProvider, useForm } from "react-hook-form";
import { Button, FormField } from "@/ui";
import { MdErrorOutline } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { Modal } from "@/ui/Modal";

import { IAuthModalProps, IAuthModalRef } from "./types.ts";
import { forwardRef, useCallback, useImperativeHandle } from "react";
import {
  LoginAuthDto,
  useAuthControllerCreate,
  useAuthControllerLogin,
} from "@/gen";
import { userSignInValidation } from "@/features/model/userSignInValidation";
import { useModal } from "@/services/useModal.ts";
import { useAuth } from "@/components/Auth";

export const AuthModal = forwardRef<IAuthModalRef, IAuthModalProps>(
  (_, ref) => {
    const formMethods = useForm<LoginAuthDto>({
      defaultValues: {
        email: "",
        password: "",
      },
      mode: "onSubmit",
      resolver: userSignInValidation(),
    });

    const { login } = useAuth();

    const {
      mutateAsync: createUser,
      reset: resetCreate,
      error: createError,
      data: user,
    } = useAuthControllerCreate();

    const {
      mutateAsync: loginUser,
      reset: resetLogin,
      error: loginError,
    } = useAuthControllerLogin();

    const { isOpen, onOpen, onClose } = useModal({
      sideEffectOnClose: () => {
        resetCreate();
        resetLogin();
        return formMethods.reset();
      },
    });
    useImperativeHandle(
      ref,
      () => ({
        onCloseAuthModal: onClose,
        isOpenAuthModal: isOpen,
        onOpenAuthModal: onOpen,
      }),
      [isOpen, onClose, onOpen],
    );

    const onLogin = useCallback(
      async (values: LoginAuthDto) => {
        try {
          await loginUser({ data: values });
          onClose();
          login();
        } catch (e) {
          console.warn(e);
        }
      },
      [login, loginUser, onClose],
    );

    const onCreateUser = useCallback(
      async (values: LoginAuthDto) => {
        try {
          await createUser({ data: values });
          onClose();
        } catch (e) {
          console.warn(e);
        }
      },
      [createUser, onClose],
    );
    const error = loginError || createError;
    return (
      <Modal open={isOpen} onClose={onClose} title="Авторизация">
        <FormProvider {...formMethods}>
          <form>
            <div>
              <FormField
                autoComplete="username"
                name="email"
                placeholder="E-mail"
              />
              <FormField
                autoComplete="current-password"
                name="password"
                placeholder="Пароль"
                isPassword
              />
              {error && (
                <div className="bg-red-100 p-2 rounded mt-2 flex gap-2">
                  <MdErrorOutline className="w-6 h-6 text-red-600" />
                  <p className="text-red-400">{error.message}</p>
                </div>
              )}
              {user && (
                <div className="bg-green-100 p-2 rounded mt-2 flex gap-2">
                  <FcOk className="w-6 h-6 text-green-600" />
                  <p className="text-green-600">{user.data.email}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col mt-4 gap-4">
              <Button type="submit" onClick={formMethods.handleSubmit(onLogin)}>
                Войти
              </Button>
              <Button
                onClick={formMethods.handleSubmit(onCreateUser)}
                variant="secondary"
              >
                Зарегистрироваться
              </Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    );
  },
);
