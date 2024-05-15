import { createContext, useContext, useEffect, useState } from "react";
import Api from "../axios/api";

import { User } from "./../types/User";

type AuthContext = {
  isLoggedIn: boolean;
  userInfo: User;
  getUser: () => void;
  login: (userData: User) => void;
  logout: () => void;
  changeUserInfo: (newInfo: User) => void;
};

export const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<User | {}>({});

  const login = (userData: User) => {
    setIsLoggedIn(true);
    setUserInfo(userData);
  };

  const logout = () => {
    console.log("logout is being called");
  };

  const changeUserInfo = (newInfo: User) => {
    setUserInfo(newInfo);
  };

  const getUser = async () => {
    try {
      const res = await Api.get("/me");
      setIsLoggedIn(true);
      setUserInfo(res.data.user);
    } catch (error) {
      setIsLoggedIn(false);
      setUserInfo({});
      console.log("AuthContext: error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userInfo, getUser, login, logout, changeUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthContext must be used in a AuthProvider");
  }

  return context;
};

export default AuthProvider;
