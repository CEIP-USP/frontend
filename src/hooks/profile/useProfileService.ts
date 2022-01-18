import { ProfileService } from '../../services/profile/profile.service';
import { startAxios } from '../Axios';
import { useAuth } from '../Auth';

export const useProfileService = () => {
  const auth = useAuth();
  const axios = startAxios();
  axios.interceptors.request.use((req) =>
    auth.getAccessToken().then((token) => {
      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${token}`,
      };
      return req;
    })
  );
  return new ProfileService(axios);
};
