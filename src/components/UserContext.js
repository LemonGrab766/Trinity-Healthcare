"use client";

import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = Cookies.get("auth_cookie");

        if (token) {
          const res = await fetch("/api/user/check", {
            headers: {
              token,
            },
          });

          if (res.ok) {
            const data = await res.json();
            setUser(data.user);
          } else {
            console.error("Error verifying user:", res.statusText);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
      }
    };
    checkAuthentication();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
