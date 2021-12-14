import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

export const useProfile = () => {
  const [state] = useContext(AuthContext);
  return {
    _id: 'handmade',
    name: 'Thiago Guerrero',
    email: 'tguerrero@usp.br',
    roles: ['Usuário', 'Gestão CEIP'],
  };
  return state.profile;
};
