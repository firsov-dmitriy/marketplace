import { JSX } from "react";
import { SignUp } from "../../pages";
import { CreatePost } from "../../pages/CreatePost";
import { SignIn } from "../../pages/SignIn";

export type Route = {
  Component: () => JSX.Element;
  path: string;
};
export const routes: Route[] = [
  { Component: SignUp, path: "/sign-up" },
  { Component: SignIn, path: "/sign-in" },
  { Component: CreatePost, path: "/create-post" },
];
