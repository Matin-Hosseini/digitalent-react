import { createContext, useEffect, useState } from "react";
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

export const authContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const login = (userData: User) => {
    setIsLoggedIn(true);
    setUserInfo(userData);
  };

  const logout = () => {
    console.log("logout is being called");
  };

  const changeUserInfo = (newInfo: User) => {
    // console.log("changing user info", newInfo.user);
    setUserInfo(newInfo);
  };

  const getUser = async () => {
    try {
      const res = await Api.get("/me");
      setIsLoggedIn(true);
      setUserInfo(res.data.user);
    } catch (error) {
      setIsLoggedIn(false);
      setUserInfo(null);
      console.log("AuthContext: error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <authContext.Provider
      value={{ isLoggedIn, userInfo, getUser, login, logout, changeUserInfo }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
