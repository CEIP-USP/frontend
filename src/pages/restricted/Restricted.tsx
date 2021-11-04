import React from 'react';
import { RequireAuthN } from '../../components/hoc/RequireAuthN';
import { useAuth } from '../../hooks/Auth';
// Teste

const RestrictedComponent = () => {
  const auth = useAuth();
  return (
    <div className="p-6">
      <h1>Página restrita para usuários autenticados</h1>
      <button
        className="mt-4 px-4 py-2 hover:bg-gray-200 transition-colors rounded-md"
        onClick={() => auth.signOut()}
      >
        SAIR
      </button>
    </div>
  );
};

export const RestrictedPage = () => {
  return (
    <RequireAuthN>
      <RestrictedComponent />
    </RequireAuthN>
  );
};
