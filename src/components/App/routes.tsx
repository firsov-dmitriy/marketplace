import { JSX } from "react";
import { SignUp, SignIn, CreatePost, Main, Posts, Profile } from "../../pages";

export type RoutePath =
  | "/sign-up"
  | "/sign-in"
  | "/create-post"
  | "/"
  | "/posts"
  | "/profile";

export type Route = {
  Component: () => JSX.Element;
  path: RoutePath;
};
export const routes: Route[] = [
  { Component: SignUp, path: "/sign-up" },
  { Component: SignIn, path: "/sign-in" },
  { Component: Main, path: "/" },
  { Component: Posts, path: "/posts" },
] as const;

export const privateRoutes: Route[] = [
  { Component: CreatePost, path: "/create-post" },
  { Component: Profile, path: "/profile" },
];
