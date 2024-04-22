"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getCookie, removeCookie, setCookie } from "@/helpers/cookie";
import { AUTH_LOGIN, LOGGED_USER } from "@/gql/auth/auth.query";
import {
  CHANGE_PASSWORD,
  CREATE_USER,
  UPDATE_USER,
} from "../gql/auth/auth.mutation";
import { useLazyQuery, useMutation } from "@apollo/client";

import { useEffect, useState } from "react";
import { TokenResponse, User } from "@/types/user.type";
import { signIn, signOut } from "next-auth/react";

export type UserResponse = TokenResponse & {
  user: Omit<User, "password">;
};

export type CreateUserInput = Omit<User, "_id" | "role" | "username">;

export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [authLoginFn, authLoginRes] = useLazyQuery(AUTH_LOGIN);
  const [changePasswordFn, changePasswordRes] = useMutation(CHANGE_PASSWORD);
  const [createUserFn, createUserRes] = useMutation(CREATE_USER);
  const [getLoggedUserFn, getLoggedUserRes] = useLazyQuery(LOGGED_USER);

  const [updateUserFn, updateUserRes] = useMutation(UPDATE_USER);

  const getAuthData = () => {
    getLoggedUserFn({});
  };

  const updateUser = async (data: User, file: File | null) => {
    console.log("update server");
    updateUserFn({
      variables: {
        data: { ...data },
        file,
      },
      onCompleted() {
        toast.success(`Datos actualizados correctamente`, {
          position: "bottom-right",
        });
      },
    });
  };
  const changePassword = async (
    oldPassword: string,
    newPassword: string,
    repeatPassword: string,
    onSuccess?: (data: any) => void
  ) => {
    if (newPassword !== repeatPassword) {
      toast.error("Contaseña no coincide", {
        position: "bottom-right",
      });
    }
    await changePasswordFn({
      variables: {
        oldPassword,
        newPassword,
        repeatPassword,
      },
      onCompleted(data: any) {
        console.log(data);
        if (data) {
          toast.success("Contraseña cambiada!", {
            position: "bottom-right",
          });
          onSuccess && onSuccess(data?.changePassword);
        }
      },
      onError(error) {
        const isNotAuthorized =
          error.message.includes("Unauthorized") &&
          "Contraseña actual incorrecta";
        toast.error(
          isNotAuthorized || error.message || "Error al cambiar contraseña",
          {
            position: "bottom-right",
          }
        );
      },
    });
  };

  const userLogin = async (
    email: string,
    password: string,
    redirectTo?: string
  ) => {
    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
    console.log("hook 79", responseNextAuth);
    console.log("use login 70", responseNextAuth);
    // authLoginFn({
    //   variables: {
    //     email,
    //     password,
    //   },
    //   onCompleted(data) {
    //     if (data) {
    //       const { accessToken, refreshToken, user } =
    //         data.authLogin as UserResponse;

    //       if (accessToken) {
    //         setAuth(accessToken, refreshToken, user.role, redirectTo);
    //       }
    //     }
    //   },
    //   onError() {
    //     toast.error("Error al iniciar sesión");
    //   },
    // });
  };

  const userLoginGoogle = async () => {
    const result = await signIn("google", { callbackUrl: "/" });
    console.log(result);
  };

  const userLoginFacebook = async () => {
    const result = await signIn("facebook", { callbackUrl: "/" });
    console.log(result);
  };
  const userRegister = (data: CreateUserInput, redirectTo?: string) => {
    createUserFn({
      variables: {
        createUserInput: data,
      },
      onCompleted(data) {
        const { accessToken, refreshToken, user } =
          data.createUser as UserResponse;

        if (data) {
          if (accessToken) {
            setAuth(accessToken, refreshToken, user?.role ?? "", redirectTo);
          }
        }
      },
      onError(err) {
        toast.error(err.message || "Error al registrarse");
      },
    });
  };

  const logout = async () => {
    removeCookie("access_token");
    removeCookie("refresh_token");
    getLoggedUserFn();
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  const setAuth = (
    accessToken: string,
    refreshToken: string,
    role: string,
    redirectTo?: string
  ) => {
    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);
    setToken(accessToken);

    getLoggedUserFn();

    setTimeout(() => {
      if (redirectTo) return router.push(redirectTo);

      return router.push("/");
    }, 10);
  };
  useEffect(() => {
    const token = getCookie("access_token");
    console.log("get tokennn", token);
    if (token) {
      setToken(token);
      getAuthData();
    }
  }, []);

  const refetchUser = () => {
    getLoggedUserFn({
      fetchPolicy: "network-only",
    });
  };

  return {
    logout,
    token,
    changePassword,
    // changePasswordRes,
    updateUser,
    loggedUser: getLoggedUserRes.data?.dataWithToken,
    loadingUser: getLoggedUserRes.loading,
    userLoginGoogle,
    userLoginFacebook,
    userLogin,
    getAuthData,
    userRegister,
    setAuth,
    refetchUser,
    loginOptions: {
      data: authLoginRes.data?.authLogin as UserResponse,
      loading: authLoginRes.loading,
      error: authLoginRes.error,
    },
    updateUserOptions: {
      data: updateUserRes.data?.updateUser,
      loading: updateUserRes.loading,
      error: updateUserRes.error,
    },
    registerOptions: {
      data: createUserRes.data?.createUser as UserResponse,
      loading: createUserRes.loading,
      error: createUserRes.error,
    },
  };
};
