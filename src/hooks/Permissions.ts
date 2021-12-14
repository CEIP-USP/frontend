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
  //TODO: Remover 'User' após tradução do back
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

export const usePermissions = (roles: string[] = []) => {
  const { isAuthenticated } = useAuth();
  const profile = useProfile();

  function getAllowedLinks(_roles: string[] | undefined): TypeLink[] {
    if (!isAuthenticated) return [];

    _roles = _roles || [];

    return _roles.reduce(
      (acc, role) => acc.concat(permissions[role as keyof IPermissions] || []),
      [] as TypeLink[]
    );
  }

  function checkPermittedRoles(roles: string[]) {
    if (!isAuthenticated || !profile || !profile?.roles) return false;

    return roles.some((role) => (profile.roles || []).includes(role));
  }

  function checkBlockedRoles(roles: string[]) {
    if (!isAuthenticated || !profile || !profile?.roles) return true;

    return !roles.includes(profile?.roles[0] as string);
  }

  return {
    links: getAllowedLinks(profile?.roles || []),
    hasAccess: checkPermittedRoles(roles),
    checkPermittedRoles,
    checkBlockedRoles,
  };
};
