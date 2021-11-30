import React, { createContext, FC, useState } from 'react';

export interface IJWTProfile {
  name: string;
  email: string;
  role?: string;
}

export interface IAuthContextState {
  isLoading: boolean;
  isError: boolean;
  isBadCredentials: boolean;
  accessToken?: string;
  profile?: IJWTProfile;
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
