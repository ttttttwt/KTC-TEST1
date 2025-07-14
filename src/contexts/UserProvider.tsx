import React, { createContext, useState, type ReactNode } from "react";
import type { User } from "../type";

interface UserContextType {
  users: User[];
  addUser: (user: Omit<User, "id">) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (userData: Omit<User, "id">) => {
    const newUser: User = {
      id: Date.now(),
      ...userData,
      
    };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
