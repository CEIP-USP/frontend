import React from 'react';
import { RequireAuthN } from '../../components/hoc/RequireAuthN';
import { useAuth } from '../../hooks/Auth';
import { useProfile } from '../../hooks/Profile';
// Teste

const RestrictedComponent = () => {
  const auth = useAuth();
  const profile = useProfile();
  return (
    <div className="p-6">
      <h1>Página restrita para usuários autenticados</h1>
      {profile && (
        <h2>
          Olá {profile?.name} ({profile?.email}).{' '}
          {profile?.role && <span>Seu cargo é {profile?.role}.</span>}
        </h2>
      )}
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
