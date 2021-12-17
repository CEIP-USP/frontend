import { useAuth } from './Auth';
import { useProfile } from './Profile';

type TypeLink = {
  name: string;
  url: string;
};

interface IPermissions {
  Usuário: TypeLink[];
  'Controlador de Acesso': TypeLink[];
  Atendente: TypeLink[];
  'Responsável por Atendente': TypeLink[];
  'Coordenação de Serviço': TypeLink[];
  'Gestão CEIP': TypeLink[];
}

const baseLinks = [{ name: 'Meu perfil', url: '/profile' }];

const permissions: IPermissions = {
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

export const usePermissions = (roles: string[] = []) => {
  const { isAuthenticated } = useAuth();
  const profile = useProfile();

  function getAllowedLinks(): TypeLink[] {
    const roles = profile?.roles;

    if (!isAuthenticated || !roles) return [];

    const links = roles.reduce((acc, role) => {
      const newLinks = permissions[role as keyof IPermissions] || [];
      newLinks.forEach((link) => acc.add(link));
      return acc;
    }, new Set());

    return Array.from(links) as TypeLink[];
  }

  function checkPermittedRoles(roles: string[]) {
    const userRoles = profile?.roles;

    if (!isAuthenticated || !userRoles) return false;

    return roles.some((role) => userRoles.includes(role));
  }

  function checkBlockedRoles(roles: string[]) {
    const userRoles = profile?.roles;

    if (!isAuthenticated || !userRoles) return true;

    return !roles.some((role) => userRoles.includes(role));
  }

  return {
    links: getAllowedLinks(),
    hasAccess: checkPermittedRoles(roles),
    checkPermittedRoles,
    checkBlockedRoles,
  };
};
