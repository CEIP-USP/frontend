import React from 'react';
import { createContext, FC, useState } from 'react';

export interface IAuthContextState {
  isLoading: boolean;
  isError: boolean;
  isBadCredentials: boolean;
  accessToken?: string;
}

type TAuthContext = [IAuthContextState, (nextState: IAuthContextState) => void];

export const AuthContext = createContext<TAuthContext>([
  { isLoading: false, isError: false, isBadCredentials: false },
  () => undefined,
]);

export const AuthContextProvider: FC = (props) => {
  const value = useState<IAuthContextState>({
    isLoading: false,
    isError: false,
    isBadCredentials: false,
  });
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
