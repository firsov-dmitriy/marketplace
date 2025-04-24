import React, { ReactElement, useEffect } from "react";
import { useAuth } from "../Auth";
import { useLocation, useNavigate } from "react-router";

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticate, profile, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(isAuthenticate, profile);
  useEffect(() => {
    if (!isAuthenticate) {
      navigate(`/sign-in?back=${encodeURIComponent(location.pathname)}`, {
        replace: true,
      });
    }
  }, [isAuthenticate, location.pathname, logout, navigate]);
  return children;
};
