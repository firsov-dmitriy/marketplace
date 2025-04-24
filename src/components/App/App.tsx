import { Routes, Route } from "react-router";
import { privateRoutes, routes } from "./routes.tsx";
import { AuthProvider } from "../Auth";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute.tsx";

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Публичные маршруты */}
        {routes.map(({ Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        {/* Приватные маршруты */}
        {privateRoutes.map(({ Component, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        ))}
      </Routes>
    </AuthProvider>
  );
};
