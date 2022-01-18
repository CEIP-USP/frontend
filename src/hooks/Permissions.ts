import { useAuth } from './Auth';
import { useProfile } from './profile/useProfile';

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

export const usePermissions = (permittedRoles: string[] = []) => {
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

  function checkPermittedRoles(_permittedRoles: string[]) {
    const userRoles = profile?.roles;

    if (!isAuthenticated || !userRoles) return false;

    return _permittedRoles.some((role) => userRoles.includes(role));
  }

  function checkBlockedRoles(_permittedRoles: string[]) {
    const userRoles = profile?.roles;

    if (!isAuthenticated || !userRoles) return true;

    return !_permittedRoles.some((role) => userRoles.includes(role));
  }

  return {
    links: getAllowedLinks(),
    hasAccess: checkPermittedRoles(permittedRoles),
    checkPermittedRoles,
    checkBlockedRoles,
  };
};
