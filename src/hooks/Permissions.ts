import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../contexts/auth.context';
import { useAuth } from './Auth';
import { useProfile } from './Profile';

type TypeLink = {
  name: string;
  url: string;
};

interface IPermissions {
  User: TypeLink[];
  Usuário: TypeLink[];
  'Controlador de Acesso': TypeLink[];
  Atendente: TypeLink[];
  'Responsável por Atendente': TypeLink[];
  'Coordenação de Serviço': TypeLink[];
  'Gestão CEIP': TypeLink[];
}

const baseLinks = [{ name: 'Meu perfil', url: '/profile' }];

const permissions: IPermissions = {
  User: [...baseLinks],
  Usuário: [...baseLinks],
  'Controlador de Acesso': [...baseLinks].concat({
    name: 'Pesquisar perfis',
    url: '/search',
  }),
  Atendente: [...baseLinks].concat({
    name: 'Pesquisar perfis',
    url: '/search',
  }),
  'Responsável por Atendente': [...baseLinks].concat({
    name: 'Pesquisar perfis',
    url: '/search',
  }),
  'Coordenação de Serviço': [...baseLinks].concat({
    name: 'Pesquisar perfis',
    url: '/search',
  }),
  'Gestão CEIP': [...baseLinks].concat({
    name: 'Pesquisar perfis',
    url: '/search',
  }),
};

export const usePermissions = () => {
  const { isAuthenticated } = useAuth();
  const profile = useProfile();

  function processLinks(role: string | undefined): TypeLink[] {
    return isAuthenticated ? permissions[role as keyof IPermissions] : [];
  }

  return { links: processLinks(profile?.role) };
};
