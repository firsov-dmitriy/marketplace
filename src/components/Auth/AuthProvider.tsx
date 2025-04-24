import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { useAuthControllerGetProfile, useAuthControllerLogout } from "@/gen";
import { LocalStorageService } from "@/services";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { setProfile, getProfile, clearProfile } = LocalStorageService;
  const [isAuthenticate, setIsAuthenticate] = useState<boolean | null>(
    Boolean(getProfile()),
  );
  const [loading, setLoading] = useState(false); // Индикатор загрузки

  const {
    data: profileData,
    error,
    refetch,
  } = useAuthControllerGetProfile({
    query: {
      retry: false,
      enabled: Boolean(isAuthenticate && !loading), // Запрашиваем только если пользователь аутентифицирован и нет загрузки
    },
  });

  const { mutateAsync: mutateLogout } = useAuthControllerLogout();

  useEffect(() => {
    if (profileData?.data) {
      setProfile(profileData.data);
      setIsAuthenticate(true);
    } else if (error) {
      console.warn(error);
    }
  }, [error, profileData?.data, setProfile]);

  const logout = async () => {
    try {
      await mutateLogout();
    } catch (e) {
      console.warn(e);
    } finally {
      clearProfile();
      setIsAuthenticate(null);
    }
  };

  const login = async () => {
    setLoading(true);
    try {
      const data = await refetch();
      if (data.data?.data) {
        setProfile(data.data?.data);
        setIsAuthenticate(true);
      }
    } catch (err) {
      console.warn("Login failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate,
        logout,
        login,
        profile: getProfile(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
