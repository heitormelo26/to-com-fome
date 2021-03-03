import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";

import api from "../services/api";

import useLocalStorage from "../hooks/useLocalStorage";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextData {
  user: User | null;
  isLogged: boolean;
  signIn(email: string, password: string): Promise<any>;
  signOut(): void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage(
    "@tôComFome: user"
  );

  useEffect(() => {
    if (storageUser) {
      setUser(storageUser);
    }
  }, [storageUser]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      const { data } = await api.get(`/l?email=${email}&password=${password}`);
      if (data[0]) {
        setUser({
          id: data[0].id,
          name: data[0].name,
          email: data[0].email,
        });
        setStorageUser(data[0]);
        return new Promise(function (resolve, reject) {
          resolve(true);
        });
      } else {
        setUser(null);
        return new Promise(function (resolve, reject) {
          resolve(false);
        });
      }
    },
    [setStorageUser]
  );

  const signOut = useCallback(() => {
    removeStorageUser();
    setUser(null);
  }, [removeStorageUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged: Boolean(user),
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
