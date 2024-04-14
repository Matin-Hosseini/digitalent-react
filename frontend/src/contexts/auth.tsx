import { createContext, useEffect, useState } from "react";
import Api from "../axios/api";

export const authContext = createContext({
  isLoggedIn: false,
  userInfo: {},
  login: (userData, token) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ username: "intial" });

  const login = (userData, token) => {
    setUserInfo(userData);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    console.log("logout is being called");
  };

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await Api.get("/get-me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res.data.user);
        setIsLoggedIn(true);
        setUserInfo(res.data.user);
      } catch (error) {
        console.log(error, "inside auth context, you should probably login");
      }
    };

    getUser();
  }, []);

  return (
    <authContext.Provider value={{ isLoggedIn, userInfo, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
