import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/Auth';

export const RequireAuthN: FC = ({ children }) => {
  const { isAuthenticated, isLoading, isError, tryAuthenticate } = useAuth();
  const history = useHistory();

  useEffect(() => {
    tryAuthenticate();
  }, []);

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !isError) {
      const callback = history.location.pathname;
      history.push(`/login?callback=${callback}`);
    }
  }, [isAuthenticated, isLoading, isError, history]);

  if (isAuthenticated) return <>{children}</>;

  // TODO: Colocar banner de carregamento/etc
  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar</p>;

  return <></>;
};
