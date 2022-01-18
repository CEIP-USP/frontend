import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth.context';

export const useProfile = () => {
  const [state] = useContext(AuthContext);
  return state.profile;
};
