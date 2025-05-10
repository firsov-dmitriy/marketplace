import { JSX } from "react";
import { SignUp, SignIn, CreatePost, Main, Posts, Profile } from "../../pages";
import { PostInfoPage } from "@/pages/PostInfo/PostInfo.tsx";

export type RoutePath =
  | "/sign-up"
  | "/sign-in"
  | "/create-post"
  | "/"
  | "/posts"
  | "/profile"
  | "/posts/:id";

export type Route = {
  Component: () => JSX.Element;
  path: RoutePath;
};
export const routes: Route[] = [
  { Component: SignUp, path: "/sign-up" },
  { Component: SignIn, path: "/sign-in" },
  { Component: Main, path: "/" },
  { Component: Posts, path: "/posts" },
  { Component: PostInfoPage, path: "/posts/:id" },
] as const;

export const privateRoutes: Route[] = [
  { Component: CreatePost, path: "/create-post" },
  { Component: Profile, path: "/profile" },
];
