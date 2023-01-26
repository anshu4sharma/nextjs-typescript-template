import React, { createContext, useContext } from "react";

 const UserContext = createContext<UserContextType | null>(null);

type UserContextType = {
  name: string;
  age: number;
};
const state: UserContextType = {
  name: "aanshu",
  age: 21,
};

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

// custom hook for useContext 

export const UseGlobalContext = () => {
  return useContext(UserContext);
};
