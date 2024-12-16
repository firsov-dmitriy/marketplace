import { Routes, Route } from "react-router";
import { routes } from "./routes.tsx";

export const App = () => {
  return (
    <Routes>
      {routes.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
