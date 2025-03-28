import { JSX } from "react";
import { SignUp, SignIn, CreatePost, Main, Posts } from "../../pages";

export type RoutePath =
  | "/sign-up"
  | "/sign-in"
  | "/create-post"
  | "/"
  | "/posts";

export type Route = {
  Component: () => JSX.Element;
  path: RoutePath;
};
export const routes: Route[] = [
  { Component: SignUp, path: "/sign-up" },
  { Component: SignIn, path: "/sign-in" },
  { Component: CreatePost, path: "/create-post" },
  { Component: Main, path: "/" },
  { Component: Posts, path: "/posts" },
] as const;
