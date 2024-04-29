import { createContext, useEffect, useState } from "react";
import Api from "../axios/api";

export const authContext = createContext({
  isLoggedIn: false,
  userInfo: {},
  login: (userData, token) => {},
  logout: () => {},
  changeUserInfo: (newInfo) => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const login = (userData, token) => {
    setUserInfo(userData);
  };

  const logout = () => {
    console.log("logout is being called");
  };

  const changeUserInfo = (newInfo) => {
    console.log("changing user info", newInfo.user);
    setUserInfo(newInfo);
  };

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await Api.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data);
        setIsLoggedIn(true);
        setUserInfo(res.data.user);
      } catch (error) {
        console.log(error, "inside auth context, you should probably login");
      }
    };

    getUser();
  }, []);

  return (
    <authContext.Provider
      value={{ isLoggedIn, userInfo, login, logout, changeUserInfo }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
